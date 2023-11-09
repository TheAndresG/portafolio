"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ href, title, className }) {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group-*`}>
      {title}
      <span
        className={`absolute h-[1px] inline-block bg-dark left-0 -bottom-0.5 group-hover:bg-black transition-all ease duration-300 ${
          pathname == href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
}
