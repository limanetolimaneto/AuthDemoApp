export default function ErrorMessage({ message }) {
  // If there is no message, do not render anything
  if (!message) return null

  // Display the error message inside a styled container
  return (
    <div className="w-full p-3 mb-4 text-sm rounded-md bg-red-100 text-red-700 border border-red-300">
      {message}
    </div>
  )
}
