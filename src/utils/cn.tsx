import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export const utilsTs = {
  cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  },
};

export function cn(...inputs: ClassValue[]) {
  return utilsTs.cn(...inputs);
};
