import HeroSection from "@/components/HeroSection/HeroSection";
import styles from "./styles.module.css";

async function getData() {
  const res = await fetch("https://dummyjson.com/products??limit=0");
  if (!res.ok) {
    throw new Error("failed to retrieve data");
  }
  return res.json();
}

const HomePage = async () => {
  const data = await getData();

  return (
    <div className={styles.wrapper}>
      <HeroSection />
    </div>
  );
};

export default HomePage;
