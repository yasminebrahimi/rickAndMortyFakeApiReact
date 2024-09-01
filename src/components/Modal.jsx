// Import the XCircleIcon component from Heroicons for the close button
import { XCircleIcon } from "@heroicons/react/24/outline";

// Define the Modal component, which accepts props: title, children, onOpen, and open
function Modal({ title, children, onOpen, open }) {
  // If the 'open' prop is false, the modal should not be rendered
  if (!open) return null;

  // Render the modal structure
  return (
    <div>
      {/* Backdrop overlay, which closes the modal when clicked */}
      <div className="backdrop" onClick={() => onOpen(false)}></div>

      {/* Modal container */}
      <div className="modal">
        {/* Modal header containing the title and close button */}
        <div className="modal__header">
          {/* Display the title passed via props */}
          <h2 className="title">{title}</h2>

          {/* Close button with an icon, which triggers the onOpen function to close the modal */}
          <button onClick={() => onOpen(false)}>
            <XCircleIcon className="icon close" />
          </button>
        </div>

        {/* Render any child components passed within the modal */}
        {children}
      </div>
    </div>
  );
}

// Export the Modal component for use in other parts of the application
export default Modal;

