<template>
	<section id="formWrapper">

		<form class="margin">
			<fieldset>
				<legend class="h2">{{ $t("contactUs") }}</legend>
				<p :class="{approve: this.name}">
					<label for="name">{{$t("nameLabel")}}</label>
					<input type="text" id="name" maxlength="100" v-model.lazy="name">
				</p>
				<p :class="{approve: this.phone}">
					<label for="number">{{$t("numberLabel")}}</label>
					<input type="number" maxlength="100" id="number" v-model.lazy="phone">
				</p>

				<p :class="{approve: this.email && !this.errors.first('email'), error: this.errors.first('email')}">
					<label for="email">{{$t("emailLabel")}}</label>
					<input v-validate="'required|email'" name="email" type="email" id="email" v-model.lazy="email" maxlength="100">
				</p>

				<span class="error" v-show="!checkSubmit">{{ $t("error") }}</span>
				<span class="error">{{ errors.first('email') }}</span>

				<p class="checkboxLine">
                    <span class="relative">
                    <input type="checkbox" class="checkbox" v-model="check">
                     <svg class="checkmark" width="13px" height="14px">
                     <path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M12.432,1.252 L6.020,12.243 L6.384,12.680 L5.616,13.320 L5.484,13.162 L5.432,13.252 L4.568,12.748 L4.803,12.345 L0.616,7.320 L1.384,6.680 L5.339,11.426 L11.568,0.748 L12.432,1.252 Z"/>
                    </svg>
                    </span>

					<span :class="{approve: this.check}">{{$t("acept")}}</span>

				</p>
				<input type="button" :value="$t('buttonLabel')" class="button" v-if="!this.shipped" @click="onSubmit" :disabled="!checkSubmit && !this.shipped">
				<span v-else class="shipped">{{$t("shipped")}}</span>
			</fieldset>
		</form>
		<p class="form-caption">{{$t("formCaption")}}</p>


	</section>
</template>

<script>
	import axios from 'axios'

	export default {
		name: "v-contact-us",
		components: {},
		data: function () {
			return {
				"name": "",
				"phone": "",
				"email": "",
				"check": false,
				"shipped": false,
			}
		},
		methods: {
			onSubmit() {
				axios
					.post('http://httpbin.org/post')

				axios({
					method: 'post',
					url: 'http://httpbin.org/post',
					data: {
						name: this.name,
						phone: this.phone,
						email: this.email
					}
				})
				.then(response => {
					console.log(response);
					this.shipped = true;
				});

			}
		},
		computed:{
			checkSubmit(){
				if(this.name && this.phone && this.email && this.check && !this.errors.first('email')){
					return true;
				}
			}
		}
	};
</script>

<style scoped lang="scss">
	@import "../assets/css/colors";

	.error {
		margin: 5px 0 5px 0;
	}
	section {
		display: flex;
		flex-direction: row;
		padding: 3.8% 0 8% 0;
		background: $green url("../assets/images/pattern.png") 9% 5.4% / 7.5%;
		color: black;
	}
	.form-caption {
		margin-top: 10.5%;
		padding: 0 3%;
		width: 50%;
		font-size: 1.3rem;
		line-height: 1.5;
		box-sizing: border-box;
		z-index: 1;
	}
	.h2 {
		font-size: 2.5rem;
		color: $white;
	}
	fieldset {
		padding: 0;
		margin: 0;
		border: none;
		p {
			&:first-of-type {
				margin-top: 2%;
			}
			&:last-of-type {
				margin-top: 2.5%;
				width: 65%;
				font-size: 1.3rem;
			}
			&:not(:last-of-type) {
				display: flex;
				justify-content: space-between;
				margin: 0;
				border-bottom: 1px solid $black;
				padding-top: 4%;
				padding-bottom: 1.5%;
				font-size: 1.5rem;
				white-space: nowrap;
				input {
					padding-left: 6px;
					width: 82%;
					height: 3%;
					background: transparent;
					border: none;
					color: $black;
				}
			}
		}
	}
	form {
		width: 45%;
		z-index: 1;
	}
	.button {
		margin-top: 5%;
		width: 49%;
		height: 6em;
		border: none;
		color: $white;
		font-size: 1rem;
		font-weight: bold;
		background: $black;
		&:disabled{
			opacity: .4;
		}
	}
	input {
		outline: 0;
	}
	label {
		margin-top: 0.5%;
		margin-right: 15px;
	}
	.relative {
		position: relative;
		display: flex;
		align-items: center;
	}
	.shipped{
		color: white;
		font-size: 3rem;
		white-space: nowrap;
	}
	.checkmark {
		position: absolute;
		left: 4px;
		margin: auto;
		opacity: 0;
		pointer-events: none;
	}
	input[type="checkbox"] {
		-webkit-appearance: none;
		border: none;
		margin-right: 10px;
		width: 20px;
		height: 20px;
		background-color: white;
		&:checked + .checkmark {
			opacity: 1;
		}
	}
	input[type="number"]::-webkit-inner-spin-button {
		display: none;
	}
	.checkboxLine {
		display: flex;
		justify-content: space-between;
		align-items: center;
		span {
			white-space: nowrap;
		}
	}
	#app .approve input{
		color: inherit;
	}
	span.error{
		display: block;
	}
</style>
