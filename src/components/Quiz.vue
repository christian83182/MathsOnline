<template>
    <v-container class="fill-height justify-center" fluid>
        <v-card max-width="1000" class="flex-grow-1">
            <v-stepper v-model="stepperCount" class="flex-grow-1 elevation-24">
                <v-toolbar :color="subTopicData.topicColor" dense>
                    <v-toolbar-title>
                        <span class="font-weight-regular text-uppercase">{{ subTopicData.topicName }} </span>
                        <span class="font-weight-light">| {{ subTopicData.subTopicName }}</span>
                    </v-toolbar-title>
                </v-toolbar>
                <v-stepper-header class="d-none d-md-flex">
                    <v-stepper-step :complete="stepperCount > 1" step="1" :color="subTopicData.topicColor">Configure</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="stepperCount > 2" step="2" :color="subTopicData.topicColor">Answer Questions</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="stepperCount > 3" step="3" :color="subTopicData.topicColor">Display Results</v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                    <v-stepper-content step="1">
                        <v-form v-model="isNotValid" ref="form">
                            <v-text-field class="mt-1" type="number" label="Select number of questions..." outlined
                                          v-model="numOfQuestions" :rules="nameRules" clearable></v-text-field>
                            <v-select :items="difficultyOptions" label="Select a difficulty..." outlined
                                      v-model="difficulty" :rules="difficultyRules"></v-select >
                        </v-form>
                        <v-row>
                            <v-col>
                                <v-btn block to="/">Home</v-btn>
                            </v-col>
                            <v-col>
                                <v-btn block :color="subTopicData.topicColor" :disabled="!isNotValid" @click="beginQuiz()">Start</v-btn>
                            </v-col>
                        </v-row>
                        <br/>
                    </v-stepper-content>



                    <v-stepper-content step="2" class="pa-2  pt-5 pt-md-0">
                        <div v-if="currentQuestionData !== null">
                            <v-progress-linear :value="(currentQuestionNumber/numOfQuestions)*100" :color="subTopicData.topicColor" height="25" rounded>
                                <template v-slot="{ value }"><strong>Question {{ currentQuestionNumber }} / {{ numOfQuestions }}</strong></template>
                            </v-progress-linear>

                            <v-container>
                                <div class="d-none d-md-block display-1 text-center my-12 px-6" v-html="currentQuestionData.question"></div>
                                <div class="d-sm-block d-md-none headline text-center my-12 px-6" v-html="currentQuestionData.question"></div>
                                <v-text-field class="mb-2" v-model="currentQuestionAnswer" type="number" label="Enter your answer..."
                                              @keyup.enter.native="() => {if(currentQuestionAnswer !== '') nextQuestion()}"
                                              outlined hide-details clearable autofocus></v-text-field>
                                <v-row>
                                    <v-col>
                                        <v-btn block @click="restartQuiz()">Restart</v-btn>
                                    </v-col>
                                    <v-col>
                                        <v-btn block :disabled="currentQuestionAnswer === ''" @click="nextQuestion">Next Question</v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                    </v-stepper-content>

                    <v-stepper-content step="3" class="pa-4">
                        <v-container class="pa-0">
                            <div class="d-block text-center display-2 font-weight-light mt-12 mx-2">Result: {{Math.round((findCorrectAnswers()/numOfQuestions)*100)}}%</div>
                            <div class="d-block text-center title font-weight-light mb-12 mx-2">You answered {{findCorrectAnswers()}} of {{numOfQuestions}} questions correctly</div>
                            <v-simple-table class="my-4" dense>
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                            <th class="text-left">Question</th>
                                            <th class="text-center">Your Answer</th>
                                            <th class="text-center">Correct Answer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(questionData, index) in results" :key="index"
                                            :class="questionData.userAnswer === questionData.correctAnswer? 'default' : 'error white--text'">
                                            <td class="text-left">{{ questionData.questionNum }}) {{ questionData.questionText}}</td>
                                            <td class="text-center">{{ questionData.userAnswer }}</td>
                                            <td class="text-center">{{ questionData.correctAnswer }}</td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                            <v-row>
                                <v-col>
                                    <v-btn block :color="subTopicData.topicColor" :disabled="!isNotValid" @click="restartQuiz()">Restart</v-btn>
                                </v-col>
                                <v-col>
                                    <v-btn block  to="/">Home</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-stepper-content>

                </v-stepper-items>
            </v-stepper>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "Quiz",
        props:{
            generateQuestion: Function,
            difficultyOptions: Array,
            subTopicData: Object
        },
        data(){
            return{
                stepperCount: 1,
                isNotValid: null,
                nameRules: [v => !!v || 'This field cannot be left blank', v => (v && v > 0) || 'Number cannot be negative', v => (v && v < 101) || 'Cannot select over 100 questions'],
                difficultyRules: [v => !!v || 'This field cannot be left blank'],

                numOfQuestions: null,
                difficulty: null,
                currentQuestionData: null,
                currentQuestionNumber: 0,
                currentQuestionAnswer: '',

                results:[]
            }
        },
        methods:{
            beginQuiz(){
                this.stepperCount++;
                this.nextQuestion();
            },
            nextQuestion(){
                if(this.currentQuestionNumber > 0){
                    this.results.push({
                        questionNum: this.currentQuestionNumber,
                        questionText: this.currentQuestionData.question,
                        userAnswer: Number(this.currentQuestionAnswer),
                        correctAnswer: this.currentQuestionData.correctAnswer
                    });
                }

                if(this.currentQuestionNumber.toString() === this.numOfQuestions){
                    this.stepperCount++;
                    this.findCorrectAnswers();
                } else {
                    this.currentQuestionAnswer = "";
                    this.currentQuestionNumber++;
                    this.currentQuestionData = this.generateQuestion(this.difficulty);
                }
            },
            findCorrectAnswers(){
                return this.results.filter(questionData => questionData.userAnswer === questionData.correctAnswer).length;
            },
            restartQuiz(){
                this.stepperCount = 1;
                this.numOfQuestions = null;
                this.difficulty = null;
                this.$refs.form.resetValidation();
                this.currentQuestionNumber = 0;
                this.currentQuestionAnswer = '';
                this.results = [];
            }
        }
    }
</script>