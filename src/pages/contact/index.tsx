import React, { useState } from 'react';

interface EmailType {
	email: { value: string };
	subject: { value: string };
	content: { value: string };
}
export default function Contact() {
	const [sent, setSent] = useState(false);
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { email, subject, content } = event.target as typeof event.target &
			EmailType;
		try {
			const res = await fetch('/api/sendgrid', {
				body: JSON.stringify({
					email: email.value,
					subject: subject.value,
					content: content.value,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
			});
			if (res.status === 200) {
				setSent(true);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col gap-5 items-center justify-center w-7/12">
			<h1>Contact</h1>
			<h2>
				Email me directly at sarahyaepark@gmail.com for the fastest response
			</h2>
			<div className="w-full">
				{sent ? (
					<div className="text-center">
						<h1>Thank you!</h1>
						<h2>I&apos;ll try to get back to you as soon as possible :)</h2>
					</div>
				) : (
					<form action="#" className="space-y-8" onSubmit={handleSubmit}>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Your email
							</label>
							<input
								type="email"
								id="email"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								placeholder="name@email.com"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="subject"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Subject
							</label>
							<input
								type="text"
								id="subject"
								className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								placeholder="Subject line"
								required
							/>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="content"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
							>
								Your message
							</label>
							<textarea
								id="content"
								rows={6}
								className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="I'm reaching out to you because..."
							></textarea>
						</div>
						<button className="px-4 py-1 border-2 rounded-md bg-white">
							submit
						</button>
					</form>
				)}
			</div>
		</div>
	);
}
