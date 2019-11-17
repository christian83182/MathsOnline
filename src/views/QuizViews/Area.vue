<template>
    <Quiz :generateQuestion="generateQuestion"
          :difficultyOptions="['Easy']"
          :subTopicData="generateDataObject()"/>
</template>

<script>
    import Quiz from "@/components/Quiz";
    export default {
        name: "Area",
        components: {Quiz},
        data: function () {
            return {
                generateQuestion: function (difficulty) {
                    let questionData = null;

                    //easy
                    if(difficulty === 'Easy') {
                        let firstNum = getRndInteger(1, 10);
                        let secondNum = getRndInteger(1, 10);

                        questionData = {

                            question: "Calculate the area of Rectangle with sides of length "+ firstNum + "cm and " + secondNum +"cm",
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
                let topicData = this.$store.state.topics.find(x => x.name === 'Miscellaneous Arithmetic');
                let subTopicData = topicData.subTopics.find(x => x.name === 'Area');
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