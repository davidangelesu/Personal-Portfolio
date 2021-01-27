import Head from "next/head";
import Link from "next/link";
export const siteTitle = "Personal Portfolio Website";

export default function Layout({
	children,
	home,
	header,
}: {
	children: React.ReactNode;
	header?: React.ReactNode;
	home?: boolean;
}) {
	return (
		<div>
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
			<header className="flex flex-col items-center">{header}</header>
			<div>
				<main>{children}</main>
			</div>
		</div>
	);
}