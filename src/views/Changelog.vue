<template>
    <v-container class="fill-height">
        <v-row class="justify-center">
            <v-col cols="12">
                <div class="justify-center">
                    <div v-if="commitHistoryResponse === null">
                        <v-skeleton-loader  class="ma-2" type="article" v-for="index in 3" :key="index"></v-skeleton-loader>
                    </div>

                    <v-timeline dense v-if="this.commitHistoryResponse !== null">
                        <v-timeline-item v-for="(commit, index) in this.commitHistoryResponse" :key="index">
                            <v-card class="mr-6">
                                <v-card-title class="subtitle-1 py-2 px-4">
                                    Change #{{ commitHistoryResponse.length - index }}
                                </v-card-title>
                                <v-card-text class="pb-3 px-6">
                                    {{ commit.commit.message }}
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Changelog",
        data(){
            return{
                commitHistoryResponse: null,
                loading: true
            }
        },
        methods:{
            fetchCommitHistory(){
                fetch(
                    "https://api.github.com/repos/christian83182/MathsOnline/commits"
                ).then(response => {
                    return response.json();
                }).then(jsonData => {
                    this.commitHistoryResponse = jsonData;
                });
            }
        },
        mounted(){
            this.fetchCommitHistory();
        }
    }
</script>

<style scoped>

</style>