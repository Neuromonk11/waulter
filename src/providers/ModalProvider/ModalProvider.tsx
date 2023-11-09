import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DataType, ModalContext } from "./ModalProvider.types";
import { ContainerDialog } from "../../components/ContainerDialog/ContainerDialog";

type ModalProviderProps = {
  children: React.ReactNode;
};

export const modalContext = React.createContext({} as ModalContext);

export const ModalProvider: FunctionComponent<ModalProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<DataType>({
    typeId: null,
    ids: [],
  });

  const onSave = useCallback(() => {
    console.log("data", data);
    const isData =
      Object.values(data).filter((item) =>
        typeof item === "number" ? item !== null : item?.length
      ).length === Object.keys(data).length;
    if (isData) {
      console.log("Send to server");
      setIsOpen(false);
    }
  }, [data]);

  const valueContext: ModalContext = useMemo(
    () => ({ isOpen, setIsOpen, data, setData, onSave }),
    [isOpen, data, onSave]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <modalContext.Provider value={valueContext}>
      {children}
      {isOpen ? <ContainerDialog /> : null}
    </modalContext.Provider>
  );
};
