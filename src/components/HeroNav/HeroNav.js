import styles from "./styles.module.css";
function HeroNav() {
  return <div className={styles.wrapper}>
    <ul className={styles.listItem}>
      <li>categories</li>
      <li>pricing</li>
      <li>team</li>
      <li>blog</li>
    </ul>
  </div>;
}

export default HeroNav;
