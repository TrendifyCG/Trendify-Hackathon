import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src="/image/logo.png" height="40" width="40" alt="Trendify logo" />
      <span className="text-xl font-semibold text-primary-themeSecondary">
        TRENDIFY
      </span>
    </Link>
  );
}

export default Logo;
