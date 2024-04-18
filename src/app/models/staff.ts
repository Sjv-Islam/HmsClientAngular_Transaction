export class Staff {
  staffId!: number;
  staffName!: string;
  designation!: string;
  address?: string;
  contactNo!: string;
  email!: string;
  shift!: ShiftType;
}


export enum ShiftType {
  Morning = 0,
  Evening = 1,
  Night = 2
}
