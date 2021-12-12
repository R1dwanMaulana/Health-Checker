<template>
  <v-row justify="center" align="center" class="mx-1">
    <v-col cols="12" sm="8" md="6">
      <h3 class="mb-8 text-center">Cek Jenis Penyakit Anemia</h3>
      <form-checklist />
    </v-col>
  </v-row>
</template>

<script>
import FormChecklist from "~/components/FormChecklist";
export default {
  components: {
    FormChecklist,
  },
  head: {
    title:
      "Identifikasi - Health Check | Aplikasi Identifikasi Penyakit Anemia",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Menu Identifikasi ini digunakan untuk memilih gejala yang sedang dialami",
      },
      // { property: "og:image", content: "/icon.png" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "description",
        content: "Aplikasi identifikasi penyakit anemia",
      },
      {
        property: "og:title",
        content:
          "Identifikasi - Health Check | Aplikasi Identifikasi Penyakit Anemia",
      },
      {
        property: "og:description",
        content:
          "Menu Identifikasi ini digunakan untuk memilih gejala yang sedang dialami",
      },
    ],
  },
};
</script>
