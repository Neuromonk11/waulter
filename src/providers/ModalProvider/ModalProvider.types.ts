import { Dispatch, SetStateAction } from "react";

export type DataType = {
  typeId: number | null;
  ids: Array<number>;
};
export type ModalContext = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
  onSave: () => void;
};
