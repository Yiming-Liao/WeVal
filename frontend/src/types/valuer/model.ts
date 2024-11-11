// [r: Valuer]

export interface Valuer {
  email: string;
  username: string;
  phone: string;
  isValuerQualificationCreated: boolean;
  isQualified: boolean;
  valuerQualification?: ValuerQualification;
}

export interface ValuerQualification {
  valuerId: number;
  serviceArea: string;
  address: string;
  abn: string;
  certificatePath: string;
}
