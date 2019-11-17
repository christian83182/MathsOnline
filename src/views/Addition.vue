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
                    let rand = Math.round(Math.random() * 10);
                    return {
                        question: "5 + " + rand + " = ?",
                        correctAnswer: (rand + 5).toString(),
                        incorrectAnswers: ["1", "9", "3"]
                    }
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
</script>

<style scoped>

</style>