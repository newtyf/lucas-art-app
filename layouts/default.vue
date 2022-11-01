<template>
  <v-app dark>
    <v-app-bar :clipped-right="clipped" fixed app>
      <v-toolbar-title class="ml-3 font-weight-black text-h4">{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :fixed="fixed"
      right
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      drawer: false,
      clipped: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Bienvenido",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Mis Colecciones",
          to: "/collection",
        },
      ],
      miniVariant: false,
      title: "Lucas Art",
    };
  },
};
</script>
