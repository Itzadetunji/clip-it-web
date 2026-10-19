import { YOUTUBE_VIDEO_ID } from "#/lib/links";

export default function LaunchVideo() {
	return (
		<div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted shadow-[0_30px_80px_-30px_oklch(0.6246_0.1078_151.5/0.55)] ring-1 ring-border sm:rounded-3xl">
			<iframe
				className="absolute inset-0 h-full w-full"
				src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
				title="Clip-It launch video"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			/>
		</div>
	);
}
