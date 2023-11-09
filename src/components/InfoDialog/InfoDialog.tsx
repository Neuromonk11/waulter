import React, { FunctionComponent } from "react";

import iconOk from "../../icons/icon-ok.svg";
import iconLink from "../../icons/icon-link.svg";

import { titles } from "./InfoDialog.constants";
import styles from "./InfoDialog.module.css";

type InfoDialogProps = {};

export const InfoDialog: FunctionComponent<InfoDialogProps> = () => (
  <div className={styles.container}>
    <div className={styles.left}>
      <div className={styles.percent}>
        <p className={styles.titlePercent}>85%</p>
      </div>
      <p className={styles.titleLeft}>
        Tento web je <span className={styles.spanLeft}>bezpečný</span> a cookies
        můžete povolit
      </p>
    </div>
    <div className={styles.right}>
      {titles.map((item, index) => (
        <div key={`title-${index}`} className={styles.item}>
          <img src={iconOk} alt="icon-ok" />
          <p>{item}</p>
        </div>
      ))}
      <div className={styles.link}>
        <p className={styles.linkTitle}>
          Detailní informace o zpracování os. údajů
        </p>
        <img src={iconLink} alt="icon-link" />
      </div>
    </div>
  </div>
);
