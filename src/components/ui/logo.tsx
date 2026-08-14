import * as React from "react"
import { cn } from "@/lib/utils"

export function LogoIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("text-green-500", className)}
      fill="currentColor"
      {...props}
    >
      <path d="M50 0C55 20 70 35 90 40C70 45 55 60 50 80C45 60 30 45 10 40C30 35 45 20 50 0Z" />
      <path
        d="M50 20C52 32 60 40 72 42C60 44 52 52 50 64C48 52 40 44 28 42C40 40 48 32 50 20Z"
        fill="#22c55e"
      />
    </svg>
  )
}
