import Layout from "../components/Layout/mainLayout/layout";
import React from "react";
import ContactForm from "../components/ContactForm/contactForm";

export default function Contact() {
	return (
		<Layout pageTitle="Contact Me">
			<section className=" mx-auto max-w-4xl  ">
				<h1 className="m-4 font-semibold my-8">Feel free to Contact me:</h1>
				<ContactForm></ContactForm>
			</section>
		</Layout>
	);
}
