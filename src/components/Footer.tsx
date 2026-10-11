import { Link } from "@tanstack/react-router";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full border-t border-border">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
				<div className="text-center text-sm text-muted-foreground md:text-left">
					<p>
						Designed and developed by{" "}
						<a
							href="https://itzadetunji.com"
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium text-foreground underline decoration-foreground underline-offset-[3px] transition-colors hover:text-primary"
						>
							Adetunji ❤️
						</a>
					</p>
					<p className="mt-1">© {currentYear} Clip-It. Built with love.</p>
				</div>
				<nav className="flex items-center gap-6">
					<Link
						to="/privacy"
						className="text-sm text-muted-foreground transition-colors hover:text-foreground"
					>
						Privacy
					</Link>
					<Link
						to="/terms"
						className="text-sm text-muted-foreground transition-colors hover:text-foreground"
					>
						Terms
					</Link>
					<Link
						to="/support"
						className="text-sm text-muted-foreground transition-colors hover:text-foreground"
					>
						Support
					</Link>
				</nav>
			</div>
		</footer>
	);
}
