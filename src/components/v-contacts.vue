<template>
	<section>
		<h1 class="margin">{{ $t("contacts") }}</h1>

		<div class="flex-wrapper flex-row margin">
			<v-headquarters-description/>
			<v-support-description/>
		</div>

	</section>
</template>

<script>
	import vHeadquartersDescription from "./v-headquarters-description";
	import vSupportDescription from "./v-support-description";

	export default {
		name: "v-contacts",
		components: {
			vHeadquartersDescription,
			vSupportDescription
		}
	};
</script>

<style scoped lang="scss">
	.flex-wrapper.margin {
		margin-top: 0.5%;
	}
	section {
		display: flex;
		flex-direction: column;
	}
	h1 {
		font-size: 3.5rem;
		font-weight: normal;
	}
</style>
