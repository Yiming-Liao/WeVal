// [r: Valuer]

import { FC, FormEventHandler, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useRegisterQualify } from "@/hooks/valuer/auth/register/useRegisterQualify";
import { Agreement, Button, Input, InputFile, Select } from "@/components/ui";

const FormRegisterQualification: FC = () => {
  const { refresh } = useRouter();
  const { registerQualify, isLoading } = useRegisterQualify();
  const searchParams = useSearchParams();
  const email = searchParams.get("email"); // Get email from URL

  const [serviceArea, setServiceArea] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [abn, setAbn] = useState<string>("");
  const [certificateFile, setCertificateFile] = useState<File | null>(null);
  const [isAgree1, setIsAgree1] = useState<boolean>(false);
  const [isAgree2, setIsAgree2] = useState<boolean>(false);

  // Register Qualify
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const isSent = await registerQualify({
      email: email || "",
      serviceArea,
      address,
      abn,
      certificateFile,
    });

    if (isSent) {
      refresh();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="size-full flex flex-col justify-between gap-16"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          {/* Select: serviceArea */}
          <Select
            required
            value={serviceArea}
            onChange={(e) => setServiceArea(e.target.value)}
          >
            <option value="" disabled hidden>
              Service area
            </option>
            <option value="queensland">Queensland</option>
            <option value="south_australia">South Australia</option>
          </Select>

          {/* Input: address */}
          <Input
            placeholder="Full address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          {/* Input: abn */}
          <Input
            minLength={11}
            maxLength={11}
            placeholder="ABN"
            value={abn}
            onChange={(e) => setAbn(e.target.value)}
          />
        </div>

        {/* Input: certificateFile */}
        <InputFile
          certificateFile={certificateFile}
          setCertificateFile={setCertificateFile}
        />
      </div>

      <div className="flex flex-col gap-4">
        {/* Agreement 1 */}
        <Agreement isAgree={isAgree1} setIsAgree={setIsAgree1}>
          As a registered valuer on this platform, I commit to providing
          accurate, objective valuations in compliance with relevant laws and
          standards. I will respect client privacy, use provided information
          responsibly, and am aware that policy violations may result in account
          suspension or other actions.
        </Agreement>
        {/* Agreement 2 */}
        <Agreement isAgree={isAgree2} setIsAgree={setIsAgree2}>
          By checking this box, you agree to the terms of service and privacy
          policy, and may continue using the service.
        </Agreement>

        {/* Button: submit */}
        <Button
          type="submit"
          isDisabled={!isAgree1 || !isAgree2}
          isLoading={isLoading}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

// Wrapper
const FormRegisterQualificationWrapper: FC = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <FormRegisterQualification />
    </Suspense>
  );
};

export default FormRegisterQualificationWrapper;
