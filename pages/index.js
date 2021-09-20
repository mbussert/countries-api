import Head from "next/head";
import Image from "next/image";
import Body from "../components/Body";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="">
      <Head className="">
        <Header />
      </Head>
      <main className="h-screen bg-veryLightGrayBg">
        <Main />
      </main>
    </div>
  );
}
