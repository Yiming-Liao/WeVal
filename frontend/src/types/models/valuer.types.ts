// [r: Valuer]

export interface Valuer {
  email: string;
  username: string;
  phone: string;
  status: ValuerStatus;
  qualificationRejectionMessage?: string;
  valuerQualification?: ValuerQualification;
}

export interface ValuerQualification {
  serviceArea: string;
  address: string;
  abn: string;
  certificatePath: string;
}

export type ValuerStatus =
  | "noQualificationCreated"
  | "qualificationCreated"
  | "qualificationRejected"
  | "approved"
  | "disabled";
