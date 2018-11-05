<template>
	<div id="app">
		<v-contacts/>
		<v-our-offices/>
		<v-contact-us/>
	</div>
</template>

<script>
	import vContacts from "./components/v-contacts.vue";
	import vOurOffices from "./components/v-our-offices.vue";
	import vContactUs from "./components/v-contact-us.vue";

	export default {
		name: "app",
		components: {
			vContacts,
			vOurOffices,
			vContactUs
		}
	};
</script>

<style lang="scss">
	@import url("assets/css/fonts.scss"),
	"assets/css/colors",
	"assets/css/normalize";

	$margin: 4.3% 0 0 4.5%;

	html {
		font-size: 14px;
	}
	#app {
		font-family: SuisseIntl;
		color: $black;
		b {
			font-weight: bold;
		}
		a,
		mark {
			color: $green;
			background: transparent;
			text-decoration: none;
		}
		.error{
			color: $red;
			border-color: $red;
			input{
				color: $red;
			}
		}
		.approve{
			color: $white;
			border-color: $white;
		}
	}
	.flex-wrapper {
		display: flex;
	}
	.margin {
		margin: $margin;
	}
	h2 {
		font-size: 2.4rem;
		font-weight: normal;
	}
	.flex-column {
		flex-direction: column;
	}
	.flex-row {
		flex-direction: row;
	}
	@media screen and (max-width: 970px) {
		html {
			font-size: 10px;
		}
	}
	@media screen and (max-width: 768px) {
		html {
			font-size: 8px;
		}
	}
	@media screen and (max-width: 500px) {
		html {
			font-size: 6px;
		}
	}
	@media screen and (max-width: 360px) {
		html {
			font-size: 4px;
		}
		#app{
			min-width: 320px;
		}
	}
</style>
