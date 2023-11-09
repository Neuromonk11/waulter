import React, { FunctionComponent } from "react";

import styles from "./ButtonItem.module.css";

type ButtonItemProps = {
  isCheck: boolean;
  title: string;
  onClick: () => void;
};

export const ButtonItem: FunctionComponent<ButtonItemProps> = ({
  isCheck,
  title,
  onClick,
}) => (
  <div onClick={onClick} className={styles.container}>
    <div className={styles.checkbox}>
      {isCheck ? <div className={styles.check} /> : null}
    </div>
    <p className={styles.title}>{title}</p>
  </div>
);
