import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(
  ["transition-colors duration-300 ease-in-out"],
  {
    variants: {
      variant: {
        default: [
          "text-primary-text",
          "bg-transparent",
          "hover:text-accent-default",
        ],
        highlight: [
          "text-color-heading",
          "bg-accent-default",
          "hover:bg-accent-default/70",
        ],
        outline: [
          "text-accent-default",
          "border",
          "border-accent-default",
          "hover:text-color-heading",
          "hover:border-color-heading",
        ],
        menu: [
          "text-primary-text",
          "bg-transparent",
          "hover:text-accent-default",
          "w-full",
        ],
        secondary: [
          "text-primary-text",
          "bg-secondary-dark",
          "hover:text-accent-default",
          "hover:bg-secondary-dark/90",
        ],
      },
      size: {
        default: ["rounded", "p-2"],
        icon: [
          "rounded-full",
          "w-12",
          "h-12",
          "flex",
          "items-center",
          "justify-center",
          "p-2.5",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export function Button({
  variant = "default",
  size = "default",
  className,
  ...props
}) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
}
