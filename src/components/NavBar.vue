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

        <v-navigation-drawer v-model="drawerOpen" app clipped disable-resize-watcher>
            <v-list-item class="d-lg-none">
                <v-list-item-content>
                    <v-list-item-title class="title font-weight-light">Math Online</v-list-item-title>
                    <v-list-item-subtitle class="subtitle-1 font-weight-thin">Digital Problem Generator</v-list-item-subtitle>
                </v-list-item-content>

            </v-list-item>

            <v-divider></v-divider>

            <v-list>
                <v-list-item link to="/">
                    <v-list-item-action> <v-icon>mdi-home</v-icon> </v-list-item-action>
                    <v-list-item-content> <v-list-item-title>Home</v-list-item-title> </v-list-item-content>
                </v-list-item>

                <v-list-group prepend-icon="mdi-book-open-variant">
                    <template v-slot:activator>
                        <v-list-item-title>Topics</v-list-item-title>
                    </template>

                    <div v-for="(topic,index) in topicsList" :key="index">
                        <v-list-item v-for="(subtopic, subIndex) in topic.subTopics" :key="subIndex" link :to="subtopic.route" :disabled="subtopic.route === ''">
                            <v-list-item-icon class="pl-4"><v-icon :color="topic.color">{{ subtopic.icon }}</v-icon> </v-list-item-icon>
                            <v-list-item-content>{{ subtopic.name }}</v-list-item-content>
                        </v-list-item>
                    </div>
                </v-list-group>

                <v-list-item link to="/about">
                    <v-list-item-action> <v-icon>mdi-information</v-icon> </v-list-item-action>
                    <v-list-item-content> <v-list-item-title>About</v-list-item-title> </v-list-item-content>
                </v-list-item>

                <v-list-item link to="/changelog">
                    <v-list-item-action> <v-icon>mdi-code-brackets</v-icon> </v-list-item-action>
                    <v-list-item-content> <v-list-item-title>Changelog</v-list-item-title> </v-list-item-content>
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
                topicsList: this.$store.state.topics,
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