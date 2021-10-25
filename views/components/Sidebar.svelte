<script lang="ts">
	let clicks = 0;
	import { onMount } from "svelte";
	onMount(() => {
		window.addEventListener("message", (event) => {
			console.log("event", event);
			clicks++;
		});
	});
</script>

<div>hello {clicks}</div>

<!-- svelte-ignore missing-declaration -->
<button
	on:click={() => {
		tsVscode.postMessage({
			type: "onInfo",
			value: "info message",
		});
	}}>Click me</button
>

<style>
	div {
		color: blue;
	}
</style>
