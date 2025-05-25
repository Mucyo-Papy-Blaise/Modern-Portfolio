interface InputProps {
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  required?: boolean
  id?: string
  name?: string
}

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  required = false,
  id,
}: InputProps) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      style={{ backgroundColor: "#111111", borderColor: "#393939" }}
    />
  )
}
