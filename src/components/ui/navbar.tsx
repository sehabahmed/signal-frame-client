import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 items-center justify-between m-7 flex max-w-7xl border-border/10 bg-background-95 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/" alt="logo" width={32} height={32} />
          My Website....
        </Link>
      </div>
    </nav>
  );
}
