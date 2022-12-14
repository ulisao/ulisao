import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

export default function Redes() {
  return (
    <>
      <Head>
        <title>Redes</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Redes
          </h1>
          <p className="text-2xl text-white">Mis redes sociales en caso de que guste contactarme o contratarme </p>

          <div className="flex grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://github.com/ulisao"
            >
              <h3 className="text-2xl font-bold">Github </h3>
            </Link>
            <Link
              className="flex max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://twitter.com/ulisaoo"
            >
              <h3 className="text-2xl font-bold">Twitter </h3>
            </Link>
            <Link
              className="flex max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://www.linkedin.com/in/ulises-baretta/"
            >
              <h3 className="text-2xl font-bold">LinkedIn </h3>
            </Link>
          </div>
          <Link
              className="p-4 text-white"
              href="/"
            >
              <h3 className="text-2xl font-bold">  Volver </h3>
          </Link>
      </div>
      </main>
    </>
  );
}
