"use client";

import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0  bg-black/50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <motion.div 
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-lg"
            >
                {children}
            </motion.div>
        </div>
    );
}

export default Modal;
