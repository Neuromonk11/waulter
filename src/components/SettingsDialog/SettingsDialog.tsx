import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import classnames from "classnames";

import { CheckboxIos } from "../CheckboxIos/CheckboxIos";

import { settings } from "./SettingsDialog.constants";

import iconDown from "../../icons/icon-dows.svg";
import styles from "./SettingsDialog.module.css";
import { modalContext } from "../../providers/ModalProvider/ModalProvider";

type SettingsDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SettingsDialog: FunctionComponent<SettingsDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const { setData } = useContext(modalContext);
  const [ids, setIds] = useState<Array<number>>([]);

  const onCheck = (id: number) => {
    const is = ids.indexOf(id) >= 0;
    if (is) setIds((state) => state.filter((item) => item !== id));
    else setIds((state) => [...state, id]);
  };

  const onSave = () => {
    setData((state) => ({ ...state, ids }));
    onClose();
  };

  useEffect(() => {
    const idsState = settings.map((item) => item.id);
    setData((state) => ({ ...state, ids: idsState }));
    setIds(idsState);
  }, [setData]);

  if (!isOpen) return null;
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.containerTitle}>
          <p className={styles.title}>Podrobné nastavení</p>
          <div onClick={onClose} className={styles.containerIcon}>
            <img src={iconDown} alt="icon-dows" />
          </div>
        </div>
        <p className={styles.subTitle}>
          Doporučujeme Vám ponechat našemu automatickému vyrovnávač bezpečí a
          soukromí volné ruce. Vaše informace budete i tak sdílet pouze s
          prověřenými společnostmi, které navíc neustále monitorujeme a
          vyhodnocujeme, a nepřijdete přitom o výhody z toho plynoucí.{" "}
        </p>
        <div className={styles.settingsItems}>
          {settings.map((item) => {
            const isCheck = ids.indexOf(item.id) >= 0;
            return (
              <div key={`setting-${item.id}`} className={styles.item}>
                <div className={styles.iconContainer}>
                  <img src={item.icon} alt={`icon-${item.id}`} />
                </div>
                <p className={styles.titleItem}>{item.title}</p>
                <CheckboxIos
                  isCheck={isCheck}
                  onCheck={() => onCheck(item.id)}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.buttonsContainer}>
          <div onClick={onClose} className={styles.button}>
            <p className={styles.buttonTitle}>Zrušit změny</p>
          </div>
          <div
            onClick={onSave}
            className={classnames([styles.button, styles.buttonColor])}
          >
            <p className={styles.buttonColorTitle}>Provést změny</p>
          </div>
        </div>
      </div>
    </div>
  );
};
