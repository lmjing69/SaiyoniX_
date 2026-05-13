"use client";

import { motion, AnimatePresence } from "motion/react";
import { AlertTriangle, X, ShieldAlert } from "lucide-react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  variant?: "danger" | "warning";
}

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm Action",
  variant = "danger"
}: ConfirmationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-bg/80 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#0d121f] border border-white/10 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden z-110"
          >
            {/* Header / Icon */}
            <div className="p-6 pb-0 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                variant === "danger" 
                  ? "bg-red-500/10 border-red-500/20 text-red-400" 
                  : "bg-amber-500/10 border-amber-500/20 text-amber-400"
              }`}>
                {variant === "danger" ? <ShieldAlert className="w-6 h-6" /> : <AlertTriangle className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-text-2 text-sm leading-relaxed italic opacity-80">
                &ldquo;{message}&rdquo;
              </p>
            </div>

            {/* Actions */}
            <div className="p-6 bg-white/2 border-t border-white/5 flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-text-2 hover:bg-white/10 hover:text-white transition-all"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
                className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all shadow-lg ${
                  variant === "danger"
                    ? "bg-red-500 hover:bg-red-600 shadow-red-500/10"
                    : "bg-amber-500 hover:bg-amber-600 shadow-amber-500/10"
                }`}
              >
                {confirmText}
              </button>
            </div>
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-text-3 hover:text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
