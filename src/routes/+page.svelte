<!-- src/routes/+page.svelte -->
<script>
	import Header from '$lib/components/Header.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Education from '$lib/components/Education.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let isDesktop = false;

	onMount(() => {
		isDesktop = window.innerWidth >= 1024; // lg breakpoint
		window.addEventListener('resize', () => {
			isDesktop = window.innerWidth >= 1024;
		});
	});
</script>

<svelte:head>
	<title>Mateo Cabrera</title>
	<meta name="description" content="Développeur Web Full Stack" />
</svelte:head>

<div class="min-h-screen bg-[#111111] text-white">
	{#if isDesktop}
		<div class="hidden flex-row lg:flex">
			<!-- Left Side (Fixed) -->
			<div
				class="flex h-screen max-w-[800px] min-w-[300px] flex-col justify-between p-8 lg:fixed lg:w-2/5 lg:p-12 lg:pl-[10%]"
				in:fade={{ duration: 500 }}
			>
				<Header />
			</div>

			<!-- Right Side (Scrollable) -->
			<div
				class="mx-auto min-h-screen w-full max-w-[1200px] min-w-[300px] lg:ml-[40%] lg:w-3/5"
				in:fade={{ duration: 500 }}
			>
				<main class="p-8 lg:p-12 lg:pr-[10%]">
					<About />
					<Skills />
					<Experience />
					<Education />
					<Projects />
				</main>
				<Footer />
			</div>
		</div>
	{:else}
		<!-- Mobile View -->
		<div class="lg:hidden">
			<main class="mx-auto max-w-screen-sm p-6" in:fade={{ duration: 500 }}>
				<div class="mb-16">
					<Header />
				</div>

				<About />
				<Skills />
				<Experience />
				<Education />
				<Projects />
			</main>
			<Footer />
		</div>
	{/if}
</div>
