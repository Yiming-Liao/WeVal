import { Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom";

const RejectModal = ({
  isModalOpen,
  setModalOpen,
  handleReject,
  message,
  setMessage,
}: RejectModalProps) => {
  if (!isModalOpen) return;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 size-full bg-black/30 flex justify-center items-center">
      <div
        className="size-96 bg-slate-200 rounded p-4 flex flex-col gap-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <p>Rejection message:</p>
        <textarea
          className="w-full h-64 rounded p-4"
          style={{ resize: "none" }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className="flex justify-center gap-8">
          <button
            onClick={() => setModalOpen(false)}
            className="p-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button onClick={handleReject} className="p-2 bg-red-500 rounded">
            Reject
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default RejectModal;

interface RejectModalProps {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  handleReject: () => void;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}
