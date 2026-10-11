import { GithubLogoIcon } from "@phosphor-icons/react";
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
				<a
					href="https://github.com/Itzadetunji/clip-it-macos"
					target="_blank"
					rel="noopener noreferrer"
					title="Clip-It for Mac on GitHub"
					className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
				>
					<GithubLogoIcon className="h-5 w-5" aria-hidden="true" />
					<span>Mac source</span>
				</a>
			</div>
		</header>
	);
}
