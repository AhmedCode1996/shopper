import styles from "./styles.module.css";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
import Icons from "@/assets";

function HeroSlider() {
  return (
    <div>
      <Wrapper className={styles.wrapper}>
        <div className={styles.outerSlider}>
          <div className={styles.innerSlider}>
            <Image
              className={styles.staticImage}
              src={Icons.image2}
              alt="main image"
              objectFit="cover"
            />
            <Image
              className={styles.positionedImage}
              src={Icons.image1}
              alt="main image"
              objectFit="cover"
              width={150}
              height={150}
            />
            <Image
              className={styles.positionedImage}
              src={Icons.image3}
              alt="main image"
              objectFit="cover"
              width={150}
              height={150}
            />
            <Image
              className={styles.positionedImage}
              src={Icons.image4}
              alt="main image"
              objectFit="cover"
              width={150}
              height={150}
            />
            <Image
              className={styles.positionedImage}
              src={Icons.image5}
              alt="main image"
              objectFit="cover"
              width={150}
              height={150}
            />
            <Image
              className={styles.positionedImage}
              src={Icons.image6}
              alt="main image"
              objectFit="cover"
              width={150}
              height={150}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default HeroSlider;
