<template>
  <v-app id="app" >
      <!-- <router-view/> -->
			<!-- <span>Forensic Deep Learning</span> -->
			<v-toolbar>
				<!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
				<v-toolbar-title>Forensic Deep Learning</v-toolbar-title>
				<v-spacer></v-spacer>
				<!-- <div v-if="authenticated"> -->
				<v-toolbar-items v-if="authenticated">
				<v-btn flat color="orange"><router-link to='/list' replace>Cases</router-link></v-btn>
				<v-btn flat color="blue"><router-link to="/login" v-on:click.native="logout()" replace>Logout</router-link></v-btn>
				<!-- </div> -->
				<!-- <v-btn flat>Link Three</v-btn> -->
				</v-toolbar-items>
			</v-toolbar>
		<main>
			<router-view @authenticated="setAuthenticated"></router-view>
		</main>
  </v-app>
</template>

<script>
import Vue from 'vue';

export default {
	name: 'app',
	data() {
		return {
			authenticated: false, // SET TO TRUE DURING DEVEL
		}
	},
	mounted() {
		if(!this.authenticated) {
			this.$router.replace({ name: "Login" });
		}
	},
	methods: {
		setAuthenticated(status) {
			this.authenticated = status;
		},
		logout() {
			this.authenticated = false;
		}
	},
};
</script>

<style>
body {
	margin: 0;
}

/* #app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
} */

main {
	text-align: center;
	/* margin-top: 40px; */
}

header {
	margin: 0;
	height: 56px;
	padding: 0 16px 0 24px;
	background-color: #35495E;
	color: #ffffff;
}

header span {
	display: block;
	position: relative;
	font-size: 20px;
	line-height: 1;
	letter-spacing: .02em;
	font-weight: 400;
	box-sizing: border-box;
	padding-top: 16px;
}

/* .button {
	position: relative;
	display: inline-block;
	padding: 12px 24px;
	margin: .3em 0 1em 0;
	width: 100%;
	vertical-align: middle;
	color: #fff;
	font-size: 16px;
	line-height: 20px;
	-webkit-font-smoothing: antialiased;
	text-align: center;
	letter-spacing: 1px;
	background: transparent;
	border: 0;
	border-bottom: 2px solid rgb(46, 59, 83);
	cursor: pointer;
	transition: all 0.15s ease;
}
.button:focus { outline: 0; } */


/* Button modifiers */

 /* .buttonBlue {
	background: #35495E;
	text-shadow: 1px 1px 0 rgba(39, 110, 204, .5);
}
.buttonGray {
	background: rgb(107, 108, 109);
	text-shadow: 1px 1px 0 rgba(39, 110, 204, .5); 
 }  */
</style>
