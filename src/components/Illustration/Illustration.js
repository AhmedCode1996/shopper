import Image from "next/image";
import React from "react";

function Illustration({ src, alt }) {
  return <Image src={src} alt={alt} />;
}

export default Illustration;
