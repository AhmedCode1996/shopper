import HeroHeader from "../HeroHeader/HeroHeader";
import HeroNav from "../HeroNav/HeroNav";
import styles from "./styles.module.css";
function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <HeroHeader />
      <HeroNav />
    </div>
  );
}

export default HeroSection;
