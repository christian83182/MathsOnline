<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="8">
        <v-card class="mx-auto pa-0" max-width="500">

          <v-toolbar class="blue">
            <v-toolbar-title class="display-1 mx-auto" > Topics</v-toolbar-title>
          </v-toolbar>

          <div class="pa-4">
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header class="title">
                  Basic Arithmetic
                  <template v-slot:actions>
                    <v-icon color="primary">$expand</v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>

                  <v-list dense>
                    <v-list-item-group>
                      <v-list-item>Addition</v-list-item>
                      <v-list-item>Subtraction</v-list-item>
                      <v-list-item>Multiplication</v-list-item>
                      <v-list-item>Division</v-list-item>
                    </v-list-item-group>
                  </v-list>

                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "home",
};
</script>
