/* eslint-disable react/no-unescaped-entities */
import styles from "./styles.module.css";
function HeaderScreen() {
  return (
    <div className={styles.wrapper}>
      <h2>
        welcome to 
        <span> shop</span>
        <span>per</span>
      </h2>
      <p>
        Make it your own. As you're setting up your online store, you have the
        ability to customize.
      </p>
    </div>
  );
}

export default HeaderScreen;
