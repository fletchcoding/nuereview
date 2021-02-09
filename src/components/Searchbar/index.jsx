import React, { useContext } from "react";
import { Context } from "../../utils/context";
import styles from "./searchbar.module.css";


const Searchbar = () => {
  const [context, setContext] = useContext(Context);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setContext("thefakecafe_fakeville")
    }
  };


  return (
    <div className={styles.searchbarContainer}>
      <input
      type="text"
      placeholder="Search..."
      className={styles.textinput}
      onKeyDown={handleKeyDown} />
    </div>
  );
};
export default Searchbar;
