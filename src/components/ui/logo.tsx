import Image from "next/image";
import { PixelParagraphInverse } from "./pixel-paragraph-words-inverse";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"} className="flex items-center gap-2.5">
        <Image alt="logo" src={"/logo.svg"} width={18} height={18} />
        <PixelParagraphInverse
          text="Pixel"
          //   pixelFont={pixelFont}
          //   plainFont={plainFont}
        />{" "}
      </Link>
    </>
  );
};

export default Logo;
