import Image from "next/image";
import Logo from "../Logo/Logo";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.css";
import Icons from "@/assets";

function HeroHeader() {
  return (
    <header className={styles.wrapper}>
      <Wrapper>
        <nav className={styles.headerNav}>
          <ul className={styles.navList}>
            <li>
              <Logo mode="light" />
            </li>
            <li>
              <Image
                className={styles.inputImage}
                src={Icons.searchIcon}
                alt="search icon"
              />
              <input type="text" placeholder="search" />
            </li>
            <li>
              <button>sign in</button>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
}

export default HeroHeader;
