import { motion } from "framer-motion";
import cloudLoader from "../icons/loading.png";
const Loader = () => {
    const imgAnimate = {
        animate: {
            y:[10,-10],
            transition: {
                yoyo:Infinity,
                duration:0.9
            }
        }
    }
    return ( 
        <div className="loading d-flex flex-column g-3 justify-content-center align-items-center">
            <motion.img
            src={cloudLoader}
           
            alt=""
            variants={imgAnimate}
            animate='animate'
            ></motion.img>
            <div className="loading fs-3 fw-bold"></div>
        </div>
    );
}
export default Loader;