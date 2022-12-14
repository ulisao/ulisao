import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Sobre mí
          </h1>
          <div className="flex grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <div className="max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <h3 className="text-center text-2xl font-bold">Estudios </h3>
              <div className="text-lg ">
                Actualmente, me encuentro realizando mi licenciatura en
                informática, además de realizar cursos en paralelo para cubrir
                conocimientos no vistos en la carrera, tales como tecnologías
                específicas o que llaman mi atención. He realizado cursos sobre
                programación con Python, específicamente desarrollo web con
                Django y Django Rest Framework, desarrollo web con Javascript,
                React y Node.js, y hoy en día estoy ampliando mis conocimientos
                en T3 Stack, el cual dicho sea de paso utilicé para crear esta
                web.
              </div>
            </div>
            <div className="max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <h3 className="text-center text-2xl font-bold">Yo </h3>
              <div className="text-lg ">
                Soy un desarrollador Argentino de 22 años, desde chico me
                gustaron las computadoras y su funcionamiento, pero no fue hasta
                pandemia que me decidí a aprender a programar. Actualmente me
                encuentro en el camino de convertirme en un desarrollador full
                stack, y estoy muy emocionado por el futuro que me espera.
              </div>
            </div>
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

