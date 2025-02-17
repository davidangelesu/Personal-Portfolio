import Head from "next/head";
import NavBar from "../NavBar/NavBar";
export const siteTitle = "Personal Portfolio Website";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { FunctionComponent, PropsWithChildren } from "react";

interface Props {
	pageTitle: string;
	header?: React.ReactNode;
	navBar?: boolean;
}

const contentVariants: Variants = {
	hidden: { y: "10vh", opacity: 0 },
	shown: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
};

const Layout: FunctionComponent<PropsWithChildren<Props>> = ({ header, children, navBar, pageTitle }) => {
	return (
		<div className={"w-full"}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Personal Portfolio " />
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<title>{pageTitle}</title>
			</Head>
			<header>
				<AnimatePresence>
					{navBar !== false ? <NavBar /> : null}
					{header}
				</AnimatePresence>
			</header>
			<motion.main
				key="mainMotion"
				variants={contentVariants}
				initial="hidden"
				animate="shown"
				className={children ? "my-2 md:my-6 lg:my-12" : null}
			>
				<AnimatePresence>{children}</AnimatePresence>
			</motion.main>
		</div>
	);
};

export default Layout;
