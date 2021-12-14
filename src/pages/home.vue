<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <img src="/header.jpg" alt="" width="350" />
      <br />
      <div class="mx-2">
        <h2 class="mt-10">Health Check</h2>
        <p class="text-justify">
          Health check adalah sebuah aplikasi berbasis web app dengan teknologi
          <strong>Expert System</strong> yang merupakan bagian dari
          <strong>AI</strong> untuk mengidentifikasi penyakit anemia. Aplikasi
          ini dapat membantu Anda untuk mencari tahu jenis dan pengobatan untuk
          penyakit anemia.
        </p>
        <br />
        <nuxt-link to="/menu" class="text-decoration-none">
          <v-btn
            depressed
            color="pink lighten-2"
            class="white--text rounded-lg pr-1 pl-2 text-subtitle-2 text-caption font-weight-medium"
            elevation="10"
          >
            Cek sekarang
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </nuxt-link>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {};
  },
  head: {
    title: "Health Check | Aplikasi Identifikasi Penyakit Anemia",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Aplikasi identikasi penyakit anemia",
      },
      { property: "og:image", content: "/bot1.png" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "description",
        content: "Aplikasi identifikasi penyakit anemia",
      },
      {
        property: "og:title",
        content: "Health Check | Aplikasi Identifikasi Penyakit Anemia",
      },
      {
        property: "og:description",
        content: "Aplikasi identifikasi penyakit anemia",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Health Check" },
      { property: "og:url", content: "https://health-check.vercel.app/" },
    ],
  },
};
</script>
