<template>
  <div>
    <v-row justify="center" align="center" class="mt-5">
      <v-btn @click="openFilter">Filtrar por fecha</v-btn>
    </v-row>
    <v-row justify="center" align="center" class="mt-5" v-if="fileterd">
      <p>
        Filtros aplicados:
        <v-btn
          class="ma-2"
          :loading="loadingRemoveFilter"
          :disabled="loadingRemoveFilter"
          color="error"
          @click="remove"
        >
          <v-icon left> mdi-close </v-icon>
          {{ picker }}
        </v-btn>
      </p>
    </v-row>
    <v-overlay :value="overlay">
      <v-row justify="center">
        <v-date-picker v-model="picker"></v-date-picker>
      </v-row>
      <v-row justify="center">
        <v-btn class="mt-2" @click="filter"> Filtrar </v-btn>
      </v-row>
      <v-row justify="center">
        <v-btn class="mt-2" @click="cancelFilter" small color="error">
          Cancelar
        </v-btn>
      </v-row>
    </v-overlay>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "FilterDateComponent",
  data() {
    return {
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      overlay: false,
      fileterd: false,
    };
  },
  computed: {
    ...mapState(["loadingRemoveFilter"])
  },
  methods: {
    ...mapActions(["filterBooks", "removeFilter"]),
    openFilter() {
      this.overlay = true;
    },
    filter() {
      this.overlay = false;
      this.filterBooks(this.picker);
      this.fileterd = true;
    },
    cancelFilter() {
      this.overlay = false;
    },
    remove() {
      this.removeFilter();
      this.fileterd = false;
    },
  },
};
</script>

<style>
.slotDate {
  height: 30px;
}
</style>
