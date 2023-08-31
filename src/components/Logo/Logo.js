import Icons from "@/assets";
import Image from "next/image";
function Logo({ mode }) {
  return (
    <Image
      src={mode === "dark" ? Icons.darkLogo : Icons.lightLogo}
      alt="logo"
      priority
    />
  );
}

export default Logo;
