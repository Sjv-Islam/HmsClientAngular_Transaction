import { Appointment } from "./appointment";
import { Emergency } from "./emergency";
import { Ward } from "./ward";

export class Admission {

  admissionId !: number;
  admissionDate: Date = new Date();
  appointmentID ?: number;
  emergencyID ?: number;
  wardID !: number;
  appointment!: Appointment;
  emergency!: Emergency;
  ward!: Ward;
}
