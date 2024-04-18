import { Ward } from "./ward";

export class Room {
  roomId!: number;
  roomNumber!: string;
  status!: string;

  wardId!: number;
  ward!: Ward;

}
