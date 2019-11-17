<template>
    <Quiz :generateQuestion="generateQuestion" :subTopicData="generateDataObject()"/>
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
                        let firstNum = getRndInteger(0,10);
                        let secondNum = getRndInteger(0,10);
                        questionData= {
                            question: firstNum + " + " + secondNum + " = ?",
                            correctAnswer: (firstNum + secondNum).toString(),
                            incorrectAnswers: []
                        }
                    } else if(difficulty === "Medium"){
                        let firstNum = getRndInteger(0,100);
                        let secondNum = getRndInteger(0,100);
                        questionData= {
                            question: firstNum + " + " + secondNum + " = ?",
                            correctAnswer: (firstNum + secondNum).toString(),
                            incorrectAnswers: []
                        }
                    } else {
                        let firstNum = getRndInteger(0,1000);
                        let secondNum = getRndInteger(0,1000);
                        questionData= {
                            question: firstNum + " + " + secondNum + " = ?",
                            correctAnswer: (firstNum + secondNum).toString(),
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
                let subTopicData = topicData.subTopics.find(x => x.name === 'Addition');
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

<style scoped>

</style>