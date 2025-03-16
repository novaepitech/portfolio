<script>
	import { fly } from 'svelte/transition';
	const aboutText = [
		"Je suis un développeur Full Stack expérimenté de 22 ans avec un talent pour la création de produits qui font la différence. Mon expertise s'étend aux technologies frontend et backend, me permettant de concevoir des solutions complètes de A à Z.",
		"Tout au long de ma carrière, j'ai été profondément impliqué dans l'écosystème des startups. J'ai travaillé avec diverses startups, adoptant le rythme rapide et l'esprit innovant de ces environnements. Ce parcours m'a conduit à fonder ma propre startup, où j'ai acquis une expérience directe dans tous les aspects du développement de produits et des opérations commerciales.",
		"Pendant mes années de lycée, j'ai excellé en développement logiciel, obtenant le titre prestigieux de DUX (meilleur élève) dans ce domaine. Cette réussite précoce a jeté les bases de ma passion et de mon expertise en programmation.",
		"Lorsque je ne suis pas absorbé par le code, vous me trouverez en train d'expérimenter dans la cuisine ou à donner vie à des idées avec mon imprimante 3D. Je suis toujours en train de créer, qu'il s'agisse de produits numériques ou d'objets tangibles."
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
