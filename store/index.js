import "@nuxtjs/axios"

export const state = () => ({
  book: {},
  books: [],
  booksFiltered: [],
  loadingRemoveFilter: false
});

export const getters = {
  getCounter(state) {
    return state.counter;
  },
  getBooks(state) {
    return state.books;
  },
};

export const mutations = {
  setBooks(state, payload) {
    state.books = payload
    state.booksFiltered = state.books
  },
  setFilteredBooks(state, payload) {
    state.booksFiltered = state.books
    state.booksFiltered =  state.booksFiltered.filter(item => item.createAt === payload)
    console.log(state.booksFiltered);
  },
  removeFilter(state) {
    state.loadingRemoveFilter = true
    state.booksFiltered = state.books
    state.loadingRemoveFilter = false
  }
};

export const actions = {
  async getBooks({commit}) {
    const res = await this.$axios.$get('http://localhost:3000/books')
    const books = await res.data;
    console.log(books);
    commit("setBooks", books)
  },
  filterBooks({commit}, date) {
    commit("setFilteredBooks", date)
  },
  removeFilter({commit}) {
    commit("removeFilter")
  },
};
