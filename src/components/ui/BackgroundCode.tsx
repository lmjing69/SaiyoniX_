"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimationFrame } from "motion/react";

const CODE_LINES = [
  { text: "const", color: "#c678dd" }, { text: " infrastructure ", color: "#e5c07b" }, { text: "= ", color: "#56b6c2" }, { text: "new ", color: "#c678dd" }, { text: "SaiyonixCloud();", color: "#61afef" },
  { text: "await", color: "#c678dd" }, { text: " infrastructure.", color: "#abb2bf" }, { text: "deploy", color: "#61afef" }, { text: "({ ", color: "#abb2bf" }, { text: "region: ", color: "#d19a66" }, { text: "'global-edge' ", color: "#98c379" }, { text: "});", color: "#abb2bf" },
  { text: "// Initializing neural mesh network...", color: "#5c6370" },
  { text: "node_72.", color: "#e06c75" }, { text: "status ", color: "#abb2bf" }, { text: "=== ", color: "#56b6c2" }, { text: "'active' ", color: "#98c379" }, { text: "? ", color: "#56b6c2" }, { text: "sync() ", color: "#61afef" }, { text: ": ", color: "#56b6c2" }, { text: "reboot();", color: "#61afef" },
  { text: "export ", color: "#c678dd" }, { text: "async ", color: "#c678dd" }, { text: "function ", color: "#c678dd" }, { text: "synchronizeState(nodeId: string) {", color: "#61afef" },
  { text: "  const ", color: "#c678dd" }, { text: "state ", color: "#e5c07b" }, { text: "= ", color: "#56b6c2" }, { text: "await ", color: "#c678dd" }, { text: "fetchState(nodeId);", color: "#61afef" },
  { text: "  return ", color: "#c678dd" }, { text: "applyEncryption(state, ", color: "#61afef" }, { text: "'AES-256-GCM'", color: "#98c379" }, { text: ");", color: "#abb2bf" },
  { text: "}", color: "#abb2bf" },
  { text: "system.", color: "#abb2bf" }, { text: "log(", color: "#61afef" }, { text: "'Operational intelligence synced.'", color: "#98c379" }, { text: ");", color: "#abb2bf" },
  { text: "if ", color: "#c678dd" }, { text: "(load ", color: "#abb2bf" }, { text: "> ", color: "#56b6c2" }, { text: "0.85) ", color: "#d19a66" }, { text: "scaleHorizontal();", color: "#61afef" },
  { text: "import ", color: "#c678dd" }, { text: "{ ", color: "#abb2bf" }, { text: "AIOracle ", color: "#e5c07b" }, { text: "} ", color: "#abb2bf" }, { text: "from ", color: "#c678dd" }, { text: "'@saiyonix/intelligence';", color: "#98c379" },
  { text: "const ", color: "#c678dd" }, { text: "prediction ", color: "#e5c07b" }, { text: "= ", color: "#56b6c2" }, { text: "AIOracle.", color: "#abb2bf" }, { text: "analyze(trafficPattern);", color: "#61afef" },
];

// Helper to group words into full lines for easier rendering
const SCROLL_DATA = [
    [CODE_LINES[0], CODE_LINES[1], CODE_LINES[2], CODE_LINES[3], CODE_LINES[4]],
    [CODE_LINES[5], CODE_LINES[6], CODE_LINES[7], CODE_LINES[8], CODE_LINES[9], CODE_LINES[10], CODE_LINES[11]],
    [CODE_LINES[12]],
    [CODE_LINES[13], CODE_LINES[14], CODE_LINES[15], CODE_LINES[16], CODE_LINES[17], CODE_LINES[18], CODE_LINES[19], CODE_LINES[20]],
    [CODE_LINES[21], CODE_LINES[22], CODE_LINES[23], CODE_LINES[24]],
    [CODE_LINES[25], CODE_LINES[26], CODE_LINES[27], CODE_LINES[28], CODE_LINES[29]],
    [CODE_LINES[30], CODE_LINES[31], CODE_LINES[32], CODE_LINES[33]],
    [CODE_LINES[34]],
    [CODE_LINES[35], CODE_LINES[36], CODE_LINES[37], CODE_LINES[38]],
    [CODE_LINES[39], CODE_LINES[40], CODE_LINES[41], CODE_LINES[42], CODE_LINES[43]],
    [CODE_LINES[44], CODE_LINES[45], CODE_LINES[46], CODE_LINES[47], CODE_LINES[48], CODE_LINES[49]],
    [CODE_LINES[50], CODE_LINES[51], CODE_LINES[52], CODE_LINES[53], CODE_LINES[54]],
];

export default function BackgroundCode() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [yPos, setYPos] = useState(0);

  useAnimationFrame((time) => {
    // Scroll up by 0.5px per frame approx
    setYPos((prev) => (prev - 0.4) % 400); 
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.2] flex font-mono text-[11px] pt-20">
      <div className="flex w-full gap-24 px-12">
        {[0, 1, 2, 3].map((colIndex) => (
          <div 
            key={colIndex} 
            className="flex-1 flex flex-col gap-2"
            style={{ transform: `translateY(${yPos}px)` }}
          >
            {/* Double the array to create seamless loop */}
            {[...SCROLL_DATA, ...SCROLL_DATA, ...SCROLL_DATA].map((line, lineIdx) => (
              <div key={lineIdx} className="whitespace-nowrap flex">
                {line.map((part, partIdx) => (
                  <span key={partIdx} style={{ color: part.color }}>
                    {part.text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
