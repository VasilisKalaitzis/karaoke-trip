import React from "react";

// libraries

// css
import "./appHeader.css";

const AppHeader = (props) => {
    return (
        <div className="header-container color-pallete1">
            {props.title}
        </div>
    );
}

export default AppHeader;

// Dependencies
// Libraries:
//      React Font Awesome