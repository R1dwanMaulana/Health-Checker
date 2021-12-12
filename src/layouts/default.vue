<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-item nuxt to="/home">
          <!-- <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action> -->
          <v-list-item-content>
            <v-list-item-title>Beranda</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt to="/menu">
          <!-- <v-list-item-action>
            <v-icon>mdi-airballoon</v-icon>
          </v-list-item-action> -->
          <v-list-item-content>
            <v-list-item-title>Identifikasi</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="pink lighten-3" dark fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title><strong>Health Check </strong></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" width="500" scrollable>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
        </template>
        <v-card class="rounded-lg">
          <v-card-title class="text-h6 blue-grey darken-2 white--text">
            Frequently Asked Questions
          </v-card-title>

          <v-card-text class="mt-4">
            <h3>Apa itu Health Check?</h3>
            <p>
              Health check adalah sebuah aplikasi yang mampu mengidentifikasi
              jenis penyakit anemia. Sistem tersebut sudah tertanam teknologi
              expert system dengan sumber data dari platform AloDokter.
            </p>
            <h3>Apa itu Expert System?</h3>
            <p>
              Expert System adalah sistem informasi yang berisi pengetahuan
              seorang pakar sehingga dapat digunakan untuk konsultasi.
              Pengetahuan seorang pakar yang dimiliki oleh Sistem Pakar ini
              digunakan sebagi dasar untuk menjawab pertanyaan.
            </p>
            <h3>Metode apa yang digunakan?</h3>
            <p>Pada sistem tersebut menggunakan metode forward chaining.</p>
            <h3>Apa itu metode Forward Chaining?</h3>
            <p>
              Forward chaining adalah pelacakan ke depan yang memulai dari
              sekumpulan fakta-fakta dengan mencari kaidah yang cocok dengan
              dugaan/hipotesa yang ada menuju kesimpulan.
            </p>
            <h3>
              Bagaimana mengidentifikasi penyakit dengan metode forward
              chaining?
            </h3>
            <p>
              Aturan (Rule) di mana menentukan objek, membentuk path (lintasan)
              yang mengarah ke objek. Oleh karena itu, hanya satu cara untuk
              mencapai satu objek adalah memenuhi semua aturan.
            </p>
            <h3>Bagaimana menggunakan aplikasi Health Check?</h3>
            <p>
              Pengguna terlebih dahulu akan masuk dihalaman home yang berisi
              pengenalan aplikasi. Selanjutnya pengguna mengklik tombol coba
              sekarang, maka langsung diarahkan ke halaman menu identifikasi,
              lalu pengguna bisa memilih gejala yang sedang dialami. Jika semua
              sudah, maka langkah terakhir klik tombol cek. Sistem akan
              memproses data tersebut dan mencari jenis penyakit dan pengobatan
              yang cocok. Setelah sistem selesai memproses, maka tampilan jenis
              dan pengobatan akan tampil dibagian bawah halaman.
            </p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              Ok lanjut
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>
    <v-main>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
    <v-footer color="pink lighten-3" app>
      <span class="white--text"
        >All right reserved | &copy; {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      dialog: false,
    };
  },
};
</script>
