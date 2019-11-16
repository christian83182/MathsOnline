import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topics:[{
      name: "Basic Arithmetic",
      description: "Basic arithmetic involves the application of basic numerical operators such as addition, subtraction, multiplication, and division.",
      color:"cyan",
      subTopics:[
        {name:"Addition",icon:"mdi-plus"},
        {name:"Subtraction",icon:"mdi-minus"},
        {name:"Multiplication",icon:"mdi-close"},
        {name:"Division",icon:"mdi-division"}]
    },{
      name: "Non-Integer Arithmetic",
      description: "Non-Integer arithmetic applies to operators which result in non-whole numbers, such as fractions, decimals, and percentages.",
      color:"light-green",
      subTopics:[
        {name:"Decimals",icon:"mdi-decimal"},
        {name:"Fractions",icon:"mdi-ab-testing"},
        {name:"Percentages",icon:"mdi-percent"}]
    },{
      name: "Miscellaneous Arithmetic",
      description: "This topic covers more complex/real life arithmetic such as problems involving area, volume, time, and currency.",
      color:"amber",
      subTopics:[
        {name:"Area",icon:"mdi-square-outline"},
        {name:"Volume",icon:"mdi-cube-outline"},
        {name:"Time",icon:"mdi-clock-outline"},
        {name:"Currency",icon:"mdi-currency-gbp"}]
    },{
      name: "Statistics",
      description: "Focused primarily on basic averaging statistics including mean, median, mode, and range. ",
      color:"deep-orange",
      subTopics:[
        {name:"Mean",icon:"mdi-poll"},
        {name:"Median",icon:"mdi-align-vertical-center"},
        {name:"Mode",icon:"mdi-chart-scatter-plot"},
        {name:"Range",icon:"mdi-arrow-expand-horizontal"}]
    },{
      name: "Algebra",
      description: "Narrowly focused on Linear Algebra; dealing with simplifying expressions, using formulas to compute values, and solving equations.",
      color:"pink",
      subTopics:[
        {name:"Simplification",icon:"mdi-square-root"},
        {name:"Using Formulas",icon:"mdi-function-variant"},
        {name:"Solving Equations",icon:"mdi-thought-bubble"}]
    }]
  },
  mutations: {},
  actions: {},
  modules: {}
});
