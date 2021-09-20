import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Link from "next/link";

function BackBtn({ src }) {
  return (
    <Link href={src} passHref>
      <button className="flex shadow-md bg-white p-1 px-5 w-28 ">
        <HiArrowNarrowLeft className="m-1" />
        <p>Back</p>
      </button>
    </Link>
  );
}

export default BackBtn;
