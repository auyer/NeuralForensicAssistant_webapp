<template>
    <div id="secure">
        <v-card class="pt-4 mx-auto" flat max-width="600" >
            <v-card-text>
                <h3 class="headline mb-2">
                    Welcome
                </h3>
            </v-card-text>
            <v-divider></v-divider>
            <h3 class="headline mb-2 mx-auto">
                {{ mock.name }}
            </h3>
            <v-layout tag="v-card-text" text-md wrap >
                <v-flex tag="strong" xs5 text-xs-right mr-1 mb-2>Position : </v-flex>
                <v-flex>{{ mock.position }}</v-flex>
                <v-flex tag="strong" xs5 text-xs-right mr-1 mb-2>Agency: </v-flex>
                <v-flex>{{ mock.agency }}</v-flex>
            </v-layout>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'Secure',
        data() {
            return {
                mock: {
                    name : "Javier Gonzales ",
                    position : "Chief Cyber Foresics Investigator",
                    agency : "CYBERPOL Investigation",
                }
            };
        }
    }
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>