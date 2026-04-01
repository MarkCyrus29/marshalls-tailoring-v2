import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white border border-[#1b3fa6] hover:bg-brand-blue-dark hover:border-[#122980] active:scale-[0.98]",
  secondary:
    "bg-transparent text-brand-blue border border-[#1b3fa6] hover:bg-brand-blue-light active:scale-[0.98]",
  ghost:
    "bg-transparent text-ink-muted border border-transparent hover:bg-[#f0f2f8] hover:text-brand-blue active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-5 text-xs tracking-widest",
  md: "h-11 px-7 text-sm tracking-widest",
  lg: "h-13 px-9 text-sm tracking-widest",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", className = "", children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={[
          "inline-flex items-center justify-center gap-2",
          "rounded-full font-sans font-semibold uppercase",
          "transition-all duration-300 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          "cursor-pointer select-none",
          variantStyles[variant],
          sizeStyles[size],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
