<script>
	import { ExternalLink, Github } from 'lucide-svelte';
	import { isEnhancedImage } from '$lib/utils';

	let { image, alt, title, bullets, tags, github, demo } = $props();
</script>

<li
	class="relative pl-8 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0.5 before:bg-gray-600 before:content-['']"
>
	<div class="flex flex-col md:flex-row">
		<div class="mb-4 md:mr-6 md:mb-0 md:w-1/3">
			{#if isEnhancedImage(image)}
				<enhanced:img
					{alt}
					class="rounded-lg object-cover shadow-lg transition-shadow duration-300 hover:shadow-xl"
					src={image}
				/>
			{:else}
				<img
					{alt}
					class="rounded-lg object-cover shadow-lg transition-shadow duration-300 hover:shadow-xl"
					src={image}
				/>
			{/if}
		</div>
		<div class="md:w-2/3">
			<h3 class="mb-3 text-2xl font-semibold text-gray-100">{title}</h3>
			<ul class="mb-4 space-y-2 text-gray-300">
				{#each bullets as bullet}
					<li class="flex items-start">
						<span class="mt-1.5 mr-2 text-gray-500">•</span><span>{bullet}</span>
					</li>
				{/each}
			</ul>
			<div class="flex flex-wrap">
				{#each tags as tag}
					<span
						class="bg-opacity-30 mr-2 mb-2 inline-block rounded-full bg-green-500/30 px-3 py-1.5 text-xs font-medium text-green-500"
						>{tag}</span
					>
				{/each}
			</div>
			<div class="mt-4 flex space-x-4">
				{#if demo}
					<a
						href={demo}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 text-gray-300 transition-colors duration-300 hover:text-white"
					>
						<ExternalLink />
						<span>Voir le site</span>
					</a>
				{/if}
				{#if github}
					<a
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 text-gray-300 transition-colors duration-300 hover:text-white"
					>
						<Github />
						<span>Voir le code</span>
					</a>
				{/if}
			</div>
		</div>
	</div>
</li>
