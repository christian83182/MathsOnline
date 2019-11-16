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
        {name:"Addition",icon:"mdi-plus",route:"/addition"},
        {name:"Subtraction",icon:"mdi-minus",route:""},
        {name:"Multiplication",icon:"mdi-close",route:""},
        {name:"Division",icon:"mdi-division",route:""}]
    },{
      name: "Non-Integer Arithmetic",
      description: "Non-Integer arithmetic applies to operators which result in non-whole numbers, such as fractions, decimals, and percentages.",
      color:"light-green",
      subTopics:[
        {name:"Decimals",icon:"mdi-decimal",route:""},
        {name:"Fractions",icon:"mdi-ab-testing",route:""},
        {name:"Percentages",icon:"mdi-percent",route:""}]
    },{
      name: "Miscellaneous Arithmetic",
      description: "This topic covers more complex/real life arithmetic such as problems involving area, volume, time, and currency.",
      color:"amber",
      subTopics:[
        {name:"Area",icon:"mdi-square-outline",route:""},
        {name:"Volume",icon:"mdi-cube-outline",route:""},
        {name:"Time",icon:"mdi-clock-outline",route:""},
        {name:"Currency",icon:"mdi-currency-gbp",route:""}]
    },{
      name: "Statistics",
      description: "Focused primarily on basic averaging statistics including mean, median, mode, and range. ",
      color:"deep-orange",
      subTopics:[
        {name:"Mean",icon:"mdi-poll",route:""},
        {name:"Median",icon:"mdi-align-vertical-center",route:""},
        {name:"Mode",icon:"mdi-chart-scatter-plot",route:""},
        {name:"Range",icon:"mdi-arrow-expand-horizontal",route:""}]
    },{
      name: "Algebra",
      description: "Narrowly focused on Linear Algebra; dealing with simplifying expressions, using formulas to compute values, and solving equations.",
      color:"pink",
      subTopics:[
        {name:"Simplification",icon:"mdi-square-root",route:""},
        {name:"Using Formulas",icon:"mdi-function-variant",route:""},
        {name:"Solving Equations",icon:"mdi-thought-bubble",route:""}]
    }]
  },
  mutations: {},
  actions: {},
  modules: {}
});
