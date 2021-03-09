import "../styles/globals.css";
import { motion } from "framer-motion";
import { AppProps } from "next/app";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';


function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<motion.div
			key={router.route}
			initial="pageInitial"
			animate="pageAnimate"
			variants={{
				pageInitial: {
					opacity: 0,
				},
				pageAnimate: {
					opacity: 1,
				},
			}}
		>
			<Component {...pageProps} />
			<ToastContainer autoClose={3000} />
		</motion.div>
	);
}

export default MyApp;
