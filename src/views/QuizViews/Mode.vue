<template>
    <Quiz :generateQuestion="generateQuestion"
          :difficultyOptions="['Easy','Medium','Hard']"
          :subTopicData="generateDataObject()"/>
</template>

<script>
    import Quiz from "@/components/Quiz";
    export default {
        name: "Mode",
        components: {Quiz},
        data: function () {
            return {
                generateQuestion: function (difficulty) {
                    let questionData = null;

                    //easy
                    if(difficulty === 'Easy'){
                        let firstNum = getRndInteger(10,20);
                        let secondNum = getRndInteger(1,4);
                        let thirdNum = getRndInteger(10,20);
                        let numArray = [firstNum, firstNum*secondNum, thirdNum, thirdNum, thirdNum];
                        numArray.sort(() => Math.random()-0.5);

                        questionData= {
                            question: "Find the mode of: " + numArray[0] +", " + numArray[1] +", " + numArray[2]+", " + numArray[3]+", " + numArray[4],
                            correctAnswer: thirdNum,
                            incorrectAnswers: []
                        }

                    //medium
                    } else if(difficulty === "Medium"){
                        let firstNum = getRndInteger(10,50);
                        let secondNum = getRndInteger(15,60);
                        let thirdNum = getRndInteger(15,60);
                        let fourthNum = getRndInteger(15,60);
                        let numArray = [firstNum, secondNum, secondNum ,thirdNum, fourthNum, fourthNum, fourthNum, fourthNum, fourthNum];
                        numArray.sort(() => Math.random()-0.5);

                        let questionString = "";
                        for(let i in numArray){
                            questionString += numArray[i] + ", "
                        }

                        questionData= {
                            question: "Find the mode of: " + numArray[0] +", " + numArray[1] +", " + numArray[2]+", " + numArray[3]
                                +", " + numArray[4]+", " + numArray[5]+", " + numArray[6]+", " + numArray[7]+", " + numArray[8],
                            correctAnswer: fourthNum,
                            incorrectAnswers: []
                        }

                    //hard
                    } else {
                        let multiplier =10;
                        let firstNum = getRndInteger(100,500)/multiplier;
                        let secondNum = getRndInteger(150,600)/multiplier;
                        let thirdNum = getRndInteger(150,600)/multiplier;
                        let fourthNum = getRndInteger(150,600)/multiplier;
                        let numArray = [firstNum, secondNum, secondNum ,thirdNum, fourthNum, fourthNum, fourthNum, fourthNum, fourthNum];
                        numArray.sort(() => Math.random()-0.5);

                        let questionString = "";
                        for(let i in numArray){
                            questionString += numArray[i] + ", "
                        }

                        questionData= {
                            question: "Find the mode of: " + numArray[0] +", " + numArray[1] +", " + numArray[2]+", " + numArray[3]
                                +", " + numArray[4]+", " + numArray[5]+", " + numArray[6]+", " + numArray[7]+", " + numArray[8],
                            correctAnswer: fourthNum,
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
                let subTopicData = topicData.subTopics.find(x => x.name === 'Mode');
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