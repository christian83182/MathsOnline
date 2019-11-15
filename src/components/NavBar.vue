<template>
    <div>
        <v-app-bar app color="blue" clipped-left>
            <v-app-bar-nav-icon @click="drawerOpen = !drawerOpen"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <span class="heading mr-2">Math Online</span>
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
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data(){
            return {
                drawerOpen: false
            }
        }
    }
</script>

<style scoped>

</style>