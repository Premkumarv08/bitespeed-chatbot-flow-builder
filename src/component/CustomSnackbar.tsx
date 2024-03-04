import React, { useEffect } from "react";

interface CustomSnackbarProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  message,
  show,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Automatically close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-0 transform -translate-x-1 bg-gray-500 text-white px-4 py-2 rounded-md w-auto flex items-center justify-between gap-5">
      <span>{message}</span>
      <button onClick={handleClose} className="focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm5.657 14.243c.391.391.391 1.023 0 1.414-.391.391-1.023.391-1.414 0L10 11.414l-4.243 4.243c-.391.391-1.023.391-1.414 0-.391-.391-.391-1.023 0-1.414L8.586 10 4.343 5.757c-.391-.391-.391-1.023 0-1.414.391-.391 1.023-.391 1.414 0L10 8.586l4.243-4.243c.391-.391 1.023-.391 1.414 0 .391.391.391 1.023 0 1.414L11.414 10l4.243 4.243z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default CustomSnackbar;
