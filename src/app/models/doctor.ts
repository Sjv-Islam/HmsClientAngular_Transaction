import { Department } from "./department";

export class Doctor {
  doctorId!: number;
  name!: string;
  specialization!: string;
  contactNo!: number;
  email!: string;
  schedule?: string;
  image?: string;
  shift!: string;
  departmentID?: number;
  department!: Department;
}
