import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
	component: TermsPage,
});

function TermsPage() {
	return (
		<main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 flex-1">
			<Link
				to="/"
				className="mb-8 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
			>
				← Back to Home
			</Link>
			<h1 className="mb-2 text-3xl font-extrabold text-foreground">
				Terms and Conditions
			</h1>
			<p className="mb-8 text-sm text-muted-foreground">
				Last updated: March 19, 2026
			</p>

			<div className="flex flex-col gap-8">
				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">
						1. Acceptance of Terms
					</h2>
					<p className="text-foreground/80">
						By downloading or using the Clip-It app, these terms will
						automatically apply to you. You should make sure therefore that you
						read them carefully before using the app.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">
						2. Service Description
					</h2>
					<p className="text-foreground/80">
						Clip-It provides tools to clip, save, and share moments from videos.
						The App requires appropriate permissions to function on your device.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">
						3. User Responsibilities
					</h2>
					<p className="text-foreground/80">
						You agree to use the App in compliance with applicable laws and
						respect copyright and intellectual property rights when clipping
						content.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">
						4. Intellectual Property
					</h2>
					<p className="text-foreground/80">
						The app itself, and all the trademarks, copyright, database rights
						and other intellectual property rights related to it, still belong
						to us. You are not allowed to copy, or modify the app, any part of
						the app, or our trademarks in any way.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">
						5. Changes to Terms
					</h2>
					<p className="text-foreground/80">
						We reserve the right to make changes to the app or to charge for its
						services, at any time and for any reason. We will never charge you
						for the app or its services without making it very clear to you
						exactly what you&apos;re paying for.
					</p>
				</section>
			</div>
		</main>
	);
}
