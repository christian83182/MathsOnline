<template>
    <div>
        <v-app-bar app color="blue" clipped-left dark>
            <v-app-bar-nav-icon  @click="drawerOpen = !drawerOpen"></v-app-bar-nav-icon>
            <v-toolbar-title class="pa-0">
                <span class="title mr-2 d-none d-sm-inline-flex">Math Online</span>
                <span class="heading mr-2 d-sm-none">Math Online</span>
                <span class="font-weight-thin title d-none d-sm-inline-flex">Digital Problem Generator</span>
                <span class="font-weight-thin subtitle-1 d-sm-none">Digital Problem Generator</span>
            </v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="drawerOpen" app clipped>
            <v-list>
                <v-list-item link>
                    <v-list-item-action> <v-icon>mdi-alert-circle</v-icon> </v-list-item-action>
                    <v-list-item-content> <v-list-item-title>Nothing here yet!</v-list-item-title> </v-list-item-content>
                </v-list-item>
            </v-list>

            <template v-slot:append>
                <div class="ma-2">
                    <v-btn block @click="toggleDarkMode">
                        <v-icon left>mdi-brightness-6</v-icon>
                        {{ isDarkMode() ? "Light Theme" : "Dark Theme" }}
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data(){
            return {
                drawerOpen: false,
            }
        },
        methods:{
            toggleDarkMode(){
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            },
            isDarkMode(){
                return this.$vuetify.theme.dark;
            }
        }
    }
</script>

<style scoped>

</style>