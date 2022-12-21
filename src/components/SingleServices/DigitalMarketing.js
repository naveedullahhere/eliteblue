import React from 'react'
import { motion } from 'framer-motion';

export const DigitalMarketing = () => {
    return (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>

            <div>DigitalMarketing</div>
        </motion.div>

    )
}
