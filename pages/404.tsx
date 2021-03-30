import Layout from "../components/Layout/mainLayout/layout";
import React from "react";


export default function Custom404() {
	return (
		<Layout pageTitle="Not Found">
			<section className=" mx-auto max-w-4xl  ">
                <h1 className="text-center">Error 404: Page Not Found...</h1>
				{/* <h1 className="font-semibold my-2 ">Contact Me:</h1>

				<form action="https://mailthis.to/" method="POST" encType="multipart/form-data" className="flex flex-col">
					<input type="text" name="name" placeholder="Your name" />
					<input type="email" name="_replyto" placeholder="Your email" />
					<textarea name="message" placeholder="Enter your message here"></textarea>
					<input type="hidden" name="_subject" value="Contact form submitted" />
					<input type="hidden" name="_after" value="https://myhomepage.net/" />
					<input type="hidden" name="_honeypot" value="" />
					<input type="hidden" name="_confirmation" value="" />
					<input type="submit" value="Send" />
				</form> */}
			</section>
		</Layout>
	);
}
