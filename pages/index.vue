<template>
  <div>
    <filter-per-date />
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="10">
        <v-card v-if="booksFiltered.length > 0" class="logo py-4 d-flex justify-center flex-wrap">
          <card-book
            v-for="(book, index) in booksFiltered"
            :key="index"
            :title="book.title"
            :cover="book.cover"
            :category="book.category"
            :author="book.author"
            :url="book.url"
            :createAt="book.createAt"
            class="ma-2 pb-2"
          />
        </v-card>
        <v-card v-else class="logo py-4 d-flex justify-center flex-wrap">
          No se encontraron resultados para esa fecha
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardBook from "~/components/CardBook.vue";
import { mapActions, mapState } from "vuex";
import FilterPerDate from '~/components/FilterPerDate.vue';
export default {
  components: { CardBook, FilterPerDate },
  name: "IndexPage",
  computed: {
    ...mapState(["booksFiltered"]),
  },
  methods: {
    ...mapActions(["getBooks"]),
  },
  created() {
    this.getBooks();
  },
};
</script>
