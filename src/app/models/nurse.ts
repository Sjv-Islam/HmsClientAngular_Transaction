import { Ward } from "./ward";

export class Nurse {
  nurseId!: number;
  name!: string;
  contactNo!: string;
  shift!: string;

  wardId!: number;
  ward!: Ward;
}
