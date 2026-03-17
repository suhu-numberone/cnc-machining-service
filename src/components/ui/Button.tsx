"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "signal";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "group relative inline-flex items-center justify-center font-mono font-medium tracking-wide transition-all duration-300 overflow-hidden",
          // Size variants
          size === "sm" && "px-5 py-2.5 text-xs uppercase tracking-widest",
          size === "md" && "px-7 py-3.5 text-sm uppercase tracking-widest",
          size === "lg" && "px-10 py-5 text-sm uppercase tracking-widest",
          // Primary variant - Gold with glow effect
          variant === "primary" && [
            "bg-gold-primary text-apex-void",
            "before:absolute before:inset-0 before:bg-gold-hot before:translate-y-full before:transition-transform before:duration-300",
            "hover:before:translate-y-0",
            "hover:shadow-[0_0_30px_rgba(212,160,58,0.4)]",
            "[&>*]:relative [&>*]:z-10",
          ],
          // Secondary variant - Steel with border
          variant === "secondary" && [
            "bg-apex-steel text-white border border-apex-iron",
            "hover:bg-apex-iron hover:border-gold-dark",
          ],
          // Outline variant - Transparent with gold border
          variant === "outline" && [
            "bg-transparent text-gold-primary border border-gold-primary/50",
            "hover:bg-gold-primary/10 hover:border-gold-primary",
          ],
          // Ghost variant - Minimal
          variant === "ghost" && [
            "bg-transparent text-gray-400",
            "hover:text-gold-primary hover:bg-white/5",
          ],
          // Signal variant - Orange urgent CTA
          variant === "signal" && [
            "bg-signal text-white",
            "before:absolute before:inset-0 before:bg-signal-muted before:translate-y-full before:transition-transform before:duration-300",
            "hover:before:translate-y-0",
            "hover:shadow-[0_0_30px_rgba(255,77,0,0.4)]",
            "[&>*]:relative [&>*]:z-10",
          ],
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };
