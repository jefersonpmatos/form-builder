import Link from "next/link";

function Logo() {
  return (
    <Link
      href={"/"}
      className="font-bold text-3xl bg-gradient-to-r from bg-indigo-400 to-cyan-400 text-transparent bg-clip-text hover:cursor-pointer"
    >
      Form Builder
    </Link>
  );
}

export default Logo;
