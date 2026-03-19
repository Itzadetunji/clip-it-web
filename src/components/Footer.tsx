import { Link } from "@tanstack/react-router";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full border-t border-border">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
				<span className="text-sm text-muted-foreground">
					© {currentYear} Clip-It
				</span>
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
