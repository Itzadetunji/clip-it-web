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
						By downloading or using Clip-It Recorder, these terms will
						automatically apply to you. Please read them carefully before using
						the app.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">
						2. Service Description
					</h2>
					<p className="text-foreground/80">
						Clip-It Recorder is an iOS screen recording app that captures your
						screen using a rolling buffer. When you tap the Clip button (in the
						app or from Control Centre), it saves the last 15, 30, or 60 seconds
						to your Photos library. The app requires Screen Recording and Photos
						permissions to function. No account or subscription is required.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">
						3. User Responsibilities
					</h2>
					<p className="text-foreground/80">
						You agree to use Clip-It Recorder in compliance with applicable
						laws. You are responsible for the content you record and save. Do
						not use the app to capture or distribute content that infringes
						copyright, invades privacy, or violates the rights of others. Use
						the app only for lawful purposes.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">
						4. Intellectual Property
					</h2>
					<p className="text-foreground/80">
						Clip-It Recorder, including its design, code, and branding, is owned
						by us. All trademarks, copyrights, and other intellectual property
						rights remain ours. You may not copy, modify, reverse engineer, or
						redistribute the app or any part of it without permission.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">
						5. Disclaimer
					</h2>
					<p className="text-foreground/80">
						Clip-It Recorder is provided &quot;as is&quot;. We do not guarantee
						uninterrupted or error-free operation. Screen recording may be
						subject to system limitations and the policies of other apps or
						content you record.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">
						6. Changes to Terms
					</h2>
					<p className="text-foreground/80">
						We may update these terms from time to time. Continued use of the
						app after changes constitutes acceptance. We will not charge for the
						app or its core features without clearly notifying you first.
					</p>
				</section>
			</div>
		</main>
	);
}
