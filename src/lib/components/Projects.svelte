<script>
	import { fly } from 'svelte/transition';
	import ProjectItem from './ProjectItem.svelte';

	let selectedCategory = $state('Projets Epitech');

	const projects = [
		{
			category: 'Projets Epitech',
			image: '/homegame-project.jpg',
			alt: 'HomeGame : Gestionnaire d’analyse pour parties de poker à domicile',
			title: 'HomeGame : Gestionnaire d’analyse pour parties de poker à domicile',
			bullets: [
				'Développement d’une application mobile riche en fonctionnalités pour la gestion et l’analyse de parties de poker à domicile en utilisant React Native et Supabase',
				'Création d’un moteur d’analyse avancé fournissant des informations sur le déroulement du jeu, les taux de victoire et les axes d’amélioration',
				'Implémentation d’un mode hors ligne avec synchronisation des données et intégration d’API tierces pour le calcul des probabilités'
			],
			tags: ['Supabase', 'React Native', 'Expo'],
			github: 'https://github.com/yourusername/homegame', // Remplacez yourusername
			demo: 'https://homegame-app.com'
		},
		{
			category: 'Projets Epitech',
			image: '/cafe-loyalty-project.jpg',
			alt: 'BrewPoints : Application de fidélité pour cafés',
			title: 'BrewPoints : Application de fidélité pour cafés',
			bullets: [
				'Développement d’une solution d’application de fidélité full-stack pour les cafés indépendants, comprenant des applications mobiles React Native, un backend Node.js avec API GraphQL et une base de données MongoDB',
				'Intégration avec divers systèmes de point de vente (POS) en utilisant un modèle d’adaptateur flexible',
				'Implémentation du suivi des commandes en temps réel et des notifications en utilisant Socket.io',
				'Conception d’un système de programme de fidélité personnalisable avec tableau de bord analytique pour les propriétaires de cafés'
			],
			tags: ['React Native', 'Expo', 'Node.js', 'GraphQL', 'MongoDB'],
			github: 'https://github.com/yourusername/cafe-loyalty', // Remplacez yourusername
			demo: 'https://cafeloyalty-demo.com'
		},
		{
			category: 'Projets Epitech',
			image: '/password-manager-project.jpg',
			alt: 'Gestionnaire de mots de passe résistant aux [attaques] quantiques',
			title: 'Gestionnaire de mots de passe résistant aux [attaques] quantiques',
			bullets: [
				'Développement d’un gestionnaire de mots de passe cryptographiquement sécurisé et haute performance en utilisant Rust et des algorithmes post-quantiques',
				'Conception d’une architecture zéro-knowledge, améliorant la confidentialité et la sécurité des utilisateurs',
				'Utilisation de structures de données efficaces (B-trees) pour un stockage et une récupération optimisés des mots de passe',
				'Implémentation de fonctionnalités avancées incluant l’authentification à deux facteurs (2FA), le partage sécurisé de mots de passe et les sauvegardes chiffrées'
			],
			tags: ['Rust', 'Cryptographie Post-Quantique'],
			github: 'https://github.com/yourusername/quantum-pass', // Remplacez yourusername
			demo: 'https://quantum-pass-demo.com'
		},
		{
			category: 'Projets Epitech',
			image: '/invoice-ninja-project.jpg',
			alt: 'InvoiceNinja : Application de facturation pour freelances',
			title: 'InvoiceNinja : Application de facturation pour freelances',
			bullets: [
				'Développement d’une application de facturation conviviale conçue pour les freelances',
				'Implémentation de fonctionnalités telles que la génération de factures, le suivi des dépenses et la gestion des clients',
				'Intégration de passerelles de paiement pour des paiements en ligne fluides',
				'Création de rapports financiers perspicaces et de tableaux de bord pour l’analyse commerciale'
			],
			tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
			github: 'https://github.com/yourusername/invoice-ninja', // Remplacez yourusername
			demo: 'https://invoice-ninja-demo.com'
		},
		{
			category: 'Projets Epitech',
			image: '/fitquest-project.jpg',
			alt: 'FitQuest : Compagnon d’entraînement interactif',
			title: 'FitQuest : Compagnon d’entraînement interactif',
			bullets: [
				'Construction d’une application d’entraînement ludique pour rendre les routines de fitness plus engageantes',
				'Conception de plans d’entraînement personnalisés basés sur les objectifs et les niveaux de forme physique des utilisateurs',
				'Implémentation du suivi des progrès et d’un système de réussite pour renforcer la motivation des utilisateurs',
				'Intégration avec des appareils portables pour la synchronisation des données d’entraînement en temps réel'
			],
			tags: ['React Native', 'Firebase', 'TensorFlow.js'],
			github: 'https://github.com/yourusername/fitquest', // Remplacez yourusername
			demo: 'https://fitquest-demo.com'
		},
		{
			category: 'Projets Epitech',
			image: '/studybuddy-project.jpg',
			alt: 'StudyBuddy : Planificateur de devoirs et Suivi des acquis antérieurs',
			title: 'StudyBuddy : Planificateur de devoirs et Suivi des acquis antérieurs',
			bullets: [
				'Création d’un outil complet de gestion des études pour les étudiants',
				'Développement de fonctionnalités pour la planification des devoirs, le suivi des échéances et la programmation des sessions d’étude',
				'Implémentation d’une section d’acquis antérieurs pour suivre et revoir le matériel précédemment appris',
				'Intégration avec des applications de calendrier populaires pour une synchronisation transparente des calendriers'
			],
			tags: ['Vue.js', 'Express.js', 'PostgreSQL'],
			github: 'https://github.com/yourusername/studybuddy', // Remplacez yourusername
			demo: 'https://studybuddy-demo.com'
		},
		{
			category: 'Projets Epitech',
			image: '/collectify-project.jpg',
			alt: 'Collectify : Gestionnaire de collections personnelles',
			title: 'Collectify : Gestionnaire de collections personnelles',
			bullets: [
				'Développement d’une application polyvalente pour la création et la gestion de collections personnelles',
				'Implémentation de fonctionnalités pour l’ajout, la catégorisation et le marquage d’éléments au sein des collections',
				'Création d’un système de recherche et de filtrage pour une navigation facile dans les grandes collections',
				'Conception d’une interface conviviale pour une gestion fluide des collections'
			],
			tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
			github: 'https://github.com/yourusername/collectify', // Remplacez yourusername
			demo: 'https://collectify-demo.com'
		},
		{
			category: 'Projets Epitech',
			image: '/showtrackr-project.jpg',
			alt: 'ShowTrackr : Suivi des sorties TV et cinéma',
			title: 'ShowTrackr : Suivi des sorties TV et cinéma',
			bullets: [
				'Construction d’une application pour suivre les nouvelles sorties d’émissions de télévision et de films',
				'Intégration avec des bases de données multimédias populaires pour récupérer des informations précises et à jour',
				'Implémentation de listes de surveillance personnalisées et de notifications pour les sorties à venir',
				'Création d’un système de recommandation basé sur les préférences de l’utilisateur et l’historique de visionnage'
			],
			tags: ['Angular', 'NestJS', 'PostgreSQL', 'TMDb API'],
			github: 'https://github.com/yourusername/showtrackr', // Remplacez yourusername
			demo: 'https://showtrackr-demo.com'
		},
		{
			category: 'Projets Professionnels',
			image: '/website_integration_chatbot.png', // Remplacez par les images réelles de projets clients
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
			image: '/website_web_integration_page.png',
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
			demo: 'https://endlesspaper.app/web-integration.html' //  Laisser vide si pas de démo publique
		},
		{
			category: 'Projets Professionnels',
			image: '/portfolio-etudiant-eartsup.png', // Veuillez remplacer par l'image réelle de votre projet
			alt: 'Site web portfolio pour étudiant à Eartsup',
			title: 'Site web portfolio pour étudiant à Eartsup',
			bullets: [
				"Création d'un site web portfolio fluide et moderne pour un étudiant à Eartsup.",
				"Utilisation d'Astro pour un site statique performant et rapide.",
				'Implémentation des View Transitions pour une navigation utilisateur élégante et sans rupture.'
			],
			tags: ['Astro', 'View Transitions', 'TailwindCSS'],
			github: '', // Laisser vide ou ajouter le lien GitHub si applicable
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
