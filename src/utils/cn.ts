import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility to conditionally join class names and resolve Tailwind CSS conflicts.
 *
 * - Uses `clsx` for conditional class logic
 * - Uses `twMerge` to handle conflicting Tailwind classes (e.g., `p-2` vs `p-4`)
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
