<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card class="mx-auto mt-0 elevation-24" max-width="800">
          <v-card-title class="mx-auto">
            <span class="font-weight-regular mx-2">TOPICS</span>
            <span class="font-weight-thin">| Select a topic...</span>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text class="pa-4">
            <v-expansion-panels focusable accordion multiple class="elevation-1">
              <v-expansion-panel v-for="(topic, index) in topicsList" :key="index">
                <v-expansion-panel-header>
                  <div>
                    <div :class="'title font-weight-regular ' + topic.color + '--text'">{{ topic.name }}</div>
                    <div class="font-weight-thin pr-5">{{ topic.description }}</div>
                  </div>
                </v-expansion-panel-header>

                <v-expansion-panel-content class="pa-0">
                  <v-list dense>
                    <div v-for="(subTopic, subIndex) in topic.subTopics" :key="subIndex">
                      <v-list-item  class="px-0" link :to="subTopic.route" :disabled="subTopic.route === ''">
                        <v-list-item-icon><v-icon :color="topic.color">{{ subTopic.icon }}</v-icon> </v-list-item-icon>
                        <v-list-item-content class="font-weight-light">
                          <span> {{ subTopic.name }} </span>
                          <span class="error--text" v-if="subTopic.route ===''">This sub-topic has yet to be fully implemented... </span>
                        </v-list-item-content>
                        <v-list-item-action><v-icon :color="topic.color">mdi-chevron-right</v-icon></v-list-item-action>
                      </v-list-item>
                    </div>
                  </v-list>
                </v-expansion-panel-content>

              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "home",
  data(){
    return{
      topicsList: this.$store.state.topics
    };
  }
};
</script>

<style scoped>
  .v-expansion-panel-content__wrap{
    padding-left: 0px;
  }
</style>
