<script>
	export let name;
  export let welcome_msg;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>{welcome_msg} and use <a href="https://swastkk.github.io/feedbackapp">swastkk.github.io/feedbackapp</a> to see the deployed version.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
