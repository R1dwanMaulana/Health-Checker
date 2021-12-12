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
            Jenis penyakit anda adalah
            <!-- {{
              new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(predict)
            }} -->
            <!-- / bulan -->
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
        >Sedang mencari harga kost untuk Anda.</v-snackbar
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
      predict: 0,
      submitted: false,
      // items: [
      //   { property: "Kamar mandi dalam" },
      //   { property: "Meja" },
      //   { property: "Kursi" },
      //   { property: "Dapur" },
      //   { property: "AC" },
      //   { property: "WiFi" },
      //   { property: "Parkir Motor" },
      //   { property: "Parkir Mobil" },
      // ],
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
        await new Promise((resolve) => setTimeout(resolve, 5000));
        this.predict =
          // -68531.9999133359 +
          // 193290.7399441 * this.length +
          // 53787.09955987 * this.width +
          // 223041.25251717 * this.bathroom +
          // -94016.99467001 * this.table +
          // 50481.71483865 * this.chair +
          // 151462.80891942 * this.kitchen +
          // 599669.48438946 * this.chooseAc +
          // 60937.34930789 * this.chooseWifi +
          // -147062.92326872 * this.motorcyleParking +
          // 83730.52196747 * this.carParking +
          // -14352.91188581 * this.location;
          -148047.27476719278 +
          164974.23423571 * this.length +
          76671.12127056 * this.width +
          227707.434326 * this.bathroom +
          -56106.94865448 * this.table +
          28947.18630694 * this.chair +
          117698.12077464 * this.kitchen +
          600114.34157571 * this.chooseAc +
          56860.15723041 * this.chooseWifi +
          -18779.72174119 * this.motorcyleParking +
          71576.69697222 * this.carParking +
          -17839.86082162 * this.location;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
