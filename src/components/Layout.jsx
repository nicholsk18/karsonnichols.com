
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion"

const animations = {
  initial: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -200 },
}
function Layout () {
    return (
        <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            variants={animations}
            className="absolute top-20 h-full"
            transition={{ duration: 1 }}
        >
            <Outlet />
        </motion.div>
    )
}
export default Layout