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

                    //easy
                    if(difficulty === 'Easy'){
                        let firstNum = getRndInteger(0,10);
                        let secondNum = getRndInteger(0,10);
                        let questionString = firstNum + " + " + secondNum + " = ?";
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Solve: </span> <span>"+ questionString +"</span>",
                            correctAnswer: firstNum + secondNum,
                            incorrectAnswers: []
                        }

                    //medium
                    } else if(difficulty === "Medium"){
                        let firstNum = getRndInteger(0,100);
                        let secondNum = getRndInteger(0,100);
                        let questionString = firstNum + " + " + secondNum + " = ?";
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Solve: </span> <span>"+ questionString +"</span>",
                            correctAnswer: firstNum + secondNum,
                            incorrectAnswers: []
                        }

                    //hard
                    } else {
                        let firstNum = getRndInteger(0,1000);
                        let secondNum = getRndInteger(0,1000);
                        let questionString = firstNum + " + " + secondNum + " = ?";
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Solve: </span> <span>"+ questionString +"</span>",
                            correctAnswer: firstNum + secondNum,
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