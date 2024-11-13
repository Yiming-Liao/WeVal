"use client";

import { FileUpload, FileUploadBorder } from "@/components/svg";
import Image from "next/image";
import {
  Dispatch,
  DragEventHandler,
  FC,
  InputHTMLAttributes,
  MouseEventHandler,
  SetStateAction,
  useRef,
  useState,
} from "react";

type InputFileProps = InputHTMLAttributes<HTMLInputElement> & {
  certificateFile: File | null;
  setCertificateFile: Dispatch<SetStateAction<File | null>>;
};

const InputFile: FC<InputFileProps> = ({
  certificateFile,
  setCertificateFile,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  // Click
  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  // Drag event handler for dropping files
  const handleDrop: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      setCertificateFile(files[0]);
    }
  };

  // Drag over handler to change styles when dragging files over
  const handleDragOver: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  // Drag leave handler to reset styles when file leaves the area
  const handleDragLeave: MouseEventHandler<HTMLDivElement> = () => {
    setIsDragOver(false);
  };

  return (
    <div className={`h-64 px-6 ${isDragOver ? "opacity-50" : ""} duration-200`}>
      <div
        className="size-full relative cursor-pointer"
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="size-full absolute left-[50%] translate-x-[-50%]">
          <FileUploadBorder />

          {!certificateFile ? (
            <>
              {/* Hint text */}
              <div className="size-full flex flex-col justify-center items-center gap-6">
                <div className="flex-1"></div>
                <FileUpload />

                <p className="flex-1 text-center typography-label-sm flex flex-col text-gray-400 font-light">
                  <span>For identity verification,</span>
                  <span>please upload your appraiser</span>
                  <span>certification.</span>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="size-full p-4 flex flex-col justify-center items-center gap-4">
                {/* Preview */}
                <div className="size-32 flex justify-center items-center">
                  {certificateFile.type.startsWith("image") ? (
                    <Image
                      src={URL.createObjectURL(certificateFile)}
                      width={64}
                      height={64}
                      alt={""}
                      className="size-full object-contain"
                    />
                  ) : (
                    <p className="scale-[500%] pl-1">📄</p>
                  )}
                </div>

                <p className="max-w-[80%] text-gray-600 flex">
                  <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                    {certificateFile.name.split(".")[0]}
                  </span>
                  <span>.{certificateFile.name.split(".")[1]}</span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Hidden input */}
      <div className="hidden">
        <input
          {...props}
          type="file"
          hidden
          ref={inputRef}
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setCertificateFile(e.target.files[0]);
            }
          }}
        />
      </div>
    </div>
  );
};

export default InputFile;
