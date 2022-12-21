import { motion } from 'framer-motion';
import React from 'react'

export const WebDevelopment = () => {
    return (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>

            <div>WebDevelopment</div>
            
        </motion.div>
    )
}
