import Header from "@/components/Header";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <>
      <h1 className="p-2 text-black text-center text-2xl">About Us</h1>
      <Link className="text-black" href="/login">
        Login Link
      </Link>
      <div>
        <a
          className="bg-slate-600  w-full m-auto px-5 py-2  rounded-lg text-lg font-bold"
          href="/login"
        >
          Login
        </a>
      </div>
    </>
  );
}
