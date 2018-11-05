<template>
	<GmapMap
		id="myGmap"
		ref="myGmap"
		:center="mapsCenter"
		:zoom="11"
		map-type-id="terrain"
		style="width: 50%; height: 35em"
		:options = "parseOptions"
		@click="clickHandler"
	>
		<GmapMarker
			:position="mapsCenter"
			:icon = "marker"
		/>
	</GmapMap>

</template>

<script>
	import mapStyles from "../assets/googleMapStyle.json"
	import icon from "../assets/images/marker.png"
	import {gmapApi} from 'vue2-google-maps'

	export default {

		mounted () {
			this.$refs.myGmap.$mapPromise.then((map) => {
				this.currMap = map;
			})
		},

		name: "v-map",

		data: function () {
			return {
				marker: icon,
				currMap: {},
				mapsCenter: {
					lat: 50.410724,
					lng: 30.534304
				},
				placeDetails: ''
			}
		},
		props:{
			currentOffice:{
				type: Object,
				default: {}
			}
		},
		watch:{
			currentOffice(){
				if (this.currentOffice && this.currentOffice.lat) {
					this.mapsCenter = this.currentOffice;
				}
			}
		},

		computed: {
			google: gmapApi,
			parseOptions: function () {
				return {
					disableDefaultUI: true,
					scrollwheel: false,
					styles: mapStyles
				}
			},
			service: function () {
				return google && google.maps && new google.maps.places.PlacesService(this.currMap);
			}
		},
		methods: {
			clickHandler(e) {
				this.mapsCenter = e.latLng;
				if (e.placeId) {
					this.placeDetails = e.placeId;

					this.service.getDetails({
						placeId: this.placeDetails
					}, (place, status) => {
						if (status === google.maps.places.PlacesServiceStatus.OK) {
							this.$emit('change-place', place)
						}
					})
				}
			}
		}

	}

</script>

<style scoped lang="scss">
	.map {
		height: 100%;
	}
</style>