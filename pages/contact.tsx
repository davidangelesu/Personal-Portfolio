import Layout from "../components/Layout/mainLayout/layout";
import React from "react";
import ContactForm from "../components/ContactForm/contactForm";
export default function Contact() {
	return (
		<Layout>
			<section className=" mx-auto max-w-4xl  ">
				<h1 className="m-4 font-semibold my-2">Contact me:</h1>
				<ContactForm></ContactForm>
			</section>
		</Layout>
	);
}
