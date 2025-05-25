interface TextareaProps {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
  required?: boolean
  rows?: number
  id?: string
}

export default function Textarea({
  placeholder,
  value,
  onChange,
  className = "",
  required = false,
  rows = 4,
  id,
}: TextareaProps) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      rows={rows}
      className={`flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      style={{ backgroundColor: "#111111", borderColor: "#393939" }}
    />
  )
}
