interface SelectProps {
  value?: string
  onChange?: (value: string) => void
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Select({ value, onChange, children, className = "", id }: SelectProps) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      style={{ backgroundColor: "#111111", borderColor: "#393939" }}
    >
      {children}
    </select>
  )
}
