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
							How does Clip-It Recorder work?
						</h3>
						<p className="text-foreground/80">
							Clip-It Recorder continuously records your screen in the
							background using a rolling buffer. When something worth saving
							happens—a clutch moment, a bug, a reaction—tap the Clip button
							(in the app or from Control Centre) and the last 15, 30, or 60
							seconds are instantly saved to your Photos library. No editing or
							scrubbing required.
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="text-lg font-medium text-foreground">
							How do I add Clip-It to Control Centre?
						</h3>
						<p className="text-foreground/80">
							Go to Settings → Control Centre, then tap the + button next to
							Screen Recording. When you start recording from the app, Clip-It
							will appear as an option. Add it to Control Centre so you can
							start recording and save clips without leaving whatever you&apos;re
							doing.
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="text-lg font-medium text-foreground">
							What clip lengths are available?
						</h3>
						<p className="text-foreground/80">
							You can choose 15, 30, or 60 seconds. The app keeps a rolling
							buffer of the most recent recording, so when you tap Clip, it
							saves the last X seconds based on your selection.
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="text-lg font-medium text-foreground">
							Is my data safe?
						</h3>
						<p className="text-foreground/80">
							Yes. Clip-It Recorder does not collect, store, or transmit any
							of your data. All recording happens on your device. Clips are
							saved only to your Photos library when you tap Clip. We never
							upload or retain any video. See our{" "}
							<Link to="/privacy" className="text-primary hover:text-primary/80">
								Privacy Policy
							</Link>{" "}
							for details.
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
