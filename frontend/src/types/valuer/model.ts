// [r: Valuer]

export interface Valuer {
  email: string;
  username: string;
  phone: string;
  isValuerQualificationCreated: boolean;
  isQualified: boolean;
  valuerQualification?: ValuerQualification;
  QualificationRejection?: QualificationRejection;
}

export interface ValuerQualification {
  serviceArea: string;
  address: string;
  abn: string;
  certificatePath: string;
}

export interface QualificationRejection {
  reason: string;
}
