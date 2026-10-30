import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Button = ({ className, variant = 'primary', ...props }) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-slate-800 shadow-primary/20',
    secondary: 'bg-secondary text-white hover:bg-emerald-600 shadow-secondary/20',
    outline: 'border-2 border-slate-200 text-slate-600 hover:bg-slate-50',
    ghost: 'text-slate-600 hover:bg-slate-100',
  };

  return (
    <button
      className={cn(
        'px-6 py-2.5 rounded-xl font-semibold transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:pointer-events-none shadow-lg',
        variants[variant],
        className
      )}
      {...props}
    />
  );
};

export const Card = ({ className, children, glass = false, ...props }) => {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all',
        glass ? 'glass shadow-xl' : 'bg-white shadow-lg border border-slate-100 shadow-slate-200/50',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const Input = ({ className, label, ...props }) => {
  return (
    <div className="space-y-1.5 w-full">
      {label && <label className="text-sm font-medium text-slate-700">{label}</label>}
      <input
        className={cn(
          'w-full px-4 py-3 rounded-xl border border-slate-200 outline-none transition-all focus:ring-2 focus:ring-primary/10 focus:border-primary',
          className
        )}
        {...props}
      />
    </div>
  );
};

export const Badge = ({ className, variant = 'blue', children, ...props }) => {
  const variants = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    green: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
    red: 'bg-red-50 text-red-600 border-red-100',
  };

  return (
    <span
      className={cn(
        'px-3 py-1 rounded-full text-xs font-bold border',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
