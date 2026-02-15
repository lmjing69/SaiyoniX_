"use client";

import { useEffect, useState } from "react";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShow(true);
        } else {
            const timer = setTimeout(() => setShow(false), 200);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!show && !isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Card */}
            <div
                className={`relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-all duration-300 ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
                    }`}
            >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                    <svg
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Inquiry Sent Successfully!
                </h3>

                <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                    Thank you for reaching out. Our team has received your message and will get back to you shortly.
                </p>

                <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-slate-800 hover:-translate-y-0.5 transition-all"
                    onClick={onClose}
                >
                    Got it, thanks!
                </button>
            </div>
        </div>
    );
}
