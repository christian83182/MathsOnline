<template>
    <Quiz :generateQuestion="generateQuestion"/>
</template>

<script>
    import Quiz from "@/components/Quiz";
    export default {
        name: "Addition",
        components: {Quiz},
        data(){
            return{
                generateQuestion(){
                    return{
                        question:"2+2=?",
                        correctAnswer:"4",
                        incorrectAnswers:["1","9","3"]
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>