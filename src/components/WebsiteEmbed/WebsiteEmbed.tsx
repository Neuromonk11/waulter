import React, { FunctionComponent, useContext } from "react";
import { modalContext } from "../../providers/ModalProvider/ModalProvider";

import styles from "./WebsiteEmbed.module.css";

export const WebsiteEmbed: FunctionComponent = () => {
  const { isOpen } = useContext(modalContext);
  const isScrolling = isOpen ? "no" : "yes";
  const url = "https://www.waulter.eu/?source=linkedInPersPage";

  return (
    <iframe
      title="websiteEmbed"
      src={url}
      width={"100%"}
      height={"100%"}
      className={styles.container}
      scrolling={isScrolling}
    />
  );
};
