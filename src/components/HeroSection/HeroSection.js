import HeroHeader from "../HeroHeader/HeroHeader";
import HeroNav from "../HeroNav/HeroNav";
import HeroSlider from "../HeroSlider/HeroSlider";
import styles from "./styles.module.css";
function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <HeroHeader />
      <HeroNav />
      <HeroSlider />
    </div>
  );
}

export default HeroSection;
