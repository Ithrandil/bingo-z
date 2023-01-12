import {Modal} from "./modal";

export interface BingoBox {
  front?: string,
  back?: {
    name: string,
    picture?: string,
  },
  disabled: boolean,
  modal?: Modal
}
