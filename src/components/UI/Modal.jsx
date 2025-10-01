"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const Modal = ({ open, onClose, children }) => {
useEffect(() => {
  if (open) {
    document.body.classList.add("no-scroll");
    document.documentElement.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
    document.documentElement.classList.remove("no-scroll");
  }
  return () => {
    document.body.classList.remove("no-scroll");
    document.documentElement.classList.remove("no-scroll");
  };
}, [open]);



  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={e => {
              // Prevent anchor default behavior when closing modal
              if (e.target.tagName === 'A') {
                e.preventDefault();
              }
              onClose && onClose(e);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content */}
          <motion.div
            className="relative z-10 w-full max-w-[1160px] mx-4 md:mx-0"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
