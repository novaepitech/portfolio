<script>
	import { fly } from 'svelte/transition';
	const aboutText = [
		"Attiré par l'informatique depuis mon plus jeune âge, j'ai toujours été fasciné par le fonctionnement interne des systèmes. Déjà à 14 ans, je rootais et jailbreakais mes téléphones, explorant les possibilités au-delà des limites imposées.",
		"Aujourd'hui âgé de 19 ans, je suis étudiant en deuxième année à Epitech.  Je me spécialise dans le développement web fullstack, un domaine qui me passionne car j'aime créer des applications offrant une expérience utilisateur intuitive et agréable. Pour moi, une application réussie doit être à la fois belle et performante.",
		"Quand je ne suis pas en train de coder, vous me trouverez en train d'explorer un nouveau monde en VR, ou bien en train de faire des pompes et des tractions."
	];
</script>

<section id="about" class="mb-8" in:fly={{ y: 20, duration: 500, delay: 200 }}>
	<h2 class="mb-6 text-3xl font-bold text-gray-100">À propos de moi</h2>
	{#each aboutText as paragraph}
		<p class="mb-4 text-gray-300">
			{paragraph}
		</p>
	{/each}
</section>
