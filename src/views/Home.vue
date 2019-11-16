<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card class="mx-auto mt-0" max-width="500">
          <v-card-title class="mx-auto">
            <span class="font-weight-regular mx-2">TOPICS</span>
            <span class="font-weight-thin">| Select a topic...</span>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-expansion-panels focusable multiple>
              <v-expansion-panel v-for="(topic, index) in topicsList" :key="index">
                <v-expansion-panel-header class="title font-weight-light">
                  {{ topic.name }}
                </v-expansion-panel-header>

                <v-expansion-panel-content class="pa-0">
                  <v-list dense>
                    <v-list-item v-for="(subTopic, subIndex) in topic.subTopics" :key="subIndex" class="px-0" @click="$emit('click')">
                      <v-list-item-icon><v-icon :color="topic.color">{{ subTopic.icon }}</v-icon> </v-list-item-icon>
                      <v-list-item-content class="font-weight-light">{{ subTopic.name }}</v-list-item-content>
                      <v-list-item-action><v-icon :color="topic.color">mdi-chevron-right</v-icon></v-list-item-action>
                    </v-list-item>
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
      topicsList:[{
        name: "Basic Arithmetic",
        color:"orange",
        subTopics:[
          {name:"Addition",icon:"mdi-plus"},
          {name:"Subtraction",icon:"mdi-minus"},
          {name:"Multiplication",icon:"mdi-close"},
          {name:"Division",icon:"mdi-division"}]
      },{
        name: "Non-Integer Arithmetic",
        color:"orange",
        subTopics:[
          {name:"Decimals",icon:"mdi-decimal"},
          {name:"Fractions",icon:"mdi-ab-testing"},
          {name:"Percentages",icon:"mdi-percent"}]
      },{
        name: "Miscellaneous Arithmetic",
        color:"orange",
        subTopics:[
          {name:"Area",icon:"mdi-square-outline"},
          {name:"Volume",icon:"mdi-cube-outline"},
          {name:"Time",icon:"mdi-clock-outline"},
          {name:"Currency",icon:"mdi-currency-gbp"}]
      },{
        name: "Statistics",
        color:"orange",
        subTopics:[
          {name:"Mean",icon:"mdi-poll"},
          {name:"Median",icon:"mdi-align-vertical-center"},
          {name:"Mode",icon:"mdi-chart-scatter-plot"},
          {name:"Range",icon:"mdi-arrow-expand-horizontal"}]
      },{
        name: "Algebra",
        color:"orange",
        subTopics:[
          {name:"Simplifying Expressions",icon:"mdi-square-root"},
          {name:"Using Formulas",icon:"mdi-function-variant"},
          {name:"Solving Equations",icon:"mdi-thought-bubble"}]
      }]
    };
  }
};
</script>

<style scoped>
  .v-expansion-panel-content__wrap{
    padding-left: 0px;
  }
</style>
