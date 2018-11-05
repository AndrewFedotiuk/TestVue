<template>
	<div class="flex-wrapper flex-column width">
		<h2 v-html="$t('technical')"></h2>
		<div class="info-block">
			<p>{{ $t("gsm") }}</p>
			<p class="number"><a href="tel:+41415446206">{{ $t("number2")}}</a></p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "vSupportDescription",
		data: function () {
			return {};
		}
	};
</script>

<style scoped lang="scss">
	.info-block {
		p {
			font-size: 1rem;
			line-height: 1.8;
		}
		.number {
			font-size: 1.9rem;
			margin-top: 4%;
		}
	}
	.width {
		width: 45%
	}
</style>
