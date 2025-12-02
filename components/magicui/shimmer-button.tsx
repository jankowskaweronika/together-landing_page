import * as React from "react"
import { cn } from "@/lib/utils"

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        {/* Animated border gradient */}
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

        {/* Button */}
        <button
          ref={ref}
          className={cn(
            "relative inline-flex items-center justify-center rounded-full",
            "bg-black px-8 py-3 text-sm font-medium text-white backdrop-blur-3xl",
            "transition-all duration-300 hover:scale-105",
            className
          )}
          {...props}
        >
          {children}
        </button>
      </div>
    )
  }
)
ShimmerButton.displayName = "ShimmerButton"

export { ShimmerButton }