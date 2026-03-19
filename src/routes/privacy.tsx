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
						Clip-It Recorder (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
						respects your privacy. This Privacy Policy explains how we handle
						your information when you use our iOS screen recording application.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">
						2. Information We Collect
					</h2>
					<p className="text-foreground/80">
						Clip-It Recorder does not collect, store, or transmit any personal
						information about you. We do not use analytics, tracking, or any
						third-party services that gather data. The app operates entirely on
						your device.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">
						3. How We Use Your Data
					</h2>
					<p className="text-foreground/80">
						We do not use any of your data because we do not collect any. Your
						screen recordings and clips are processed locally on your device
						and saved only to your Photos library when you choose to clip them.
						We never sell, share, or transmit your content.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">4. Data Storage</h2>
					<p className="text-foreground/80">
						All recording and clipping happens on your device. Clips are saved
						to your Photos library only when you tap the Clip button. We do not
						store, upload, or retain any video on our servers. Temporary
						recording buffers used during capture are cleared when you stop
						recording or close the app. You can delete clips at any time from
						your Photos library.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">5. Permissions</h2>
					<p className="text-foreground/80">
						Clip-It Recorder requests the following permissions: Screen Recording
						(to capture your screen), Photos (to save clips to your library),
						and optionally Notifications (to confirm when clips are saved). We
						use these permissions only for the stated purposes and nothing else.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-xl font-bold text-foreground">6. Contact Us</h2>
					<p className="text-foreground/80">
						If you have any questions about this Privacy Policy, please contact
						us via our{" "}
						<Link to="/support" className="text-primary hover:text-primary/80">
							Support page
						</Link>
						.
					</p>
				</section>
			</div>
		</main>
	);
}
