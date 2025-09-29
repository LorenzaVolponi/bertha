"use client"

import type React from "react"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import type { MotionProps } from "framer-motion"

export const SafeMotionDiv = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & MotionProps>(
  (props, ref) => {
    return <motion.div ref={ref} {...props} />
  },
)

SafeMotionDiv.displayName = "SafeMotionDiv"
