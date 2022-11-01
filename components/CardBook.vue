<!-- Please remove this file from your project -->
<template>
  <v-card color="#C8D9BF" width="380px">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-tooltip bottom color="#FEDCBA">
          <template v-slot:activator="{ on, attrs }">
            <v-card-title v-bind="attrs" v-on="on" class="pb-0 mb-3"
              ><div class="text-truncate" style="max-width: 190px">
                {{ title }}
              </div></v-card-title
            >
          </template>
          <span style="color: #000000">{{ title }}</span>
        </v-tooltip>

        <v-card-subtitle
          v-for="(prop, index) in propsCard"
          :key="index"
          class="py-0"
          ><span class="font-weight-black">{{ prop.key }}: </span>
          {{ prop.value !== "-" ? prop.value : "anónimo" }}</v-card-subtitle
        >

        <v-card-actions>
          <v-btn
            class="ml-2 mt-5"
            rounded
            color="#ECDBBC"
            link
            :href="url"
            target="_blank"
          >
            Leer
          </v-btn>
        </v-card-actions>
      </div>

      <v-avatar class="ma-3" size="125" tile>
        <a :href="url" target="_blank">
          <v-img :src="cover"></v-img>
        </a>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "CardBook",
  props: {
    title: String,
    cover: String,
    category: String,
    author: String,
    url: String,
    createAt: String,
  },
  data() {
    return {
      propsCard: [
        {
          key: "Autor",
          value: this.author,
        },
        {
          key: "Catergoria",
          value: this.category,
        },
        {
          key: "Publicacion",
          value: this.createAt,
        },
      ],
    };
  },
  methods: {},
};
</script>
