import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./styles";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

interface Inputs {
	from_name: string;
	reply_to: string;
	message: string;
}

const ContactForm = () => {
	const { register, handleSubmit, formState: { errors }, reset: resetForm } = useForm<Inputs>();
	const [isLoading, setIsLoading] = useState(false);

	//On submit, Send contact message
	const onSubmit = (data) => {
		setIsLoading(true);
		emailjs
			.send(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				data,
				process.env.NEXT_PUBLIC_USER_ID
			)
			.then(() => {
				toast.success("🚀 Success!");
				resetForm();
			})
			.catch(() => {
				toast.error("😢 Something Failed, Please Try later");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="container mx-auto grid  grid-cols-1 md:grid-cols-2 gap-4 p-8  md:rounded-xl my-2 md:shadow-lg md:border md:border-gray-200 md:bg-white ">
			<div className="col-span-1">
				<label htmlFor="name" className={styles.inputLabel}>Name:</label>
				<input
					type="text"
					id="name"
					name="from_name"
					placeholder="Name"
					defaultValue=""
					className={`${styles.inputForm} ${errors.from_name ? styles.errorInputForm : ""}`}
					{...register('from_name', { required: true })}
				></input>
			</div>
			<div className="col-span-1">
				<label htmlFor="email" className={styles.inputLabel}>E-Mail:</label>
				<input
					type="email"
					id="email"
					name="reply_to"
					placeholder="E-mail"
					defaultValue=""
					{...register('reply_to', {
						required: true,
						pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,}$/i, message: "invalid Email Format" },
					})}
					className={`${styles.inputForm} ${errors.reply_to ? styles.errorInputForm : ""}`}
				></input>
			</div>
			<div className="col-span-full">
				<label htmlFor="message" className={styles.inputLabel}>Message:</label>
				<textarea
					id="message"
					name="message"
					placeholder="Message..."
					defaultValue=""
					rows={8}
					{...register('message', { required: true })}
					className={`${styles.inputForm} ${errors.message ? styles.errorInputForm : ""}`}
				/>
			</div>
			<div className="col-span-full center mx-auto">
				<motion.button
					type="submit"
					className="bg-gray-100 disabled:opacity-30 text-base font-semibold px-6 py-2 rounded-3xl shadow-md"
					disabled={isLoading}
					whileHover={{ zIndex: 1, scale: 1.05, transition: { duration: 0.2 } }}
				>
					Submit
				</motion.button>
			</div>
		</form>
	);
};

export default ContactForm;
