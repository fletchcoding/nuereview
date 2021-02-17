import React, { useContext } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { isLoggedIn } from "../../utils/auth"
import Status from "../Status";
import { SearchContext } from "../Contexts/search-context";
// import { Context } from "../../utils/context";
// <Link to="/" style={{ textDecoration: 'none'}} onClick={ function() {setContext(null);} }>


import styles from "./header.module.css";

const Header = () => {
  // const [context, setContext] = useContext(Context);
  const searchContext = useContext(SearchContext);

  let userdisplay;
  if (isLoggedIn()) {
    userdisplay = (<Status />)
  }  else {
    userdisplay = (<span />)
  }

  const removeSearchContext = function() {
    searchContext.searchHandler("");
  };

  return (
  <nav className={styles.header}>
    <div className={styles.userStatus}>
      {userdisplay}
    </div>
    <div className={styles.title}>
      <Link to="/" style={{ textDecoration: 'none'}} onClick={removeSearchContext}>
        <StaticQuery
          query={graphql`
            query {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={(data) => (
            <h1 className={styles.titletext}>{data.site.siteMetadata.title}</h1>
          )}
        />
      </Link>
    </div>
  </nav>
);
}

export default Header;
