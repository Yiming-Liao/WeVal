// [r: Valuer]

"use client";

import { useRegisterQualify } from "@/hooks/valuer/auth/register/useRegisterQualify";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler, Suspense, useState } from "react";

const FormRegisterQualification = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email"); // Get email from URL searchParams

  const { registerQualify } = useRegisterQualify();
  const { push } = useRouter();

  const [serviceArea, setServiceArea] = useState<string>("queensland");
  const [address, setAddress] = useState<string>("");
  const [abn, setAbn] = useState<string>("");
  const [certificateFile, setCertificateFile] = useState<File | null>(null);

  const [agreement1, setAgreement1] = useState<boolean>(false);
  const [agreement2, setAgreement2] = useState<boolean>(false);

  // Register Qualify
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!certificateFile) {
      return alert("Please upload certificate file.");
    }

    if (!agreement1 || !agreement2) {
      return alert("Please agree...");
    }

    const isDone = await registerQualify({
      email: email || "",
      serviceArea,
      address,
      abn,
      certificateFile,
      agreement1,
      agreement2,
    });

    // Push to Dashboard
    if (isDone) {
      push("/valuer/dashboard");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-4">
        {/* Service area */}
        <div className="flex flex-col gap-1">
          <label htmlFor="service_area">Service area</label>
          <select
            id="service_area"
            value={serviceArea}
            onChange={(e) => setServiceArea(e.target.value)}
          >
            <option value="queensland">Queensland</option>
            <option value="south_australia">South Australia</option>
          </select>
        </div>

        {/* Full address */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">Full address</label>
          <input
            type="text"
            placeholder="Full address"
            className="border"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* ABN */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">ABN</label>
          <input
            type="text"
            placeholder="ABN"
            className="border"
            value={abn}
            onChange={(e) => setAbn(e.target.value)}
          />
        </div>

        {/* Certificate file */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">Certificate file</label>
          <input
            type="file"
            className="border"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setCertificateFile(e.target.files[0]);
              }
            }}
          />
        </div>

        {/* Agreement 1 */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">Agreement 1</label>
          <input
            type="checkbox"
            className="border-2 size-8"
            checked={agreement1}
            onChange={() => setAgreement1((prev) => !prev)}
          />
        </div>

        {/* Agreement 2 */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">Agreement 2</label>
          <input
            type="checkbox"
            className="border-2 size-8"
            checked={agreement2}
            onChange={() => setAgreement2((prev) => !prev)}
          />
        </div>

        <button>Submit</button>
      </form>
    </>
  );
};

const FormRegisterQualificationWrapper = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <FormRegisterQualification />
    </Suspense>
  );
};

export default FormRegisterQualificationWrapper;
