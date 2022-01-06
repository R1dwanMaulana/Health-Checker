<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit">
          <div class="d-flex justify-space-between">
            <p class="mt-8">Lemas dan cepat lelah</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Lemas dan cepat lelah"
                rules="required"
              >
                <v-select
                  v-model="g1"
                  :items="g1s"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Sakit kepala dan pusing</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Sakit kepala dan pusing"
                rules="required"
              >
                <v-select
                  v-model="g2"
                  :items="g2s"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Sering mengantuk</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Sering mengantuk"
                rules="required"
              >
                <v-select
                  v-model="g3"
                  :items="g3s"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Kulit terlihat pucat dan kekuningan</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Kulit terlihat pucat dan kekuningan"
                rules="required"
              >
                <v-select
                  v-model="g4"
                  :items="g4s"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Detak jantung tidak teratur</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Detak jantung tidak teratur"
                rules="required"
              >
                <v-select
                  v-model="g5"
                  :items="g5s"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Nafas pendek</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Nafas pendek"
                rules="required"
              >
                <v-select
                  v-model="g6"
                  :items="g6s"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Nyeri dada</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Nyeri dada"
                rules="required"
              >
                <v-select
                  v-model="g7"
                  :items="g7s"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Dingin di tangan dan kaki</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Dingin di tangan dan kaki"
                rules="required"
              >
                <v-select
                  v-model="g8"
                  :items="g8s"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Mudah lebam atau memar</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Mudah lebam atau memar"
                rules="required"
              >
                <v-select
                  v-model="g9"
                  :items="g9s"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Luka sulit sembuh</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Luka sulit sembuh"
                rules="required"
              >
                <v-select
                  v-model="g10"
                  :items="g10s"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Mudah mengalami infeksi dan demam</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Mudah mengalami infeksi"
                rules="required"
              >
                <v-select
                  v-model="g11"
                  :items="g11s"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Demam</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Demam"
                rules="required"
              >
                <v-select
                  v-model="g12"
                  :items="g12s"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Bagian mata menguning</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Bagian mata menguning"
                rules="required"
              >
                <v-select
                  v-model="g13"
                  :items="g13s"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Perut tidak nyaman</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Perut tidak nyaman"
                rules="required"
              >
                <v-select
                  v-model="g14"
                  :items="g14s"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <v-btn
            class="mt-8 rounded-lg white--text"
            color="pink lighten-1"
            elevation="5"
            :loading="loading"
            :disabled="invalid"
            @click="modelPredict()"
          >
            Cek
          </v-btn>
          <p class="mt-6 grey lighten-3 black--text rounded-md px-3 py-2">
            Jenis penyakit Anda adalah {{ predict }} <br />
            Pengobatan : {{ treatment }}
          </p>
        </form>
      </validation-observer>
      <v-snackbar
        v-model="snackbar"
        color="primary"
        text
        :timeout="timeout"
        :disabled="invalid"
        elevation="24"
        >Sedang menganalisis data Anda, Mohon menunggu...</v-snackbar
      >
    </div>
  </div>
</template>

<script>
import {
  required,
  // eslint-disable-next-line camelcase
  max_value,
  // eslint-disable-next-line camelcase
  min_value,
  double,
} from "vee-validate/dist/rules";
import { extend, ValidationProvider, ValidationObserver } from "vee-validate";

