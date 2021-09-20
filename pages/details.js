import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import BackBtn from "../components/BackBtn";

function details() {
  return (
    <div className="bg-veryLightGrayBg h-screen px-5 pt-10">
      <Head className="border">
        <Header />
      </Head>
      <main>
        <BackBtn src="/" />
      </main>
    </div>
  );
}

export default details;
