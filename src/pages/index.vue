<script>
export default {
  middleware({ store, redirect }) {
    return redirect("/home");
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
