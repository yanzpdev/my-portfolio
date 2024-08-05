"use client";
import { Button } from "@/components/ui/button";
import { FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from "../redux/store";
import { setDarkMode } from "../redux/features/themeslice";
import { HiSun } from "react-icons/hi";
import { useEffect, useState } from "react";

const DarkModeButton = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const [isDark, setIsDark] = useState<boolean>();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (dark) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      setIsDark(true);
    } 
    else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      setIsDark(false);
    }
  }, [dark])

  const handleClick = () => {
    dispatch(setDarkMode(!dark));
    document.body.classList.toggle("dark");
  }
  
  return (
    <Button onClick={handleClick} variant={`ghost`} className="xl:col-span-3 relative top-6 xl:top-7 hover:bg-transparent right-0 xl:right-5 z-50">
      <motion.div
        animate={{ x: dark ? -0.8 : -23.8 }}
        className="absolute z-20 bg-white rounded-full p-3 right-4 drop-shadow-md"
      />          
      <motion.div className="h-8 w-14 rounded-full dark:bg-slate-200 bg-green-400 absolute right-[12.4px] flex dark:justify-start justify-end items-center px-0.5">
      {isDark ?
        <FaMoon size={18} className="absolute text-blue-500 left-1.5" />
      :
        <HiSun size={24} className="absolute text-yellow-300" /> 
      }
      </motion.div>
    </Button>
  );
}

export default DarkModeButton;