extend("required", {
  ...required,
  message: "tidak boleh kosong",
});
extend("max_value", {
  // eslint-disable-next-line camelcase
  ...max_value,
  message: "{_field_} maksimal 6 meter",
});
extend("min_value", {
  // eslint-disable-next-line camelcase
  ...min_value,
  message: "{_field_} minimal 2 meter",
});
extend("double", {
  ...double,
  message: "gunakan tanda (.) untuk desimal",
});
export default {
  name: "FormChecklist",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      loading: false,
      snackbar: false,
      timeout: 3000,
      g1: null,
      g2: null,
      g3: null,
      g4: null,
      g5: null,
      g6: null,
      g7: null,
      g8: null,
      g9: null,
      g10: null,
      g11: null,
      g12: null,
      g13: null,
      g14: null,
      predict: "",
      treatment: "",
      submitted: false,

      g1s: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      g2s: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      g3s: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      g4s: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      g5s: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      g6s: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      g7s: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      g8s: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      g9s: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      g10s: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      g11s: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      g12s: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      g13s: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      g14s: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
    };
  },
  methods: {
    async modelPredict() {
      try {
        this.loading = true;
        this.snackbar = true;
        console.log(this.g1s);
        await new Promise((resolve) => setTimeout(resolve, 5000));
        if (
          this.g1 === 1 &&
          this.g2 === 1 &&
          this.g3 === 1 &&
          this.g4 === 1 &&
          this.g5 === 1 &&
          this.g6 === 1 &&
          this.g7 === 1 &&
          this.g8 === 1 &&
          this.g9 === 0 &&
          this.g10 === 0 &&
          this.g11 === 0 &&
          this.g12 === 0 &&
          this.g13 === 0 &&
          this.g14 === 0
        ) {
          this.predict = "kekurangan zat besi";
          this.treatment = "makanan kaya zat besi, suplemen zat besi";
        } else if (
          this.g1 === 1 &&
          this.g2 === 0 &&
          this.g3 === 1 &&
          this.g4 === 0 &&
          this.g5 === 0 &&
          this.g6 === 1 &&
          this.g7 === 0 &&
          this.g8 === 0 &&
          this.g9 === 0 &&
          this.g10 === 0 &&
          this.g11 === 0 &&
          this.g12 === 0 &&
          this.g13 === 0 &&
          this.g14 === 0
        ) {
          this.predict = "thalesemia";
          this.treatment =
            "transfusi darah,suplemen asam folat, pengangkatan limpa, dan transplantasi";
        } else if (
          this.g1 === 1 &&
          this.g2 === 1 &&
          this.g3 === 0 &&
          this.g4 === 1 &&
          this.g5 === 1 &&
          this.g6 === 1 &&
          this.g7 === 1 &&
          this.g8 === 0 &&
          this.g9 === 0 &&
          this.g10 === 0 &&
          this.g11 === 0 &&
          this.g12 === 0 &&
          this.g13 === 0 &&
          this.g14 === 0
        ) {
          this.predict = "masa kehamilan";
          this.treatment = "suplemen zat besi, vitamin B12, dan asam folat";
        } else if (
          this.g1 === 1 &&
          this.g2 === 1 &&
          this.g3 === 0 &&
          this.g4 === 1 &&
          this.g5 === 1 &&
          this.g6 === 1 &&
          this.g7 === 1 &&
          this.g8 === 0 &&
          this.g9 === 1 &&
          this.g10 === 1 &&
          this.g11 === 1 &&
          this.g12 === 0 &&
          this.g13 === 0 &&
          this.g14 === 0
        ) {
          this.predict = "aplastik";
          this.treatment = "tranfusi darah";
        } else if (
          this.g1 === 1 &&
          this.g2 === 1 &&
          this.g3 === 0 &&
          this.g4 === 1 &&
          this.g5 === 0 &&
          this.g6 === 0 &&
          this.g7 === 0 &&
          this.g8 === 0 &&
          this.g9 === 0 &&
          this.g10 === 0 &&
          this.g11 === 0 &&
          this.g12 === 1 &&
          this.g13 === 1 &&
          this.g14 === 1
        ) {
          this.predict = "hemolitik";
          this.treatment = "mengobati infeksi dan pengangkatan limpa";
        } else if (
          this.g1 === 1 &&
          this.g2 === 0 &&
          this.g3 === 0 &&
          this.g4 === 1 &&
          this.g5 === 0 &&
          this.g6 === 1 &&
          this.g7 === 0 &&
          this.g8 === 0 &&
          this.g9 === 0 &&
          this.g10 === 0 &&
          this.g11 === 0 &&
          this.g12 === 0 &&
          this.g13 === 0 &&
          this.g14 === 0
        ) {
          this.predict = "penyakit kronis";
          this.treatment = "tranfusi darah dan suntik hormon eritropoietin";
        } else if (
          this.g1 === 0 &&
          this.g2 === 0 &&
          this.g3 === 0 &&
          this.g4 === 1 &&
          this.g5 === 0 &&
          this.g6 === 0 &&
          this.g7 === 1 &&
          this.g8 === 0 &&
          this.g9 === 0 &&
          this.g10 === 0 &&
          this.g11 === 0 &&
          this.g12 === 1 &&
          this.g13 === 1 &&
          this.g14 === 1
        ) {
          this.predict = "sel sabit";
          this.treatment = "suplemen zar besi, transplantasi, dan kemoterapi";
        } else {
          this.predict = "bukan penyakit anemia";
          this.treatment = "tidak ada pengobatan";
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
