interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-color5 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "text-white hover:bg-opacity-20 hover:bg-white",
    outline: "border text-white hover:bg-opacity-20 hover:bg-white",
    ghost: "text-white hover:bg-opacity-20 hover:bg-white",
  }

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-12 px-8",
  }

  const outlineStyle = variant === "outline" ? { borderColor: "#393939" } : {}

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      style={outlineStyle}
    >
      {children}
    </button>
  )
}
