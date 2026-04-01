import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import Footer from "../components/Footer";
import Header from "../components/Header";

import appCss from "../styles.css?url";

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;

const SOFTWARE_APP_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "Clip-It",
	operatingSystem: "iOS",
	applicationCategory: "UtilitiesApplication",
	description:
		"Never miss a moment. Record your screen and clip the last 15, 30, or 60 seconds instantly.",
	url: "https://clip-it-web.vercel.app",
	offers: {
		"@type": "Offer",
		price: "0",
		priceCurrency: "USD",
	},
};

const FAQ_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "How does Clip-It work?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Open Clip-It and tap Record to start capturing your screen. When something worth saving happens, tap Clip in the app or from Control Centre, and Clip-It saves the last 15, 30, or 60 seconds to your Photos.",
			},
		},
		{
			"@type": "Question",
			name: "Who is Clip-It built for?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Clip-It is built for gamers, creators, streamers, developers, and anyone who wants to save important moments while screen recording.",
			},
		},
		{
			"@type": "Question",
			name: "Can I clip without leaving my current app?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Yes. Add Clip-It to Control Centre and save clips with a single tap without leaving what you are doing.",
			},
		},
		{
			"@type": "Question",
			name: "Does Clip-It store my videos or personal data?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "No. Clip-It does not collect personal information and does not store, upload, or retain your video after recording. Everything stays on your device.",
			},
		},
	],
};

const BREADCRUMB_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: "https://clip-it-web.vercel.app",
		},
	],
};

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				name: "google-site-verification",
				content: "nUCmc_W1LA-3-f_BDF_OHyryftMKwHybwLMK8KsqlVQ",
			},
			{
				title: "Clip-It - Never miss the moment",
			},
			{
				name: "description",
				content:
					"Never miss a moment. Record your screen and clip the last 15, 30, or 60 seconds instantly.",
			},
			{
				name: "keywords",
				content:
					"screen recorder,clip,highlight,capture,control centre,gaming,streamer,replay,screenshot,record",
			},
			{
				property: "og:title",
				content: "Clip-It - Never miss the moment",
			},
			{
				property: "og:description",
				content:
					"Record your screen and save the last 15, 30, or 60 seconds instantly from the app or Control Centre.",
			},
			{
				property: "og:image",
				content: "/og-image.png",
			},
			{
				property: "og:url",
				content: "https://clip-it-web.vercel.app",
			},
			{
				property: "og:type",
				content: "website",
			},
			{
				name: "twitter:card",
				content: "summary_large_image",
			},
			{
				name: "twitter:title",
				content: "Clip-It - Never miss the moment",
			},
			{
				name: "twitter:description",
				content:
					"Record your screen and clip the last 15, 30, or 60 seconds instantly.",
			},
			{
				name: "twitter:image",
				content: "/og-image.png",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<head>
				<script
					// biome-ignore lint/security/noDangerouslySetInnerHtml: Inner HTML
					dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
					suppressHydrationWarning
				/>
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD script
					dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_APP_SCHEMA) }}
				/>
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD script
					dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
				/>
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD script
					dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
				/>
				<HeadContent />
			</head>
			<body className="font-sans antialiased wrap-anywhere no-scrollbar min-h-dvh flex flex-col">
				<Header />
				{children}
				<Footer />
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
