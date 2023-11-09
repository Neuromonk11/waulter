import React from "react";
import { WebsiteEmbed } from "./components/WebsiteEmbed/WebsiteEmbed";
import { ModalProvider } from "./providers/ModalProvider/ModalProvider";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <ModalProvider>
        <WebsiteEmbed />
      </ModalProvider>
    </div>
  );
}

export default App;
