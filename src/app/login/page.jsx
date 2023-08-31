import Image from "next/image";
import Logo from "@/components/Logo/Logo";
import styles from "./styles.module.css";
import Link from "next/link";
import Icons from "@/assets";
import {
  Poppins,
  // Lobster,
  // Fjalla_One,
  // Signika_Negative,
  // Fira_Sans_Condensed,
  // Cabin,
  // Courgette,
  // Merienda,
  // Capriola,
  // Aladin,
  // Cantora_One,
  // Kavoon,
  // Ruluko,
  // Metal_Mania,
  // Chela_One,
  // DynaPuff,
  // Marko_One,
  // Nova_Slim,
} from "next/font/google";

// const cabin = Cabin({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });
// const firaFont = Courgette({
//   subsets: ["latin"],
//   weight: ["400"],
// });

// const merienda = Merienda({ subsets: ["latin"] });
// const capriolaFont = Capriola({ subsets: ["latin"], weight: ["400"] });
// const aladinFont = Aladin({ subsets: ["latin"], weight: ["400"] });
// const cantoraOneFont = Cantora_One({ subsets: ["latin"], weight: ["400"] });
// const kavoonFont = Kavoon({ subsets: ["latin"], weight: ["400"] });
// const rulukoFont = Ruluko({ subsets: ["latin"], weight: ["400"] });
// const metalManiaFont = Metal_Mania({ subsets: ["latin"], weight: ["400"] });
// const chelaOneFont = Chela_One({ subsets: ["latin"], weight: ["400"] });
// const DynaPuffFont = DynaPuff({ subsets: ["latin"] });
// const MarkoOneFont = Marko_One({ subsets: ["latin"], weight: ["400"] });
// const NovaSlimFont = Nova_Slim({ subsets: ["latin"], weight: ["400"] });
// const lobsterFont = Lobster({ subsets: ["latin"], weight: ["400"] });
// const fjallaOneFont = Fjalla_One({ subsets: ["latin"], weight: ["400"] });
// const signikaNegativeFont = Signika_Negative({ subsets: ["latin"] });
// const firaSansCondensedFont = Fira_Sans_Condensed({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
// });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Login = () => {
  return (
    <div className={`${styles.wrapper} ${poppins.className}`}>
      <div className={styles.logo}>
        <Logo mode="light" />
      </div>
      <div className={styles.content}>
        <div className={styles.tabs}>
          <Link href="/login">sign in</Link>
          <Link href="/signup">register</Link>
        </div>
        <div className={styles.formContent}>
          <form>
            <label>
              <Image
                className={styles.icon}
                src={Icons.emailIcon}
                alt="email icon"
              />
              <input type="email" placeholder="email" required />
            </label>
            <label>
              <Image
                className={styles.icon}
                src={Icons.lockIcon}
                alt="password icon"
              />
              <input type="password" placeholder="password" required />
              <Image
                className={styles.toggle}
                src={Icons.eyeIcon}
                alt="eye icon"
              />
            </label>
            <p>
              <Link href="/restore">forgot password?</Link>
            </p>
            <button type="submit"> sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
