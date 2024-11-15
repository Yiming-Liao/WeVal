// [r: Valuer]

import { FC } from "react";

const QualificationRejection: FC<{ message: string | undefined }> = ({
  message,
}) => {
  return (
    <div className="border border-red-600 rounded-md p-4 flex flex-col gap-4">
      <h2 className="typography-label-md text-red-600">
        Your qualification request has been rejected.
      </h2>

      <p className="typography-label-md  flex flex-col">
        <span className="typography-label-sm text-gray-600">Reason :</span>
        <span className="text-red-600">{message || ""}</span>
      </p>

      <p className="typography-label-sm text-gray-600">
        Please resubmit your application after making the necessary updates.
      </p>
    </div>
  );
};
export default QualificationRejection;
