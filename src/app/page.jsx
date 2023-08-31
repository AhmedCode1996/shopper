import { Capriola } from "next/font/google";
import Logo from "@/components/Logo/Logo";
import styles from "./page.module.css";
import Illustration from "@/components/Illustration/Illustration";
import Icons from "@/assets";
import HeaderScreen from "@/components/HeaderScreen/HeaderScreen";
import Button from "@/components/Button/Button";

const capriolaFont = Capriola({ subsets: ["latin"], weight: ["400"] });

export default function Home() {

  return (
    <main className={`${styles.main} ${capriolaFont.className}`}>
      <div className={styles.wrapper}>
        <Logo mode="dark" />
        <Illustration src={Icons.welcomeIllustration} alt="welcome screen" />
        <HeaderScreen />
        <div className={styles.buttonsGroup}>
          <Button type="logIn">sign in</Button>
          <Button type="create">register</Button>
        </div>
      </div>
    </main>
  );
}
