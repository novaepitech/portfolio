<script>
	import { fly } from 'svelte/transition';
	import ProjectItem from '$lib/components/ProjectItem.svelte';

	import mockupSiteOrangeBusiness from '$lib/assets/Projects/mockup-site-orange_business.png?enhanced';
	import websiteIntegrationChatbot from '$lib/assets/Projects/website_integration_chatbot.png?enhanced';
	import webIntegrationPage from '$lib/assets/Projects/website_web_integration_page.png?enhanced';
	import portfolioEartsup from '$lib/assets/Projects/portfolio-etudiant-eartsup.png?enhanced';

	let selectedCategory = $state('Projets Epitech');

	const projects = [
		{
			category: 'Projets Epitech',
			image:
				'https://github.com/Taker-Academy/Spotiflyx/assets/86067803/8923f7d6-f23e-4a6b-aabf-9e10e4fb8e44', // Logo Spotiflyx depuis le README
			alt: 'Spotiflyx : Service de streaming musical et vidéo',
			title: 'Spotiflyx : Service de streaming musical et vidéo',
			bullets: [
				"Développement d'une application web de streaming musical et vidéo combinant Spotify et YouTube.",
				'Utilisation de Next.js pour le frontend, Go pour le backend et PostgreSQL pour la base de données.',
				"Implémentation de l'authentification utilisateur, de la recherche de médias, de la gestion des favoris et de la lecture de médias.",
				"Architecture Dockerisée pour faciliter le déploiement et la gestion de l'application."
			],
			tags: ['Next.js', 'Tailwind CSS', 'Go', 'PostgreSQL', 'Docker', 'Spotify API', 'YouTube API'],
			github: 'https://github.com/yourusername/spotiflyx', // Remplacez yourusername par le lien de votre repo
			demo: '' // Ajoutez un lien de démo si vous en avez un
		},
		{
			category: 'Projets Epitech',
			image: mockupSiteOrangeBusiness, // Veuillez remplacer par l'image réelle de votre projet
			alt: 'Mockup de landing page pour Orange Business dans le cadre de la project week 2025 à Epitech',
			title: 'Mockup de landing page pour Orange Business - Project Week 2025',
			bullets: [
				"Création d'un mockup de landing page pour Orange Business dans le cadre de la project week 2025 à Epitech.",
				"Refonte de l'identité digitale d'Orange Business à travers une nouvelle proposition de landing page.",
				'Maquette réalisée dans le but de présenter une direction créative, non destinée à la production.'
			],
			tags: ['Next.js', 'Tailwind CSS'],
			github: '',
			demo: 'https://orange-business-website-refresh-concept.vercel.app/'
		},
		{
			category: 'Projets Professionnels',
			image: websiteIntegrationChatbot, // Remplacez par les images réelles de projets clients
			alt: 'Chatbot et plateforme d’administration pour Endless Paper',
			title: 'Chatbot et plateforme d’administration pour Endless Paper',
			bullets: [
				'Développement d’un chatbot intelligent pour le site web Endless Paper afin de fournir un support client instantané.',
				'Création d’une plateforme d’administration conviviale pour l’équipe Epiphanie afin de gérer les conversations du chatbot et d’améliorer ses performances.',
				"Implémentation d'un système 'Humain dans la boucle' (HITL) pour une intervention d’agent fluide.",
				'Optimisation des performances et de l’intégration du chatbot en utilisant SvelteKit et les événements envoyés par le serveur (SSE).'
			],
			tags: [
				'SvelteKit',
				'TailwindCSS',
				'Botpress',
				'SSE',
				'Nginx',
				'SQLite',
				'Prisma',
				'TypeScript',
				'Développement assisté par IA'
			],
			github: '',
			demo: 'https://endlesspaper.app/index.html'
		},
		{
			category: 'Projets Professionnels',
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
			github: '', //  Laisser vide si privé
			demo: 'https://endlesspaper.app/web-integration.html'
		},
		{
			category: 'Projets Professionnels',
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
			demo: 'https://astro-portfolio-louis-bucher.pages.dev' // Laisser vide ou ajouter le lien de démonstration si applicable
		}
	];

	let filteredProjects = $derived(
		projects.filter((project) => project.category === selectedCategory)
	);
</script>

<section id="projects" class="mb-12" in:fly={{ y: 20, duration: 500, delay: 600 }}>
	<h2 class="mb-6 text-3xl font-bold text-gray-100">Projets</h2>
	<div class="mb-8 flex space-x-4">
		<button
			class="cursor-pointer rounded-lg px-4 py-2 transition-colors duration-300 {selectedCategory ===
			'Projets Epitech'
				? 'bg-gray-700 text-white'
				: 'text-gray-400 hover:text-white'}"
			onclick={() => (selectedCategory = 'Projets Epitech')}
		>
			Projets Epitech
		</button>
		<button
			class="cursor-pointer rounded-lg px-4 py-2 transition-colors duration-300 {selectedCategory ===
			'Projets Professionnels'
				? 'bg-gray-700 text-white'
				: 'text-gray-400 hover:text-white'}"
			onclick={() => (selectedCategory = 'Projets Professionnels')}
		>
			Projets Professionnels
		</button>
	</div>
	<ul class="space-y-12">
		{#each filteredProjects as project (project.title)}
			<ProjectItem {...project} />
		{/each}
	</ul>
</section>
