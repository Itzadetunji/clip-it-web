import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/support")({
	component: SupportPage,
});

function SupportPage() {
	return (
		<main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 flex-1">
			<Link
				to="/"
				className="mb-8 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
			>
				← Back to Home
			</Link>
			<h1 className="mb-4 text-3xl font-extrabold text-foreground">Support</h1>
			<p className="mb-8 text-lg text-foreground/80">
				Need help with Clip-It? We&apos;re here to assist you.
			</p>

			<section className="mb-12 flex flex-col gap-8">
				<h2 className="text-2xl font-bold text-foreground">
					Frequently Asked Questions
				</h2>
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-2">
						<h3 className="text-lg font-medium text-foreground">
							How does Clip-It work?
						</h3>
						<p className="text-foreground/80">
							Clip-It lets you capture and share your favorite moments from
							videos. Simply select the portion you want to clip and share it
							with others.
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="text-lg font-medium text-foreground">
							Is my data safe?
						</h3>
						<p className="text-foreground/80">
							Yes. As stated in our Privacy Policy, we do not sell or share your
							personal information. Your clips stay on your device unless you
							choose to share them.
						</p>
					</div>
				</div>
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
				<p className="text-foreground/80">
					If you have other questions or run into issues, please email us at:
				</p>
				<p>
					<a
						href="mailto:itzadetunj.peter@gmail.com"
						className="font-medium text-primary hover:text-primary/80"
					>
						itzadetunj.peter@gmail.com
					</a>
				</p>
			</section>
		</main>
	);
}
