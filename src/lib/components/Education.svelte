<script>
	import { fly } from 'svelte/transition';
	import { isEnhancedImage } from '$lib/utils';

	import epitechLogo from '$lib/assets/Education/logo-epitech.png?enhanced';
	import graduationCapIcon from '$lib/assets/Education/graduation-cap-icon.svg';
	import logoTakerAcademy from '$lib/assets/Education/logo-taker-academy.webp?enhanced';

	const education = [
		{
			logo: logoTakerAcademy,
			alt: 'Logo de formation',
			title: 'TakerAcademy',
			institution: 'Formation web fullstack - Taker Junior Entreprise Epitech',
			date: 'Janvier 2024 - Juin 2024'
		},
		{
			logo: epitechLogo,
			alt: "Logo de l'école Epitech",
			title: 'Epitech',
			institution: 'École informatique',
			date: '2023 - 2028'
		},
		{
			logo: graduationCapIcon,
			alt: 'Logo de diplôme',
			title: 'Baccalauréat - Mention bien',
			institution: "Spécialités Sciences de l'Ingénieur et Mathématiques",
			date: '2023'
		}
	];
</script>

<section id="education" class="mb-12" in:fly={{ y: 20, duration: 500, delay: 500 }}>
	<h2 class="mb-6 text-3xl font-bold text-gray-100">Formation</h2>
	<ul class="space-y-6">
		{#each education as edu}
			<li
				class="relative pl-8 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0.5 before:bg-gray-600 before:content-['']"
			>
				<div class="mb-2 flex items-start">
					<div
						class="mr-4 flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white sm:h-24 sm:w-24"
					>
						{#if isEnhancedImage(edu.logo)}
							<enhanced:img
								src={edu.logo}
								alt={edu.alt}
								class="h-12 w-12 object-contain sm:h-24 sm:w-24"
							/>
						{:else}
							<img src={edu.logo.toString()} alt={edu.alt} class="h-12 w-12 object-contain sm:h-24 sm:w-24" />
						{/if}
					</div>
					<div class="flex-grow">
						<h3 class="text-xl font-semibold text-gray-100 sm:text-2xl">{edu.title}</h3>
						<p class="text-base text-gray-300 sm:text-lg">{edu.institution}</p>
						<p class="text-sm text-gray-400 sm:text-base">{edu.date}</p>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</section>
