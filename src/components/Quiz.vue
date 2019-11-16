<template>
    <v-container class="fill-height justify-center">
        <v-responsive max-width="800" class="elevation-24">
            <v-stepper v-model="stepperCount">
                <v-stepper-header>
                    <v-stepper-step :complete="stepperCount > 1" step="1">Configure Practice</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="stepperCount > 2" step="2">Answer Questions</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="stepperCount > 3" step="3">Display Results</v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                    <v-stepper-content step="1">
                        <v-form v-model="isNotValid">
                            <v-text-field class="mt-1" type="number" label="Select number of questions..." outlined
                                    v-model="numOfQuestions" :rules="nameRules"></v-text-field>
                            <v-select :items="['Easy','Medium','Hard']" label="Select a difficulty..." outlined
                                      v-model="difficulty" :rules="difficultyRules"></v-select >
                        </v-form>
                        <v-row>
                            <v-col>
                                <v-btn block color="error" to="/">Home</v-btn>
                            </v-col>
                            <v-col>
                                <v-btn block color="success" :disabled="!isNotValid" @click="stepperCount++">Start</v-btn>
                            </v-col>
                        </v-row>
                    </v-stepper-content>



                    <v-stepper-content step="2">
                    </v-stepper-content>



                    <v-stepper-content step="3">
                    </v-stepper-content>

                </v-stepper-items>
            </v-stepper>
        </v-responsive>
    </v-container>
</template>

<script>
    export default {
        name: "Quiz",
        props:{
            generateQuestion: Function
        },
        data(){
            return{
                stepperCount: 1,
                numOfQuestions: null,
                difficulty: null,
                isNotValid: null,
                nameRules: [
                    v => !!v || 'This field cannot be left blank',
                    v => (v && v > 0) || 'Number cannot be negative',
                    v => (v && v < 101) || 'Cannot select over 100 questions'
                ],
                difficultyRules: [
                    v => !!v || 'This field cannot be left blank'
                ],
            }
        }
    }
</script>