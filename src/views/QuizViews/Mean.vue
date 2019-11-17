<template>
    <Quiz :generateQuestion="generateQuestion"
          :difficultyOptions="['Easy','Medium','Hard']"
          :subTopicData="generateDataObject()"/>
</template>

<script>
    import Quiz from "@/components/Quiz";
    export default {
        name: "Mean",
        components: {Quiz},
        data: function () {
            return {
                generateQuestion: function (difficulty) {
                    let questionData = null;

                    //easy
                    if(difficulty === 'Easy'){
                        let firstNum = getRndInteger(1,10);
                        let secondNum = getRndInteger(1,10);
                        let thirdNum = getRndInteger(1,10);
                        let questionString = firstNum*3 +", " + secondNum*3 +", " + thirdNum*3;
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Find the Mean of: </span> <span class='font-weight-regular'>"+ questionString +"</span>",
                            correctAnswer: firstNum+secondNum+thirdNum,
                            incorrectAnswers: []
                        }

                    //medium
                    } else if(difficulty === "Medium"){
                        let firstNum = getRndInteger(1,20);
                        let secondNum = getRndInteger(1,20);
                        let thirdNum = getRndInteger(1,20);
                        let fourthNum = getRndInteger(1,20);
                        let offset = getRndInteger(1,100);
                        let questionString = ((firstNum*4)+offset) +", " + ((secondNum*4)+offset) +", " + ((thirdNum*4)+offset) + ", " + ((fourthNum*4)+offset);
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Find the Mean of: </span> <span>"+ questionString +"</span>",
                            correctAnswer: firstNum + secondNum + thirdNum + fourthNum + offset,
                            incorrectAnswers: []
                        }

                    //hard
                    } else {
                        let multiplier = 10;
                        let firstNum = (getRndInteger(10,100)/multiplier);
                        let secondNum = (getRndInteger(10,100)/multiplier);
                        let thirdNum = (getRndInteger(10,100)/multiplier);
                        let fourthNum = (getRndInteger(10,100)/multiplier);
                        let fifthNum = (getRndInteger(10,100)/multiplier);
                        let offset = (getRndInteger(0,1000)/multiplier);
                        let questionString = ((firstNum*5)+offset) +", " + ((secondNum*5)+offset) +", " + ((thirdNum*5)+offset) + ", " + ((fourthNum*5)+offset) +", " + ((fifthNum*5)+offset);
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Find the Mean of: </span> <span>"+ questionString +"</span>",
                            correctAnswer: Number((firstNum + secondNum + thirdNum + fourthNum + fifthNum + offset).toPrecision(6)),
                            incorrectAnswers: []
                        }
                    }

                    return questionData;
                },
            }
        },
        methods:{
            generateDataObject(){
                let topicData = this.$store.state.topics.find(x => x.name === 'Statistics');
                let subTopicData = topicData.subTopics.find(x => x.name === 'Mean');
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