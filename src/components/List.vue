<template>
		<v-card>
			<v-card-title class="indigo white--text headline">
				Investigation Directory
			</v-card-title>
			<v-layout justify-space-between pa-3 >
				<v-flex xs5>
				<v-treeview :active.sync="active" :items="items" :load-children="fetchCases" :open.sync="open" activatable active-class="primary--text" class="grey lighten-5" open-on-click transition >
					<v-icon v-if="!item.children" slot="prepend" slot-scope="{ item, active }" :color="active ? 'primary' : ''" >mdi-account</v-icon>
				</v-treeview>
				</v-flex>
				<v-flex d-flex text-xs-center >

				<v-scroll-y-transition mode="out-in">
					<div v-if="!selected" class="title grey--text text--lighten-1 font-weight-light" style="align-self: center;" >
					Select a Case
					</div>
					<v-card v-else :key="selected.id" class="pt-4 mx-auto" flat max-width="400" >
						<v-card-text>
							<h3 class="headline mb-2">
								Case Number {{ selected.address.zipcode }}
							</h3>
							<!-- <h3 class="headline mb-2">
								{{ selected.name }}
							</h3> -->
							<div class="mb-2"> Main Investigator : {{ selected.name }} </div>
							<div class="mb-2"> Contact Number : {{ selected.phone }} </div>
							<!-- <div class="mb-2"> Address : {{ selected.address.city }}, {{ selected.address.suite }} </div> -->
							<!-- <div class="subheading font-weight-bold">  code : {{ selected.address.zipcode }}</div> -->
							<!-- <div class="subheading font-weight-bold"> ZIP code : {{ selected.address.zipcode }}</div> -->
						</v-card-text>
						<v-divider></v-divider>
						
						<v-layout tag="v-card-text" text-md-left wrap >

							<v-flex tag="strong" xs5 text-xs-right mr-1 mb-2>Original Suspect: </v-flex>
							<v-flex>{{ selected.address.street }}</v-flex>
							<v-flex tag="strong" xs5 text-xs-right mr-1 mb-2>Suspected Crimes:</v-flex>
							<v-flex>{{selected.company.bs}}</v-flex>
							<!-- <a :href="`//${selected.website}`" target="_blank">{{ selected.website }} {{ selected.company.name }}</a>
							</v-flex> -->
							<!-- <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2>Phone:</v-flex>
							<v-flex>{{ selected.phone }}</v-flex> -->
						</v-layout>

						<v-divider></v-divider>
						<br>
						<h2 class="headline mb-0">Evidences: </h2>
						<br>
					    <!-- <v-flex xs12 sm6 offset-sm3> -->
							<v-card>
									
								<!-- <div> -->
								<!-- <v-layout tag="v-card-text" text-md-left wrap > -->

								<v-flex tag="strong" xs5 text-xs-right mr-1 mb-2>Evidence ID :</v-flex>
								<v-flex>{{ selected.address.geo.lat.substring(1)}}</v-flex>
								<v-flex tag="strong" xs5 text-xs-right mr-1 mb-2>Evidence Type:</v-flex>
								<v-flex>Image</v-flex>
								<v-flex tag="strong" xs5 text-xs-right mr-1 mb-2>Notes:</v-flex>
								<v-flex>{{ selected.company.name }} {{ selected.company.catchPhrase }} </v-flex>
								<!-- <a :href="`//${selected.website}`" target="_blank">{{ selected.website }} {{ selected.company.name }}</a>
								</v-flex> -->
								<!-- <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2>Phone:</v-flex>
								<v-flex>{{ selected.phone }}</v-flex> -->
								<!-- </v-layout> -->
									<!-- </div> -->

									<!-- <div>
										<h3>Evidence ID : {{ selected.address.geo.lat.substring(1)}}</h3>
										<h4>Type: Image</h4>
										<div>Notes: {{ selected.company.name }} {{ selected.company.catchPhrase }}</div>
									</div>
									</v-card-title> -->
									
									<v-divider></v-divider>
									<v-card-actions>
									<!-- <v-btn flat color="orange">Add Notes</v-btn> -->
									<v-btn flat color="orange">Analyse With Neural Engine</v-btn>
									</v-card-actions>
									<v-divider></v-divider>

									<v-card-title secondary-title>
									<div>
										<h4>File: </h4>
									</div>
									</v-card-title>

									<!-- <v-divider></v-divider> -->
									<v-img src="https://source.unsplash.com/random/800x600" aspect-ratio="1.4" ></v-img>
							</v-card>
						<!-- </v-flex> -->
					</v-card>
				</v-scroll-y-transition>

				</v-flex>
			</v-layout>
		</v-card>
</template>

<script>

const pause = ms => new Promise(resolve => setTimeout(resolve, ms))


export default {
	name: 'List',
	data: function() {
		return {
			active: [],
			avatar: null,
			open: [],
			users: [],
			photos: [],
		};
	},
	computed: {
		items () {
		return [
			{
			name: 'Cases',
			children: this.users
			}
		]
		},
		selected () {
		if (!this.active.length) return undefined

		const id = this.active[0]

		return this.users.find(user => user.id === id)
		}
	},
	watch: {
		selected: 'randomAvatar'
	},
	methods: {
		async fetchCases (item) {
			// await pause(500)

			return fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(json => (item.children.push(...json)))
			.catch(err => console.warn(err))
		},
		randomAvatar () {
			this.avatar = avatars[Math.floor(Math.random() * avatars.length)]
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.vignette {
  max-width: 60px;
  max-height: 60px;
  margin-right: 4%;
}

</style>
