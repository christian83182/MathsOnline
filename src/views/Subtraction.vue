<template>
    <Quiz :generateQuestion="generateQuestion" :subTopicData="generateDataObject()"/>
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

                    //easy
                    if(difficulty === 'Easy'){
                        let firstNum = getRndInteger(10,20);
                        let secondNum = getRndInteger(0,10);
                        questionData= {
                            question: firstNum + " - " + secondNum + " = ?",
                            correctAnswer: (firstNum - secondNum).toString(),
                            incorrectAnswers: []
                        }

                    //medium
                    } else if(difficulty === "Medium"){
                        let firstNum = getRndInteger(50,100);
                        let secondNum = getRndInteger(0,50);
                        questionData= {
                            question: firstNum + " - " + secondNum + " = ?",
                            correctAnswer: (firstNum - secondNum).toString(),
                            incorrectAnswers: []
                        }

                    //hard
                    } else {
                        let firstNum = getRndInteger(0,1000);
                        let secondNum = getRndInteger(0,1000);
                        questionData= {
                            question: firstNum + " - " + secondNum + " = ?",
                            correctAnswer: (firstNum - secondNum).toString(),
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
                let subTopicData = topicData.subTopics.find(x => x.name === 'Subtraction');
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