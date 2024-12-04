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

export enum ValuerStatus {
  NoQualificationCreated = "noQualificationCreated",
  QualificationCreated = "qualificationCreated",
  QualificationRejected = "qualificationRejected",
  Approved = "approved",
  Disabled = "disabled",
}
