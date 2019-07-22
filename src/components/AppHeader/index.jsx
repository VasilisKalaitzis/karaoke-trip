import React from "react";

// libraries

// css
import styles from "./appHeader.module.scss";

const AppHeader = props => {
  return (
    <div className={styles.headerContainer + " color-pallete1"}>
      {props.title}
    </div>
  );
};

export default AppHeader;

// Dependencies
// Libraries:
//      React Font Awesome
