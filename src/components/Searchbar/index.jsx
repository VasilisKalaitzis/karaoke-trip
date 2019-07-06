import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

// css
import "./searchbar.css";

const Searchbar = props => {
  const { callBack } = props;

  return (
    <div className="beau-searchbar">
      <div className="beau-searchbar-body color-pallete4 shadow-pallete1">
        <button className="btn-search" type="button">
          <FontAwesomeIcon className="normal-fa-fonts" icon={props.icon} />
        </button>
        <input
          type="text"
          placeholder={props.placeholder}
          //   here, we update the wrapper's search value
          //   this is much faster than Redux
          onChange={e =>
            callBack({
              dataBound: props.dataBound,
              text: e.currentTarget.value
            })
          }
        />
      </div>
    </div>
  );
};

Searchbar.propTypes = {
  dataBound: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string
};

Searchbar.defaultProps = {
  placeholder: "Enter Text Here"
};

export default Searchbar;

// Dependencies:
// Libraries
//    react-font-awesome
//    prop-types
