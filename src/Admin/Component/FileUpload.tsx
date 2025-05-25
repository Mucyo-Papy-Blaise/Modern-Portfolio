import { useState, useCallback } from "react"

interface FileUploadProps {
  onFileSelect: (files: File[]) => void
  accept?: string
  multiple?: boolean
  maxSize?: number
  className?: string
}

export default function FileUpload({
  onFileSelect,
  accept = "image/*",
  multiple = false,
  maxSize = 5 * 1024 * 1024, // 5MB
  className = "",
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }, [])

  const handleFiles = (files: File[]) => {
    const validFiles = files.filter((file) => {
      if (file.size > maxSize) return false
      if (accept && !file.type.match(accept.replace("*", ".*"))) return false
      return true
    })

    setUploadedFiles((prev) => [...prev, ...validFiles])
    onFileSelect(validFiles)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      handleFiles(files)
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          dragActive ? "border-blue-500 bg-blue-50 bg-opacity-10" : "hover:border-white"
        }`}
        style={{
          backgroundColor: "#1A1A1A",
          borderColor: dragActive ? "#3b82f6" : "#393939",
        }}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-input")?.click()}
      >
        <input
          id="file-input"
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleInputChange}
          className="hidden"
        />

        <div className="space-y-4">
          <div className="text-4xl">📁</div>
          <div>
            <p className="text-lg font-medium text-white">{dragActive ? "Drop files here" : "Upload files"}</p>
            <p className="text-sm text-white mt-1">Drag and drop files here, or click to browse</p>
            <p className="text-xs text-white mt-2">Max file size: {formatFileSize(maxSize)}</p>
          </div>
        </div>
      </div>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white">Uploaded Files:</h4>
          {uploadedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border rounded-lg"
              style={{ backgroundColor: "#1A1A1A", borderColor: "#393939" }}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{file.type.startsWith("image/") ? "🖼️" : "📄"}</span>
                <div>
                  <p className="text-sm font-medium text-white">{file.name}</p>
                  <p className="text-xs text-white">{formatFileSize(file.size)}</p>
                </div>
              </div>
              <button onClick={() => removeFile(index)} className="text-red-400 hover:text-red-300 p-1 rounded">
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
