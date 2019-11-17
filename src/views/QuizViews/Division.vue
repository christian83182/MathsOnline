<template>
    <Quiz :generateQuestion="generateQuestion"
          :difficultyOptions="['Easy','Medium','Hard']"
          :subTopicData="generateDataObject()"/>
</template>

<script>
    import Quiz from "@/components/Quiz";
    export default {
        name: "Subtraction",
        components: {Quiz},
        data: function () {
            return {
                generateQuestion: function (difficulty) {
                    let questionData = null;

                    if(difficulty === 'Easy'){
                        let firstNum = getRndInteger(0,5);
                        let secondNum = getRndInteger(1,5);
                        let questionString =firstNum*secondNum + " ÷ " + secondNum + " = ?";
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Solve: </span> <span>"+ questionString +"</span>",
                            correctAnswer: firstNum,
                            incorrectAnswers: []
                        }

                    } else if(difficulty === "Medium"){
                        let firstNum = getRndInteger(0,12);
                        let secondNum = getRndInteger(1,12);
                        let questionString =firstNum*secondNum + " ÷ " + secondNum + " = ?";
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Solve: </span> <span>"+ questionString +"</span>",
                            correctAnswer: firstNum,
                            incorrectAnswers: []
                        }

                    } else {
                        let firstNum = getRndInteger(-24,24);
                        let secondNum = getRndInteger(1,24);
                        let questionString =firstNum*secondNum + " ÷ " + secondNum + " = ?";
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Solve: </span> <span>"+ questionString +"</span>",
                            correctAnswer: firstNum,
                            incorrectAnswers: []
                        }
                    }

                    return questionData;
                },
            }
        },
        methods:{
            generateDataObject(){
                let topicData = this.$store.state.topics.find(x => x.name === 'Basic Arithmetic');
                let subTopicData = topicData.subTopics.find(x => x.name === 'Division');
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
</script>