<script lang="ts">
	import { fly } from 'svelte/transition';
	import ProjectItem from '$lib/components/ProjectItem.svelte';

	import forgeFever from '$lib/assets/Projects/forge_fever.gif';
	import unseenAnomaly from '$lib/assets/Projects/unseen_anomaly.png?enhanced';
	import mockupSiteOrangeBusiness from '$lib/assets/Projects/mockup-site-orange_business.png?enhanced';
	import websiteIntegrationChatbot from '$lib/assets/Projects/website_integration_chatbot.png?enhanced';
	import demoBocajoviConnect from '$lib/assets/Projects/demo-bocajovi_connect-compressed.gif';
	import webIntegrationPage from '$lib/assets/Projects/website_web_integration_page.png?enhanced';
	import portfolioEartsup from '$lib/assets/Projects/portfolio-etudiant-eartsup.png?enhanced';
	import spotiflyx from '$lib/assets/Projects/screenshot-spotiflyx.png?enhanced';

	// Default to 'Projets de Jeux Vidéo' to immediately show the most relevant projects
	let selectedCategory = $state('Projets de Jeux Vidéo');

	let gameDevTab: HTMLButtonElement | undefined;
	let webTab: HTMLButtonElement | undefined;

	let activeTabWidth = $state(0);
	let activeTabLeft = $state(0);

	$effect(() => {
		if (selectedCategory === 'Projets de Jeux Vidéo' && gameDevTab) {
			activeTabWidth = gameDevTab.offsetWidth;
			activeTabLeft = gameDevTab.offsetLeft;
		} else if (selectedCategory === 'Projets Web' && webTab) {
			activeTabWidth = webTab.offsetWidth;
			activeTabLeft = webTab.offsetLeft;
		}
	});

	const projects = [
		{
			category: 'Projets de Jeux Vidéo',
			type: 'Personnel',
			image: forgeFever,
			alt: 'Jeu de rythme Forge Fever développé pour la GMTK Game Jam 2025',
			title: 'Forge FeveR - GMTK Game Jam 2025',
			bullets: [
				"Développement d'un jeu de rythme arcade avec une touche de roguelite pour la GMTK Game Jam 2025 sur le thème 'Loop'.",
				'Création d’une boucle de jeu intense où la performance rythmique dans des loops musicales courtes détermine la progression ou la régression en difficulté.',
				"Mise en place d'un système de 'Fever' exponentiel (jusqu'à x32) pour récompenser la précision et d'un système de pénalités sévères pour les erreurs.",
				"Conception d'une progression tangible où le score améliore visuellement l'épée forgée, avec des paliers servant de checkpoints."
			],
			tags: ['Godot', 'GDScript', 'Game Design', 'Rhythm Game', 'Développement de Jeu'],
			github: 'https://github.com/novaepitech/Forge-FeveR',
			demo: 'https://vanova.itch.io/forge-fever'
		},
		{
			category: 'Projets de Jeux Vidéo',
			type: 'Personnel',
			image: unseenAnomaly,
			alt: 'Jeu vidéo Unseen Anomaly développé avec Godot',
			title: 'Unseen Anomaly - Godot Game Jam',
			bullets: [
				"Développement d'un jeu d'horreur psychologique complet pour la Godot Wild Jam #82 sur le thème 'Unseen'.",
				'Création d’une boucle de jeu basée sur l’observation d’anomalies visuelles, sonores et physiques dans un environnement qui se répète.',
				"Mise en place d'une architecture de projet robuste avec un gestionnaire d'état global (AutoLoad) et des scènes héritées pour une modularité maximale.",
				"Débogage de problématiques techniques complexes telles que les dépendances circulaires et les conditions de course ('race conditions') des signaux."
			],
			tags: ['Godot', 'GDScript', 'Game Design', 'Développement de Jeu', 'Blender'],
			github: 'https://github.com/novaepitech/unseen-anomaly',
			demo: 'https://vanova.itch.io/unseen-anomaly'
		},
		{
			category: 'Projets Web',
			type: 'Professionnel',
			image: websiteIntegrationChatbot,
			alt: 'Chatbot et plateforme d’administration pour Endless Paper',
			title: 'Chatbot et plateforme d’administration pour Endless Paper',
			bullets: [
				'Développement d’un chatbot intelligent pour le site web Endless Paper afin de fournir un support client instantané.',
				'Création d’une plateforme d’administration conviviale pour l’équipe Epiphanie afin de gérer les conversations du chatbot et d’améliorer ses performances.',
				"Implémentation d'un système 'Human In The Loop' (HITL) pour une intervention d’agent fluide.",
				'Optimisation des performances et de l’intégration du chatbot en utilisant SvelteKit et les événements envoyés par le serveur (SSE).'
			],
			tags: [
				'SvelteKit',
				'TailwindCSS',
				'Botpress',
				'SSE',
				'Nginx',
				'SQLite',
				'Prisma ORM',
				'TypeScript',
				'Développement assisté par IA'
			],
			github: '',
			demo: 'https://endlesspaper.app/index.html'
		},
		{
			category: 'Projets Web',
			type: 'Professionnel',
			image: demoBocajoviConnect,
			alt: 'Plateforme Intranet/Extranet pour Laboratoire de Prothèses Dentaires',
			title: 'Plateforme Intranet/Extranet pour Laboratoire de Prothèses Dentaires',
			bullets: [
				"Développement d'une plateforme web full-stack Intranet/Extranet pour la gestion complète d'un laboratoire de prothèses dentaires.",
				'Centralisation des commandes, des documents (fiches de travail, DMSM, factures) et de la communication avec les praticiens dentaires.',
				'Fonctionnalités intranet pour les administrateurs : gestion des clients, documents, produits (backend implémenté).',
				'Extranet client pour les praticiens : suivi des commandes, accès sécurisé aux documents, authentification OTP.',
				"Optimisation du flux de travail en remplaçant les processus papier et les échanges d'emails traditionnels."
			],
			tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'PocketBase', 'Authentification OTP'],
			github: '',
			demo: ''
		},
		{
			category: 'Projets Web',
			type: 'Professionnel',
			image: webIntegrationPage,
			alt: 'Page d’intégration web pour Endless Paper',
			title: 'Page d’intégration Web et améliorations de l’API pour Endless Paper',
			bullets: [
				"Conception et développement de la page 'Intégration Web' pour le site web Endless Paper afin de présenter les Expériences Web.",
				'Création d’une vidéo de démonstration intégrée dans l’en-tête de la page.',
				'Amélioration de l’API Expériences Web en ajoutant une fonctionnalité pour la visibilité des instructions de navigation.',
				'Contribution à la refactorisation de l’interface de surveillance des Expériences Web.'
			],
			tags: ['HTML', 'CSS', 'JavaScript', 'Svelte', 'Collaboration', 'Développement API'],
			github: '',
			demo: 'https://endlesspaper.app/web-integration.html'
		},
		{
			category: 'Projets Web',
			type: 'Professionnel',
			image: portfolioEartsup,
			alt: 'Site web portfolio pour étudiant à Eartsup',
			title: 'Site web portfolio pour étudiant à Eartsup',
			bullets: [
				"Création d'un site web portfolio fluide et moderne pour un étudiant à Eartsup.",
				"Utilisation d'Astro pour un site statique performant et rapide.",
				'Implémentation des View Transitions pour une navigation utilisateur élégante et sans rupture.'
			],
			tags: ['Astro', 'View Transitions', 'TailwindCSS'],
			github: '',
			demo: 'https://astro-portfolio-louis-bucher.pages.dev'
		},
		{
			category: 'Projets Web',
			type: 'Personnel',
			image: spotiflyx,
			alt: 'Spotiflyx : Service de streaming musical et vidéo',
			title: 'Spotiflyx : Service de streaming musical et vidéo',
			bullets: [
				"Développement d'une application web de streaming musical et vidéo combinant Spotify et YouTube.",
				'Utilisation de Next.js pour le frontend, Go pour le backend et PostgreSQL pour la base de données.',
				"Implémentation de l'authentification utilisateur, de la recherche de médias, de la gestion des favoris et de la lecture de médias.",
				"Architecture Dockerisée pour faciliter le déploiement et la gestion de l'application."
			],
			tags: ['Next.js', 'Tailwind CSS', 'Go', 'PostgreSQL', 'Docker', 'Spotify API', 'YouTube API'],
			github: 'https://github.com/Taker-Academy/spotiflyx-apanyan',
			demo: ''
		}
	];

	let filteredProjects = $derived(
		projects.filter((project) => project.category === selectedCategory)
	);
