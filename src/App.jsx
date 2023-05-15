import Nav from './components/Nav.jsx'
import './App.css'
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"
import {useEffect, useState} from "react";

const animations = {
  initial: { opacity: 0, x: 700 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
}
function App() {

  return (
    <>
      <div className="container mx-auto h-screen pt-5 overflow-hidden">
        <Nav />

        <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={animations}
          className="flex flex-col items-center justify-center h-full text-light-tan-0"
          transition={{ duration: 5 }}
        >
          <Outlet />
        </motion.div>
      </div>
    </>
  )
}

export default App
