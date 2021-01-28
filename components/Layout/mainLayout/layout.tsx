import Head from "next/head";
import NavBar from "../NavBar/NavBar";
export const siteTitle = "Personal Portfolio Website";
import { AnimatePresence } from "framer-motion";
import { FunctionComponent } from "react";

interface Props {
	header?: React.ReactNode;
	navBar?: boolean;
}
const Layout: FunctionComponent<Props> = ({ header, children,navBar }) => {
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
			</Head>
			<header>
				<AnimatePresence>
					{navBar!==false? (<NavBar />):null}
					{header}
				</AnimatePresence>
			</header>
			<div>
				<main>
					<AnimatePresence>{children}</AnimatePresence>
				</main>
			</div>
		</div>
	);
};

export default Layout;
