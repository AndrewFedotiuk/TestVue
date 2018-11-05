<template>
	<section class="flex-wrapper flex-row">
		<article class="margin">
			<h2>{{ $t("section2Title") }}</h2>

			<div class="flex-wrapper flex-row towns" @click="setOffice">
				<p
					v-for="(item, index) in offices"
					:data-office="index"
					:class="{ active : (item.coordinates.lat === currentOffice.lat &&
					item.coordinates.lng === currentOffice.lng) }">
					{{ $t(item.key) }}
				</p>
			</div>

			<h2 class="town-name">{{placeName}}</h2>
			<div class="dynamic-info">
				<p>{{placeAddress}}</p>
				<p>{{placeIndex}}</p>
				<p>{{placeCountry}}</p>
			</div>
		</article>
		<v-map v-on:change-place="changePlace" :currentOffice="currentOffice"></v-map>

	</section>
</template>

<script>
	import vMap from "./v-map"

	export default {
		name: "v-our-offices",
		components: {
			vMap
		},
		data: function () {
			return {
				placeName: "Global Message Services Ukraine LLC",
				placeAddress: "Kuiv, Stepan Bandera, 33",
				placeIndex: "02066",
				placeCountry: "Ukraine",
				currentOffice: {lat: 50.410724, lng: 30.534304},
				offices: [
					{
						key: "kuiv",
						name: "Global Message Services Ukraine LLC",
						address: "Kuiv, Stepan Bandera, 33",
						index: "02066",
						country: "Ukraine",
						coordinates: {lat: 50.410724, lng: 30.534304}
					},
					{
						key: "newYork",
						name: "New York, Mclane Capital Partners LLC",
						address: "110 Wall St",
						index: "10005",
						country: "USA",
						coordinates: {lat: 40.704942, lng: -74.006412}
					},
					{
						key: "guangzhou",
						name: "Guangzhou , Mclane Capital Partners LLC",
						address: "Not 110 Wall St",
						index: "20205",
						country: "China",
						coordinates: {lat: 23.127933, lng: 113.550191}
					},
					{
						key: "barcelona",
						name: "Barcelona, Mclane Capital Partners LLC",
						address: "Not 110 Wall St",
						index: "40805",
						country: "Spain",
						coordinates: {lat: 41.386759, lng: 2.154347}
					}

				]
			}
		},
		methods: {
			changePlace(payload) {
				this.currentOffice = {};
				const {name, address_components, vicinity} = {...payload};
				this.placeName = name;
				this.placeAddress = vicinity;
				this.placeCountry = address_components.find(item =>
					item.types.findIndex(type => type === 'country') !== -1).long_name;
				this.placeIndex = address_components.find(item =>
					item.types.findIndex(type => type === 'postal_code') !== -1).long_name;
			},
			setOffice(e) {
				if (e.target.dataset && this.offices[e.target.dataset.office]) {
					const office = this.offices[e.target.dataset.office];

					this.currentOffice = office.coordinates;
					this.placeName = office.name;
					this.placeIndex = office.index || '';
					this.placeCountry = office.country || '';
					this.placeAddress = office.address || '';
				}
			}
		}
	};
</script>

<style scoped lang="scss">
	@import "../assets/css/colors";

	.flex-wrapper {
		&.margin {
			margin-top: 0.3%;
			&.dynamic-info {
				margin-top: 0.7%;
				margin-bottom: 11%;
				p {
					font-size: 0.7rem;
				}
			}
			&.town-name {
				margin-top: 3.3%;
				font-size: 2rem;
			}
		}
	}

	article {
		width: 35%;
	}

	section {
		position: relative;
		justify-content: space-between;
		margin-top: 6%;
		background: url("../assets/images/black-bg.jpg") no-repeat;
		background-size: cover;
		color: $white;
		.active {
			color: $green;
		}
	}

	.towns {
		padding-top: 1.4%;
		p {
			margin-right: 1.7%;
			font-size: 0.8rem;
			font-weight: bold;
			cursor: pointer;
		}
	}

	h2 {
		margin-bottom: 0.5%;
	}
</style>
