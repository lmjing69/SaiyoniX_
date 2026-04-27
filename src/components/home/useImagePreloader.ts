"use client";

import { useState, useEffect, useRef } from "react";

export function useImagePreloader(path: string, frameCount: number) {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const cache = useRef<Map<string, HTMLImageElement[]>>(new Map());

  useEffect(() => {
    const sequenceKey = `${path}-${frameCount}`;
    if (cache.current.has(sequenceKey)) {
      setImages(cache.current.get(sequenceKey)!);
      setLoaded(true);
      setProgress(100);
      return;
    }

    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const loadImage = (index: number) => {
      const img = new Image();
      const paddedIndex = String(index).padStart(3, "0");
      img.src = `${path}/frame-${paddedIndex}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        const percent = Math.floor((loadedCount / frameCount) * 100);
        setProgress(percent);

        if (loadedCount === frameCount) {
          // Sort images to ensure correct order if loaded asynchronously
          // Actually, we should push them into fixed slots
          loadedImages[index - 1] = img;
          
          // Final check to ensure all slots are filled
          if (loadedImages.filter(Boolean).length === frameCount) {
            cache.current.set(sequenceKey, loadedImages);
            setImages(loadedImages);
            setLoaded(true);
          }
        }
      };
      
      loadedImages[index - 1] = img;
    };

    for (let i = 1; i <= frameCount; i++) {
      loadImage(i);
    }
  }, [path, frameCount]);

  return { images, loaded, progress };
}
