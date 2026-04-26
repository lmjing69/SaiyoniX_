"use client";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 opacity-100"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Card */}
            <div
                className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-all duration-300 scale-100 translate-y-0"
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
