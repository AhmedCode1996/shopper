"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

function Button({ children, type }) {
  const router = useRouter();

  const clickHandler = () => {
    if (type === "create") {
      router.push("/signup");
    }
    if (type === "logIn") {
      router.push("/login");
    }
  };
  return (
    <button
      className={`${styles.wrapper} ${styles[type]}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}

export default Button;
