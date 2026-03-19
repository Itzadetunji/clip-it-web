import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
	component: PrivacyPage,
});

function PrivacyPage() {
	return (
		<main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 flex-1">
			<Link
				to="/"
				className="mb-8 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
			>
				← Back to Home
			</Link>
			<h1 className="mb-2 text-3xl font-extrabold text-foreground">
				Privacy Policy
			</h1>
			<p className="mb-8 text-sm text-muted-foreground">
				Last updated: March 19, 2026
			</p>

			<div className="flex flex-col gap-8">
				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">1. Introduction</h2>
					<p className="text-foreground/80">
						Clip-It (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
						respects your privacy. This Privacy Policy explains how we handle
						your information when you use our application.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">
						2. Information We Collect
					</h2>
					<p className="text-foreground/80">
						We collect only the information necessary to provide and improve our
						service. This may include usage data to understand how the app is
						used.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">
						3. How We Use Your Data
					</h2>
					<p className="text-foreground/80">
						Your data is used solely to operate the app and improve your
						experience. We do not sell or share your personal information with
						third parties for advertising purposes.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">4. Data Storage</h2>
					<p className="text-foreground/80">
						Data is stored securely. You can delete your data at any time
						through the app settings or by uninstalling the app.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">5. Contact Us</h2>
					<p className="text-foreground/80">
						If you have any questions about this Privacy Policy, please contact
						us via our Support page.
					</p>
				</section>
			</div>
		</main>
	);
}
