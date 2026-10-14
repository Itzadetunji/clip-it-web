import {
	ArrowsOutIcon,
	PauseIcon,
	PlayIcon,
	SpeakerHighIcon,
	SpeakerSlashIcon,
} from "@phosphor-icons/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "#/lib/utils";

const VIDEO_DURATION = 74;

const CHAPTERS = [
	{ id: "problem", start: 0, title: "The missed moment" },
	{ id: "meet", start: 18, title: "Meet Clip-It" },
	{ id: "recording", start: 26, title: "Always recording" },
	{ id: "shortcut", start: 36, title: "Press ⌃⌥C" },
	{ id: "settings", start: 40, title: "Make it yours" },
	{ id: "audience", start: 56, title: "Who it's for" },
	{ id: "native", start: 64, title: "Native and light" },
] as const;

function chapterEnd(index: number) {
	return CHAPTERS[index + 1]?.start ?? VIDEO_DURATION;
}

function formatTime(seconds: number) {
	const s = Math.max(0, Math.floor(seconds));
	return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

type FullscreenVideo = HTMLVideoElement & {
	webkitEnterFullscreen?: () => void;
};

export default function LaunchVideo() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const userPausedRef = useRef(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(true);
	const [hasStarted, setHasStarted] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(VIDEO_DURATION);

	const activeIndex = CHAPTERS.reduce(
		(acc, chapter, i) => (currentTime >= chapter.start ? i : acc),
		0,
	);

	// Autoplay muted while on screen, unless the visitor prefers reduced motion
	// or has paused it themselves.
	useEffect(() => {
		const video = videoRef.current;
		const container = containerRef.current;
		if (!video || !container) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !userPausedRef.current) {
					video.play().catch(() => {});
				} else if (!entry.isIntersecting) {
					video.pause();
				}
			},
			{ threshold: 0.5 },
		);
		observer.observe(container);
		return () => observer.disconnect();
	}, []);

	const togglePlay = useCallback(() => {
		const video = videoRef.current;
		if (!video) return;
		if (video.paused) {
			userPausedRef.current = false;
			video.play().catch(() => {});
		} else {
			userPausedRef.current = true;
			video.pause();
		}
	}, []);

	const toggleMute = useCallback(() => {
		const video = videoRef.current;
		if (!video) return;
		video.muted = !video.muted;
		setIsMuted(video.muted);
	}, []);

	const playWithSound = useCallback(() => {
		const video = videoRef.current;
		if (!video) return;
		video.muted = false;
		setIsMuted(false);
		userPausedRef.current = false;
		video.play().catch(() => {});
	}, []);

	const seekTo = useCallback((time: number) => {
		const video = videoRef.current;
		if (!video) return;
		video.currentTime = time;
		setCurrentTime(time);
		userPausedRef.current = false;
		video.play().catch(() => {});
	}, []);

	const enterFullscreen = useCallback(() => {
		const video = videoRef.current as FullscreenVideo | null;
		if (!video) return;
		if (video.requestFullscreen) {
			video.requestFullscreen().catch(() => {});
		} else {
			video.webkitEnterFullscreen?.();
		}
	}, []);

	return (
		<div className="flex w-full flex-col gap-5">
			<div
				ref={containerRef}
				className="group relative overflow-hidden rounded-2xl bg-[#f4f5f7] shadow-[0_30px_80px_-30px_oklch(0.6246_0.1078_151.5/0.55)] ring-1 ring-border sm:rounded-3xl"
			>
				<video
					ref={videoRef}
					className="block aspect-video w-full cursor-pointer"
					poster="/launch/clipit-launch-poster.jpg"
					preload="metadata"
					playsInline
					muted
					loop
					onClick={togglePlay}
					onPlay={() => {
						setIsPlaying(true);
						setHasStarted(true);
					}}
					onPause={() => setIsPlaying(false)}
					onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
					onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
					onVolumeChange={(e) => setIsMuted(e.currentTarget.muted)}
				>
					<source
						src="/launch/clipit-launch.mp4"
						type="video/mp4"
					/>
					<source
						src="/launch/clipit-launch.webm"
						type="video/webm"
					/>
				</video>

				{!isPlaying && (
					<button
						type="button"
						onClick={playWithSound}
						aria-label={hasStarted ? "Resume video" : "Play launch video"}
						className="absolute inset-0 flex items-center justify-center bg-black/10 outline-none transition-colors hover:bg-black/20 focus-visible:bg-black/25"
					>
						<span className="flex size-16 items-center justify-center rounded-full bg-white text-primary shadow-xl transition-transform group-hover:scale-105 sm:size-20">
							<PlayIcon
								weight="fill"
								className="ml-1 size-7 sm:size-9"
							/>
						</span>
					</button>
				)}

				{isPlaying && isMuted && (
					<button
						type="button"
						onClick={toggleMute}
						className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/70 px-3.5 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-black/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:bottom-4 sm:left-4"
					>
						<SpeakerSlashIcon
							weight="fill"
							className="size-4"
						/>
						Turn sound on
					</button>
				)}
			</div>

			<div className="flex gap-3 sm:gap-4">
				<button
					type="button"
					onClick={togglePlay}
					aria-label={isPlaying ? "Pause" : "Play"}
					className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
				>
					{isPlaying ? (
						<PauseIcon
							weight="fill"
							className="size-4"
						/>
					) : (
						<PlayIcon
							weight="fill"
							className="ml-0.5 size-4"
						/>
					)}
				</button>

				<ol
					className="flex h-10 flex-1 items-stretch gap-1"
					aria-label="Video chapters"
				>
					{CHAPTERS.map((chapter, i) => {
						const end = Math.min(chapterEnd(i), duration);
						const length = end - chapter.start;
						const progress = Math.min(
							1,
							Math.max(0, (currentTime - chapter.start) / length),
						);
						const isActive = i === activeIndex;
						return (
							<li
								key={chapter.id}
								className="flex min-w-0"
								style={{ flexGrow: length, flexBasis: 0 }}
							>
								<button
									type="button"
									onClick={() => seekTo(chapter.start)}
									aria-label={`${chapter.title}, ${formatTime(chapter.start)}`}
									aria-current={isActive ? "step" : undefined}
									title={chapter.title}
									className="group/chapter relative flex w-full flex-col justify-center gap-1.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary"
								>
									<span className="relative block h-1.5 w-full overflow-hidden rounded-full bg-muted transition-[height] group-hover/chapter:h-2">
										<span
											className="absolute inset-y-0 left-0 rounded-full bg-primary transition-[width] duration-200 ease-linear"
											style={{ width: `${progress * 100}%` }}
										/>
									</span>
									<span
										className={cn(
											"hidden truncate text-left text-xs transition-colors md:block",
											isActive
												? "font-medium text-foreground"
												: "text-muted-foreground group-hover/chapter:text-foreground",
										)}
									>
										{chapter.title}
									</span>
								</button>
							</li>
						);
					})}
				</ol>

				<span className="hidden shrink-0 text-sm tabular-nums text-muted-foreground sm:block">
					{formatTime(currentTime)} / {formatTime(duration)}
				</span>

				<button
					type="button"
					onClick={toggleMute}
					aria-label={isMuted ? "Unmute" : "Mute"}
					className="flex size-9 shrink-0 justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary"
				>
					{isMuted ? (
						<SpeakerSlashIcon className="size-5" />
					) : (
						<SpeakerHighIcon className="size-5" />
					)}
				</button>
				<button
					type="button"
					onClick={enterFullscreen}
					aria-label="Watch full screen"
					className="flex size-9 shrink-0 justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary"
				>
					<ArrowsOutIcon className="size-5" />
				</button>
			</div>

			<p
				className="text-sm text-muted-foreground md:hidden"
				aria-live="polite"
			>
				<span className="tabular-nums">{formatTime(currentTime)}</span>{" "}
				<span className="font-medium text-foreground">
					{CHAPTERS[activeIndex].title}
				</span>
			</p>
		</div>
	);
}
