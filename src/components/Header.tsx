import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<header className="border-b border-border">
			<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
				<Link
					to="/"
					className="text-lg font-semibold tracking-tight text-foreground hover:text-foreground/80 transition-colors flex items-center gap-2"
				>
					<img
						src="/logo.png"
						alt="Clip-It"
						className="h-8 w-8 rounded-lg"
					/>
					<p>Clip-It</p>
				</Link>
			</div>
		</header>
	);
}
