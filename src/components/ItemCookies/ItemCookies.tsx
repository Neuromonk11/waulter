import React, { FunctionComponent } from "react";

import styles from "./ItemCookies.module.css";
import { ButtonItem } from "../ButtonItem/ButtonItem";

type ItemCookiesProps = {
  title: string;
  subTitle: string;
  button: string;
  message: string;
  isCheck: boolean;
  onSelect: () => void;
};

export const ItemCookies: FunctionComponent<ItemCookiesProps> = ({
  title,
  subTitle,
  button,
  message,
  isCheck,
  onSelect,
}) => (
  <div className={styles.container}>
    <div className={styles.titlesContainer}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subTitle}>{subTitle}</p>
    </div>
    <div className={styles.buttonContainer}>
      <ButtonItem isCheck={isCheck} title={button} onClick={onSelect} />
      <p className={styles.message}>{message}</p>
    </div>
  </div>
);
