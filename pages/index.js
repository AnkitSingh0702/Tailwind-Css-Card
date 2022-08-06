import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { RiVisaLine } from "react-icons/ri";
import { BsArrowRightCircle } from "react-icons/bi";
import { useState } from "react";


export default function Home() {
  const [toggle, setToggle] = useState(false);
  return (
    
    <body className={toggle ? "dark" : "light"}>
      <div className="flex flex-col h-screen my-auto items-center dark:bg-slate-900 overflow-hidden ">


        <div className=" my-auto rounded-xl box-border w-96 h-59 bg-gradient-to-r from-sky-500 to-indigo-500 shadow-lg shadow-blue-500/50 ">
        <div className="relative mt-2 ml-2" onClick={() => {
              setToggle(!toggle);
            }}>
          <input
            type="checkbox"
            className="peer
    appearance-none cursor-pointer
     bg-gray-200 rounded-full
    checked:bg-cyan-300 w-12 h-6"
          />
          
          <span
            className="peer-checked:left-7
    peer-checked:bg-slate-800
    transition-all duration-200
    pointer-events-none w-4 h-4
    block absolute top-1 left-1
    rounded-full bg-gray-800"
          ></span>
        </div>
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

      
      </div>
    </body>
  );
}
