<template>
  <form id="login">
      <h1>Login</h1>
  <div class="group">
    <input type="text" v-model="loginField"><span class="highlight"></span><span class="bar"></span>
    <label>Username</label>
  </div>
  <div class="group">
    <input type="password" v-model="passwordField"><span class="highlight"></span><span class="bar"></span>
    <label>Password</label>
  </div>
  <div>
    <button v-ripple class="button buttonBlue">Login</button>
  </div>
</form>
</template>

<script>
// let loginForm = new Vue({
//     el: '#login',
//     data:{
//         loginField: "",
//         passwordField: ""
//     }
// });
export default {
  data: {
    loginField: "",
    passwordField: "",
  },
  methods: {
    hello: function() {
      return 'Hello World';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

body {
	font-family: Helvetica;
	background: #eee;
  -webkit-font-smoothing: antialiased;
}

h1, h3 { font-weight: 300; }

h1 { color: #636363; }

h3 { color: #4a89dc; }

form {
	width: 380px;
	margin: 4em auto;
	padding: 3em 2em 2em 2em;
	background: #fafafa;
	border: 1px solid #ebebeb;
	box-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px;
}

.group { 
	position: relative; 
	margin-bottom: 45px; 
}

input {
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	-webkit-appearance: none;
	display: block;
	background: #fafafa;
	color: #636363;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid #757575;
}

input:focus { outline: none; }

/* Label */

label {
	color: #999; 
	font-size: 18px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: all 0.2s ease;
}


/* active */

input:focus ~ label, input.used ~ label {
	top: -20px;
  transform: scale(.75); left: -2px;
	/* font-size: 14px; */
	color: #4a89dc;
}


/* Underline */

.bar {
	position: relative;
	display: block;
	width: 100%;
}

.bar:before, .bar:after {
	content: '';
	height: 2px; 
	width: 0;
	bottom: 1px; 
	position: absolute;
	background: #4a89dc; 
	transition: all 0.2s ease;
}

.bar:before { left: 50%; }

.bar:after { right: 50%; }


/* active */

input:focus ~ .bar:before, input:focus ~ .bar:after { width: 50%; }


/* Highlight */

.highlight {
	position: absolute;
	height: 60%; 
	width: 100px; 
	top: 25%; 
	left: 0;
	pointer-events: none;
	opacity: 0.5;
}


/* active */

input:focus ~ .highlight {
	animation: inputHighlighter 0.3s ease;
}


/* Animations */

/* @keyframes inputHighlighter {
	from { background: #4a89dc; }
	to 	{ width: 0; background: transparent; }
} */


/* Button */


</style>
