import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { RiVisaLine } from "react-icons/ri";
import { BsArrowRightCircle } from "react-icons/bi";
import { useState } from "react";

export default function Home() {
  const [toggle ,setToggle] = useState(false);
  return (
    <body className={toggle?'dark':'light'}>
      <div className="flex flex-col h-screen my-auto items-center dark:bg-slate-900  ">
      <div className="my-auto rounded-xl box-border w-96 h-59 bg-gradient-to-r from-sky-500 to-indigo-500 shadow-2xl">
        <button onClick={() => {setToggle(!toggle)}} className="flex justify-center align-middle rounded-xl box-border w-10 h-10 text-white shadow-2xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg></button>
        <div className="py-11">
          <img
            src="https://img.icons8.com/offices/80/000000/sim-card-chip.png"
            className="w-12 ml-5"
          />
          <p className=" font-medium tracking-more-wider ml-5 text-2xl text-white tracking-wide">
            4363 1234 XXXX XXXX
          </p>
        </div>
        {/* <div className=''><BsArrowRightCircle/></div> */}

        <div className="flex justify-between items-center ">
          <div className="flex flex-col">
            <span className="ml-5 text-xl text-white font-bold ">09/10</span>
            <span className="ml-5 text-l text-white font-bold ">
              VALID THRU
            </span>
          </div>
          <div className="mr-5 text-7xl text-white">
            <RiVisaLine />
          </div>
        </div>
      </div>
      {/* <button onClick={() => {setToggle(!toggle)}}>DARK MODE</button> */}
    </div>
    </body>
  );
}

