<template>
	<div class="flex-wrapper flex-column width">
		<h2 v-html="$t('headquarters')"></h2>
		<div class="flex-wrapper flex-row">
			<div class="info-block">
				<p>{{ $t("globalMessage") }}</p>
				<p>{{ $t("bundesstrasse") }}</p>
				<p>{{ $t("zug") }}</p>
				<p class="margin-bottom">{{ $t("Switzerland") }}</p>
				<a href="tel:+41415446200" class="number">{{ $t("number1") }}</a>
			</div>
			<div class="info-block">
				<p>{{ $t("email") }}</p>
				<p><a href="mailto:info@gms-worldwide.com">{{ $t("mail")}}</a></p>
				<p>{{ $t("send") }}</p>
				<p><a href="viber://add?number=+41415446200">{{ $t("viber") }}</a></p>
				<p>{{ $t("form") }}</p>
				<p><a href="#formWrapper">{{ $t("contact") }}</a></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "vHeadquartersDescription",
		data: function () {
			return {};
		}
	};
</script>

<style scoped lang="scss">
	.info-block {
		width: 47%;
		margin-right: 2%;
		a,
		p {
			font-size: 0.9rem;
			margin-top: 4.5%;
		}
		.number {
			font-size: 1.9rem;
		}
	}
	.width {
		width: 51%;
	}
	.margin-bottom {
		margin-bottom: 12%
	}
</style>
