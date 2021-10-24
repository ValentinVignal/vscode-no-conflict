<div>hello 1234</div>

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
