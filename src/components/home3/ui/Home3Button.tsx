import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface Home3ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Home3Button = forwardRef<HTMLButtonElement, Home3ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-lg",
          // Size variants
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-sm",
          size === "lg" && "px-8 py-4 text-base",
          // Style variants
          variant === "primary" && [
            "bg-[#D4A03A] text-[#0A0A0A]",
            "hover:bg-[#E8C068]",
            "active:bg-[#B8862E]",
          ],
          variant === "outline" && [
            "bg-transparent text-white",
            "border border-[#333333]",
            "hover:border-[#D4A03A] hover:text-[#D4A03A]",
          ],
          variant === "ghost" && [
            "bg-transparent text-[#D4A03A]",
            "hover:bg-[#D4A03A]/10",
          ],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Home3Button.displayName = "Home3Button";
