import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/")({ component: HomePage });

// Replace these with your actual screenshot paths (e.g. /app/8.png) in public/app/
const SCREENSHOTS = [
	{ id: "screenshot-1", src: "/screenshots/shot-1.webp", alt: "Screenshot 1" },
	{ id: "screenshot-2", src: "/screenshots/shot-2.webp", alt: "Screenshot 2" },
	{ id: "screenshot-3", src: "/screenshots/shot-3.webp", alt: "Screenshot 3" },
	{ id: "screenshot-4", src: "/screenshots/shot-4.webp", alt: "Screenshot 4" },
];

function HomePage() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrev = () => {
		setCurrentIndex((i) => (i === 0 ? SCREENSHOTS.length - 1 : i - 1));
	};

	const goToNext = () => {
		setCurrentIndex((i) => (i === SCREENSHOTS.length - 1 ? 0 : i + 1));
	};
	return (
		<main className="flex flex-col items-center flex-1">
			{/* Hero Section */}
			<section className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-16 text-center">
				<div className="flex flex-col items-center gap-6">
					<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
						<span className="block">Record Every Second.</span>
						<span className="block text-primary">Clip the Clutch Moments.</span>
					</h1>
					<p className="max-w-lg text-lg text-muted-foreground">
						Never miss a moment. Record your screen and clip the clutch.
					</p>
				</div>
				<a
					href="https://apps.apple.com"
					target="_blank"
					rel="noopener noreferrer"
					title="Download Clip-It on the App Store"
					className="inline-block transition-opacity hover:opacity-90"
				>
					<span className="inline-flex h-14 items-center gap-2 rounded-xl border border-border bg-foreground px-6 py-3 text-background">
						<svg
							className="h-8 w-8"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
						</svg>
						<span className="text-left">
							<span className="block text-xs">Download on the</span>
							<span className="block text-lg font-semibold leading-tight">
								App Store
							</span>
						</span>
					</span>
				</a>
			</section>

			{/* Screenshots - Fade transition */}
			<section className="w-full px-6 pb-16">
				<div className="relative flex w-full items-center justify-center gap-2 sm:gap-8">
					<Button
						variant="ghost"
						size="icon"
						className="z-10 h-8 w-8 shrink-0 rounded-full border-0 bg-muted hover:bg-muted/80 sm:h-12 sm:w-12"
						aria-label="Previous screenshot"
						onClick={goToPrev}
					>
						<CaretLeftIcon className="h-4 w-4 text-muted-foreground sm:h-6 sm:w-6" />
					</Button>
					<div className="relative w-40 shrink-0 sm:w-60">
						<div className="relative">
							<div className="pointer-events-none absolute -inset-8 rounded-full bg-primary/15 blur-3xl" />
							<div className="relative overflow-hidden rounded-[2rem] bg-black p-1.5 shadow-2xl sm:rounded-[3rem] sm:p-2">
								<div className="relative aspect-1170/2532 w-full overflow-hidden rounded-[2rem] bg-muted sm:rounded-[2.5rem]">
									{SCREENSHOTS.map((screenshot, i) => (
										<img
											key={screenshot.id}
											src={screenshot.src}
											alt={screenshot.alt}
											className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
											style={{
												opacity: i === currentIndex ? 1 : 0,
												pointerEvents: i === currentIndex ? "auto" : "none",
											}}
											onError={(e) => {
												e.currentTarget.style.display = "none";
											}}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
					<Button
						variant="ghost"
						size="icon"
						className="z-10 h-8 w-8 shrink-0 rounded-full border-0 bg-muted hover:bg-muted/80 sm:h-12 sm:w-12"
						aria-label="Next screenshot"
						onClick={goToNext}
					>
						<CaretRightIcon className="h-4 w-4 text-muted-foreground sm:h-6 sm:w-6" />
					</Button>
				</div>
			</section>
		</main>
	);
}
