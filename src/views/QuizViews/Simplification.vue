<template>
    <Quiz :generateQuestion="generateQuestion"
          :difficultyOptions="['Easy','Medium','Hard']"
          :subTopicData="generateDataObject()"/>
</template>

<script>
    import Quiz from "@/components/Quiz";
    export default {
        name: "Addition",
        components: {Quiz},
        data: function () {
            return {
                generateQuestion: function (difficulty) {
                    let questionData = null;

                    if(difficulty === 'Easy'){
                        let expressionTree = generateExpression(2,"E");
                        let questionString = expressionTree.nodeString;
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Simplify: </span> <span>"+ questionString +"</span>",
                            correctAnswer: expressionTree.value,
                            incorrectAnswers: []
                        }

                    //medium
                    } else if(difficulty === "Medium"){
                        let expressionTree = generateExpression(3,"E");
                        let questionString = expressionTree.nodeString;
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Simplify: </span> <span>"+ questionString +"</span>",
                            correctAnswer: expressionTree.value,
                            incorrectAnswers: []
                        }

                    //hard
                    } else {
                        let expressionTree = generateExpression(4,"E");
                        let questionString = expressionTree.nodeString;
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Simplify: </span> <span>"+ questionString +"</span>",
                            correctAnswer: expressionTree.value,
                            incorrectAnswers: []
                        }
                    }

                    return questionData;
                },
            }
        },
        methods:{
            generateDataObject(){
                let topicData = this.$store.state.topics.find(x => x.name === 'Algebra');
                let subTopicData = topicData.subTopics.find(x => x.name === 'Simplification');
                return {
                    topicName: topicData.name,
                    topicDescription: topicData.description,
                    topicColor: topicData.color,
                    subTopicName: subTopicData.name,
                    subTopicIcon: subTopicData.icon,
                }
            }
        }
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    function getRandomArrayElement(myArray){
        return myArray[Math.floor(Math.random() * myArray.length)];
    }

    function generateExpression(initDepth){
        let inferenceRules = ['E=>MxM','E=>E+E','E=>E-E','M=>I','M=>MxM','M=>(E+E)','I'];
        return recursiveExpression(initDepth,"E");

        function recursiveExpression(depth,type){
            let validInferenceRules = inferenceRules.filter(rule => rule[0] === type);
            let chosenRule = getRandomArrayElement(validInferenceRules);

            if(depth === 1) {
                chosenRule = 'E=>I';
            }

            if(chosenRule === 'I'){
                let value = getRndInteger(1,10);
                return {nodeString: value.toString(), value: value};

            } else if(chosenRule === 'E=>I'){
                let leafNode = recursiveExpression(depth-1, "I");
                return {nodeString: leafNode.nodeString, value: leafNode.value}

            } else if(chosenRule === 'E=>MxM'){
                let leftNode = recursiveExpression(depth-1,"M");
                let rightNode = recursiveExpression(depth-1,"M");
                return {nodeString: leftNode.nodeString +" x " + rightNode.nodeString , value: leftNode.value * rightNode.value}

            } else if(chosenRule === 'E=>E+E'){
                let leftNode = recursiveExpression(depth-1, "E");
                let rightNode = recursiveExpression(depth-1, "E");
                return {nodeString: leftNode.nodeString +" + " + rightNode.nodeString, value: leftNode.value + rightNode.value}

            }else if(chosenRule === 'E=>E-E'){
                let leftNode = recursiveExpression(depth-1, "E");
                let rightNode = recursiveExpression(depth-1, "E");
                return {nodeString: leftNode.nodeString +" - " + rightNode.nodeString, value: leftNode.value - rightNode.value}

            } else if(chosenRule === 'M=>I'){
                let leafNode = recursiveExpression(depth-1, "I");
                return {nodeString: leafNode.nodeString, value: leafNode.value}

            }else if(chosenRule === 'M=>MxM'){
                let leftNode = recursiveExpression(depth-1, "M");
                let rightNode = recursiveExpression(depth-1, "M");
                return {nodeString: leftNode.nodeString +" x " + rightNode.nodeString, value: leftNode.value * rightNode.value}

            }else if(chosenRule === 'M=>(E+E)'){
                let leftNode = recursiveExpression(depth-1,"E");
                let rightNode = recursiveExpression(depth-1,"E");
                return {nodeString: " ( " + leftNode.nodeString +" + " + rightNode.nodeString +" ) ", value: leftNode.value + rightNode.value}
            }
        }

    }
</script>