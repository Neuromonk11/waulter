import React, { FunctionComponent, useContext } from "react";
import classnames from "classnames";

import { MainDialog } from "../MainDialog/MainDialog";
import { modalContext } from "../../providers/ModalProvider/ModalProvider";
import { InfoDialog } from "../InfoDialog/InfoDialog";

import iconClose from "../../icons/icon-close.svg";
import iconLogo from "../../icons/icon-logo.svg";

import styles from "./ContainerDialog.module.css";

export const ContainerDialog: FunctionComponent = () => {
  const { data, onSave } = useContext(modalContext);

  const onClose = () => {
    if (data.typeId !== null) onSave();
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.closeContainer}>
          <div
            className={classnames([
              styles.buttonClose,
              {
                [styles.buttonCloseDisable]: data.typeId === null,
              },
            ])}
            onClick={onClose}
          >
            <img src={iconClose} alt="icon-close" />
          </div>
        </div>
        <MainDialog />
        <InfoDialog />
        <div className={styles.logoContainer}>
          <img src={iconLogo} alt="icon-logo" />
        </div>
        <div className={styles.footer}>
          <p className={styles.titleFooter}>
            Kliknutím na Souhlasím se vším beru na vědomí podmínky služby a
            dávám souhlas se zpracováním osobních údajů. <br />
            Prohlédnout podmínky používání Waulter.
          </p>
        </div>
      </div>
    </div>
  );
};
