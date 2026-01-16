import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function for merging Tailwind classes conditionally and cleanly.
 * It combines `clsx` for conditional logic and `twMerge` to resolve Tailwind conflicts.
 *
 * @param inputs - A list of class values to merge
 * @returns A single merged className string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

// Optionally export ClassValue if you're using it in component props elsewhere
export type { ClassValue }
