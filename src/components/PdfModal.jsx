import PropTypes from "prop-types";

const PdfModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      role="presentation"
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black bg-opacity-80 bg-blur backdrop-blur backdrop-saturate-150 z-50 overflow-y-auto flex items-center justify-center"
    >
      <div className="bg-gray-600 bg-opacity-5  p-6 rounded-lg flex flex-col justify-center items-center shadow-lg max-w-4xl w-full max-h-[90vh]">
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded-lg mb-2 self-end"
        >
          Fermer
        </button>
        {children}
      </div>
    </div>
  );
};
PdfModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default PdfModal;