</script>

<section id="projects" class="mb-12" in:fly={{ y: 20, duration: 500, delay: 600 }}>
	<h2 class="mb-6 text-3xl font-bold text-gray-100">Projets</h2>

	<div class="relative mb-8">
		<div class="relative inline-flex w-full max-w-md rounded-lg bg-gray-800/50 p-1">
			<div
				class="absolute top-1 h-[calc(100%-8px)] rounded-md bg-gray-700 transition-all duration-180 ease-out"
				style="width: {activeTabWidth}px; left: {activeTabLeft}px;"
			></div>

			<button
				bind:this={gameDevTab}
				class="relative z-10 flex-1 cursor-pointer rounded-md px-2 py-2 text-center font-medium transition-colors duration-180 {selectedCategory ===
				'Projets de Jeux Vidéo'
					? 'text-white'
					: 'text-gray-400 hover:text-white'}"
				onclick={() => (selectedCategory = 'Projets de Jeux Vidéo')}
			>
				Projets de Jeux Vidéo
			</button>
			<button
				bind:this={webTab}
				class="relative z-10 flex-1 cursor-pointer rounded-md px-2 py-2 text-center font-medium transition-colors duration-180 {selectedCategory ===
				'Projets Web'
					? 'text-white'
					: 'text-gray-400 hover:text-white'}"
				onclick={() => (selectedCategory = 'Projets Web')}
			>
				Projets Web
			</button>
		</div>
	</div>

	<ul class="space-y-12">
		{#each filteredProjects as project (project.title)}
			<ProjectItem {...project} />
		{/each}
	</ul>
</section>
