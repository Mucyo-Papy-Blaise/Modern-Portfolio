interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "secondary" | "outline"
  className?: string
  onClick?: () => void
}

export default function Badge({ children, variant = "default", className = "", onClick }: BadgeProps) {
  const variants = {
    default: "bg-blue-600 text-white",
    secondary: "text-white",
    outline: "border text-white",
  }

  const secondaryStyle = variant === "secondary" ? { backgroundColor: "#393939" } : {}
  const outlineStyle = variant === "outline" ? { borderColor: "#393939" } : {}

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${variants[variant]} ${className} ${onClick ? "cursor-pointer hover:opacity-80" : ""}`}
      style={{ ...secondaryStyle, ...outlineStyle }}
      onClick={onClick}
    >
      {children}
    </span>
  )
}
