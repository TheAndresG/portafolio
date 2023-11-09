import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <div className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
        <p className="flex item-center">
          Codeando con{" "}
          <span className="text-primary text-2xl px-1"> &hearts;</span>
        </p>
        <Link href={"/"}>Say Hello</Link>
      </div>
    </footer>
  );
}
