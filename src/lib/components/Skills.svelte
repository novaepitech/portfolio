<script>
	import { fly } from 'svelte/transition';
	const skills = {
		languages: ['JavaScript', 'TypeScript', 'C', 'C++'],
		frameworks: ['ReactJS', 'NextJS', 'Svelte', 'SvelteKit', 'ExpressJS'],
		backend: ['Node.js', '.NET', 'REST APIs', 'Microservices'],
		databases: ['Postgres', 'SQL', 'MongoDB', 'SQLite'],
		practices: ['Microservices', 'Microfrontend', 'Git']
	};
</script>

<div in:fly={{ y: 20, duration: 500, delay: 300 }}>
	<h2 class="mb-6 text-3xl font-bold text-gray-100">Skills</h2>
	{#each Object.entries(skills) as [category, items]}
		<div class="mb-4">
			<h4 class="mb-2 text-xl font-semibold text-gray-200 capitalize">{category}</h4>
			<div class="flex flex-wrap">
				{#each items as item}
					<span
						class={`mr-2 mb-2 inline-block rounded-full px-3 py-1.5 text-xs font-medium
                       ${category === 'languages' ? 'bg-blue-500/30 text-blue-500' : ''}
                       ${category === 'frameworks' ? 'bg-green-500/30 text-green-500' : ''}
                       ${category === 'backend' ? 'bg-purple-500/30 text-purple-500' : ''}
                       ${category === 'databases' ? 'bg-red-500/30 text-red-500' : ''}
                       ${category === 'practices' ? 'bg-yellow-500/30 text-yellow-500' : ''}
                      `}>{item}</span
					>
				{/each}
			</div>
		</div>
	{/each}
</div>
