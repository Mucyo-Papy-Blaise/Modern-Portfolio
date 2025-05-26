interface confirmDialogProps {
    open: boolean,
    title: string,
    message: string,
    onConfirm: () => void,
    onCancel: () => void,
}

const ConfirmDialog =({open,title,message,onConfirm,onCancel}: confirmDialogProps) => {
    if(!open) return null
  return (
      <div className="fixed inset-0 bg-Color1 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-Color1 p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-lg font-semibold mb-4 text-Color5">{title}</h2>
        <p className="mb-6 text-white">{message}</p>
        <div className="flex justify-end gap-4">
          <button onClick={onCancel} className="bg-gray-200 px-4 py-2 rounded">Cancel</button>
          <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDialog


