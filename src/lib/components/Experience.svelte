<script>
	import { fly } from 'svelte/transition';
	const experience = [
		{
			logo: '/juvare.png',
			alt: 'Logo de Juvare',
			title: 'Analyste en implémentation technique (Développeur Web Front-End)',
			company: 'Juvare',
			location: 'Melbourne, Australie',
			date: 'Mars 2024 - Aujourd’hui',
			bullets: [
				'Configurer et personnaliser les solutions du framework WebEOC pour répondre aux exigences des clients en matière de systèmes de réponse aux urgences/incidents.',
				'Assurer la liaison directe avec les clients pour recueillir les exigences et fournir un support technique à la mise en œuvre en Australie et en Nouvelle-Zélande.',
				'Créer une documentation détaillée sur la configuration du système et des spécifications d’exigences pour les processus de réponse aux urgences/incidents.',
				'Fournir un support technique de niveau 2 et aider aux activations des centres d’opérations d’urgence (COU) si nécessaire.',
				'Élaborer et mettre en œuvre des examens de processus, du contenu de formation en ligne et des évaluations d’exercices.'
			],
			tags: [
				'HTML',
				'CSS',
				'JavaScript',
				'jQuery',
				'Bootstrap',
				'API REST',
				'SQL Server',
				'WebEOC',
				'Implémentation technique',
				'Analyse commerciale'
			]
		},
		{
			logo: '/logo.png',
			alt: 'Logo d’auto-entrepreneur',
			title: 'Développeur Web Full-Stack Freelance',
			company: 'Auto-entrepreneur',
			location: 'Melbourne, Victoria',
			date: '2022 - Aujourd’hui',
			bullets: [
				'Réalisation réussie de plus de 20 projets allant des tableaux de bord de base aux pages de destination optimisées pour le référencement naturel en passant par des applications complètes.',
				'Fourniture de solutions personnalisées adaptées aux besoins des clients, garantissant des performances élevées et une expérience utilisateur optimale.',
				'Travail avec des technologies web modernes, notamment React, Next.js et Supabase, pour construire des applications évolutives.',
				'Gestion du cycle de vie complet des projets, y compris la planification, le développement et le déploiement.'
			],
			tags: ['React', 'Next.js', 'Supabase', 'TypeScript', 'Node.js', 'Développement Full-Stack']
		},
		{
			logo: '/shifti.png',
			alt: 'Logo de Shifti',
			title: 'Directeur Technique et Fondateur',
			company: 'Shifti',
			location: 'Melbourne, Victoria',
			date: 'Avril 2023 - Aujourd’hui',
			bullets: [
				'Direction du développement d’une plateforme innovante de planification des horaires basée sur l’IA pour le secteur de l’hôtellerie.',
				'Conception et mise en œuvre d’un backend évolutif basé sur des microservices utilisant Node.js et GraphQL.',
				'Conception et développement d’une application front-end réactive utilisant React et Next.js.',
				'Intégration d’algorithmes d’apprentissage automatique avancés pour l’attribution intelligente des horaires et la prévision de la demande.',
				'Gestion d’une équipe de développeurs, favorisant une culture d’innovation et d’amélioration continue.'
			],
			tags: ['NextJS', 'Supabase', 'React Native', 'Expo', 'Apprentissage Automatique', 'Tauri']
		},
		{
			logo: '/preezie.png',
			alt: 'Logo de Preezie',
			title: 'Stagiaire en Développement Logiciel',
			company: 'Preezie',
			location: 'Melbourne, Victoria',
			date: 'Novembre 2022 - Mars 2023',
			bullets: [
				'Démonstration de compétences en Angular 4, React, .NET et microservices.',
				'Développement de solutions efficaces à des problèmes complexes et débogage efficace du code.',
				'Adaptation à des environnements de développement rapides et travail avec des technologies anciennes et modernes.',
				'Collaboration avec des équipes interfonctionnelles, améliorant la communication et les compétences en travail d’équipe.'
			],
			tags: ['Angular 4', 'React', '.NET', 'Microservices']
		},
		{
			logo: '/endless-paper-logo.svg',
			alt: 'Logo d’Endless Paper',
			title: 'Stagiaire en Développement Web Full-Stack',
			company: 'Epiphanie',
			location: 'Strasbourg, France',
			date: 'Juillet 2024 - Décembre 2024',
			bullets: [
				'Développement d’un chatbot et de sa plateforme d’administration pour le site web d’Endless Paper, réduisant considérablement les demandes d’assistance client par e-mail.',
				'Conception et mise en œuvre d’un système « Humain dans la boucle » pour permettre une intervention fluide d’un agent humain dans les conversations du chatbot.',
				'Optimisation du chatbot et de la plateforme d’administration en utilisant SvelteKit, les Événements Envoyés par le Serveur (SSE) et des outils de développement assistés par l’IA.',
				'Contribution à l’amélioration de l’API et au développement d’une nouvelle page « Intégration Web » pour Endless Paper.',
				'Acquisition d’une expertise dans les technologies web modernes, le développement assisté par l’IA et les meilleures pratiques en ingénierie logicielle.'
			],
			tags: [
				'SvelteKit',
				'Botpress',
				'SSE',
				'Nginx',
				'SQLite',
				'Prisma',
				'JavaScript',
				'TypeScript',
				'Développement assisté par l’IA',
				'Développement Full-Stack'
			]
		}
	];
</script>

<section id="experience" class="mb-12" in:fly={{ y: 20, duration: 500, delay: 400 }}>
	<h2 class="mb-6 text-3xl font-bold text-gray-100">Experience</h2>
	<div class="space-y-6">
		{#each experience as job}
			<div
				class="relative pl-8 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0.5 before:bg-gray-600 before:content-['']"
			>
				<div class="mb-2 flex items-start">
					<div
						class="mr-4 flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2"
					>
						<img alt={job.alt} width="40" height="40" class="object-contain" src={job.logo} />
					</div>
					<div class="flex-grow">
						<h3 class="text-2xl font-semibold text-gray-100">{job.title}</h3>
						<p class="text-lg text-gray-300">
							{job.company}, {job.location}
						</p>
						<p class="text-gray-400">{job.date}</p>
					</div>
				</div>
				<ul class="mb-4 space-y-2 text-gray-300">
					{#each job.bullets as bullet}
						<li class="flex items-start">
							<span class="mt-1.5 mr-2 text-gray-500">•</span><span>{bullet}</span>
						</li>
					{/each}
				</ul>
				<div class="flex flex-wrap">
					{#each job.tags as tag}
						<span
							class="bg-opacity-30 mr-2 mb-2 inline-block rounded-full bg-green-500/30 px-3 py-1.5 text-xs font-medium text-green-500"
							>{tag}</span
						>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
