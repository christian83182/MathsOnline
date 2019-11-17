<template>
    <Quiz :generateQuestion="generateQuestion"
          :difficultyOptions="['Easy','Medium','Hard']"
          :subTopicData="generateDataObject()"/>
</template>

<script>
    import Quiz from "@/components/Quiz";
    export default {
        name: "Median",
        components: {Quiz},
        data: function () {
            return {
                generateQuestion: function (difficulty) {
                    let questionData = null;

                    //easy
                    if(difficulty === 'Easy'){
                        let numArray = [getRndInteger(1,20),getRndInteger(1,20),getRndInteger(1,20),getRndInteger(1,20),getRndInteger(1,20)];
                        let sorted = numArray.slice(0);
                        sorted.sort((x,y) => x-y);
                        let questionString = numArray[0] +", " + numArray[1] +", " + numArray[2]+", " + numArray[3]+", " + numArray[4];
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Find the median of: </span> <span>"+ questionString +"</span>",
                            correctAnswer: sorted[2],
                            incorrectAnswers: []
                        }

                    //medium
                    } else if(difficulty === "Medium"){
                        let numArray = [getRndInteger(1,50),getRndInteger(1,50),getRndInteger(1,50),getRndInteger(1,50),getRndInteger(1,50),getRndInteger(1,50)];
                        let sorted = numArray.slice(0);
                        sorted.sort((x,y) => x-y);
                        let questionString = numArray[0] +", " + numArray[1] +", " + numArray[2]+", " + numArray[3]+", " + numArray[4]+", " + numArray[5];
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Find the median of: </span> <span>"+ questionString +"</span>",
                            correctAnswer: (sorted[2] + sorted[3])/2,
                            incorrectAnswers: []
                        }

                    //hard
                    } else {
                        let multiplier = 10;
                        let numArray = [getRndInteger(10,500)/multiplier,getRndInteger(10,500)/multiplier,getRndInteger(10,500)/multiplier
                            ,getRndInteger(10,500)/multiplier,getRndInteger(10,500)/multiplier,getRndInteger(10,500)/multiplier];
                        let sorted = numArray.slice(0);
                        sorted.sort((x,y) => x-y);
                        let questionString = numArray[0] +", " + numArray[1] +", " + numArray[2]+", " + numArray[3]+", " + numArray[4]+", " + numArray[5];
                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Find the median of: </span> <span>"+ questionString +"</span>",
                            correctAnswer: (sorted[2] + sorted[3])/2,
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
                let subTopicData = topicData.subTopics.find(x => x.name === 'Median');
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