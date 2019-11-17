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

                    if(difficulty === 'Easy'){
                        let numArray = [];
                        for(let i = 0; i < 5; i++){
                            numArray.push(getRndInteger(10,30));
                        }

                        let questionString = "";
                        for(let i = 0; i < numArray.length; i++){
                            questionString += numArray[i] + ", ";
                        }

                        let sorted = numArray.splice(0);
                        sorted.sort((x,y) => y-x);

                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Solve: </span> <span>"+ questionString +"</span>",
                            correctAnswer: sorted[0] - sorted[sorted.length-1],
                            incorrectAnswers: []
                        }

                    } else if(difficulty === "Medium"){
                        let numArray = [];
                        for(let i = 0; i < 5; i++){
                            numArray.push(getRndInteger(1,100));
                        }

                        let questionString = "";
                        for(let i = 0; i < numArray.length; i++){
                            questionString += numArray[i] + ", ";
                        }

                        let sorted = numArray.splice(0);
                        sorted.sort((x,y) => y-x);

                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Solve: </span> <span>"+ questionString +"</span>",
                            correctAnswer: sorted[0] - sorted[sorted.length-1],
                            incorrectAnswers: []
                        }

                    } else {
                        let numArray = [];
                        for(let i = 0; i < 5; i++){
                            numArray.push(getRndInteger(-100,100));
                        }

                        let questionString = "";
                        for(let i = 0; i < numArray.length; i++){
                            questionString += numArray[i] + ", ";
                        }

                        let sorted = numArray.splice(0);
                        sorted.sort((x,y) => y-x);

                        questionData= {
                            question: "<span class='font-weight-thin mr-4'>Solve: </span> <span>"+ questionString +"</span>",
                            correctAnswer: sorted[0] - sorted[sorted.length-1],
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
                let subTopicData = topicData.subTopics.find(x => x.name === 'Range');
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