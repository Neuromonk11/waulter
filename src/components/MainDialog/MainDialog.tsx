import React, { FunctionComponent, useContext, useState } from "react";

import { modalContext } from "../../providers/ModalProvider/ModalProvider";

import { ItemCookies } from "../ItemCookies/ItemCookies";
import { SettingsDialog } from "../SettingsDialog/SettingsDialog";

import { cookiesTypes } from "../ContainerDialog/ContainerDialog.constants";

import iconSymbol from "../../icons/icon-symbol.svg";
import iconSettings from "../../icons/icon-settings.svg";

import styles from "./MainDialog.module.css";

export const MainDialog: FunctionComponent = () => {
  const { data, setData } = useContext(modalContext);
  const [isOpenSettings, setIsOpenSettings] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.logoMain}>
        <img src={iconSymbol} alt="icon-symbol" />
      </div>
      <p className={styles.titleMain}>Waulter hlídá soukromí na tomto webu</p>
      <p className={styles.subTitle}>Vyberte si jednu z variant</p>
      <div className={styles.itemsContainer}>
        {cookiesTypes.map(({ id, title, subTitle, button, message }) => (
          <ItemCookies
            key={`item-${id}`}
            title={title}
            subTitle={subTitle}
            message={message}
            button={button}
            isCheck={data.typeId === id}
            onSelect={() => setData((state) => ({ ...state, typeId: id }))}
          />
        ))}
      </div>
      <div className={styles.settingButtonContainer}>
        <div
          onClick={() => setIsOpenSettings(true)}
          className={styles.settingButton}
        >
          <p className={styles.settingTitle}>Podrobné nastavení</p>
          <img src={iconSettings} alt="icon-settings" />
        </div>
      </div>
      <SettingsDialog
        isOpen={isOpenSettings}
        onClose={() => setIsOpenSettings(false)}
      />
    </div>
  );
};
