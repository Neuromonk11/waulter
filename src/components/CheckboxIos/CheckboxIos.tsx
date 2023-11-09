import React, { FunctionComponent } from "react";
import classnames from "classnames";

import iconCheckGreen from "../../icons/icon-check-green.svg";
import styles from "./CheckboxIos.module.css";

type CheckboxIosProps = {
  isCheck: boolean;
  onCheck: () => void;
};
export const CheckboxIos: FunctionComponent<CheckboxIosProps> = ({
  isCheck,
  onCheck,
}) => {
  const title = isCheck ? "On" : "Off";

  return (
    <div onClick={onCheck} className={styles.container}>
      <div
        className={classnames([
          styles.checkbox,
          {
            [styles.check]: isCheck,
          },
        ])}
      >
        <div className={styles.point}>
          {isCheck ? <img src={iconCheckGreen} alt="icon-check-green" /> : null}
        </div>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};
