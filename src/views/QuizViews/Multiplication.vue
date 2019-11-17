<template>
    <Quiz :generateQuestion="generateQuestion"
          :difficultyOptions="['Easy','Medium','Hard','Expert']"
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
                        let firstNum = getRndInteger(0,10);
                        let secondNum = getRndInteger(0,10);
                        let questionString = firstNum + " x " + secondNum + " = ?";
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Solve: </span> <span>"+ questionString +"</span>",
                            correctAnswer: firstNum * secondNum,
                            incorrectAnswers: []
                        }

                    } else if(difficulty === "Medium"){
                        let firstNum = getRndInteger(-12,12);
                        let secondNum = getRndInteger(0,12);
                        let questionString = firstNum + " x " + secondNum + " = ?";
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Solve: </span> <span>"+ questionString +"</span>",
                            correctAnswer: firstNum * secondNum,
                            incorrectAnswers: []
                        }

                    } else if(difficulty === "Hard"){
                        let firstNum = getRndInteger(-50,50);
                        let secondNum = getRndInteger(0,50);
                        let questionString = firstNum + " x " + secondNum + " = ?";
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Solve: </span> <span>"+ questionString +"</span>",
                            correctAnswer: firstNum * secondNum,
                            incorrectAnswers: []
                        }

                    } else {
                        let firstNum = getRndInteger(-1000,1000);
                        let secondNum = getRndInteger(0,1000);
                        let questionString = firstNum + " x " + secondNum + " = ?";
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Solve: </span> <span>"+ questionString +"</span>",
                            correctAnswer: firstNum * secondNum,
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
                let subTopicData = topicData.subTopics.find(x => x.name === 'Multiplication');
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