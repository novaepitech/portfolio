<script>
	import { fly } from 'svelte/transition';
	import { isEnhancedImage } from '$lib/utils';

	import logoNovasweb from '$lib/assets/Experience/logo-novasweb.png?enhanced';
	import logoEndlessPaper from '$lib/assets/Experience/endless-paper-logo.svg';

	const experience = [
		{
			logo: logoNovasweb,
			alt: 'Logo d’auto-entrepreneur',
			title: 'Développeur Web Full-Stack Freelance',
			company: 'Auto-entrepreneur',
			location: 'Strasbourg, France',
			date: '2024 - Aujourd’hui',
			bullets: [
				'Réalisations de projets allant de landing pages optimisées pour le référencement naturel en passant par des applications web complètes.',
				'Fourniture de solutions personnalisées adaptées aux besoins des clients, garantissant des performances élevées et une expérience utilisateur optimale.',
				'Travail avec des technologies web modernes, notamment TypeScript et SvelteKit, pour construire des applications évolutives.',
				'Gestion du cycle de vie complet des projets, y compris la planification, le développement et le déploiement.'
			],
			tags: [
				'SvelteKit',
				'Astro',
				'PocketBase',
				'TypeScript',
				'Node.js',
				'Développement Full-Stack'
			]
		},
		{
			logo: logoEndlessPaper,
			alt: 'Logo d’Endless Paper',
			title: 'Stagiaire en Développement Web Full-Stack',
			company: 'Epiphanie',
			location: 'Strasbourg, France',
			date: 'Juillet 2024 - Décembre 2024',
			bullets: [
				'Développement d’un chatbot et de sa plateforme d’administration pour le site web d’Endless Paper, réduisant considérablement les demandes d’assistance client par e-mail.',
				'Conception et mise en œuvre d’un système « Human In The Loop » pour permettre une intervention fluide d’un agent humain dans les conversations du chatbot.',
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
						{#if isEnhancedImage(job.logo)}
							<enhanced:img alt={job.alt} class="object-contain" src={job.logo} />
						{:else}
							<img alt={job.alt} class="object-contain" src={job.logo.toString()} />
						{/if}
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
