import Link from "next/link";
import Image from "next/image";

export default async function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="#" className="hover:text-accent-400 transition-colors">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-accent-400 transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="cta transition-colors">
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}
