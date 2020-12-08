<template>
  <v-app>
    <v-content>
      <div>
        <v-card>
          <v-container>
            <h2>Contact</h2>
            <p>ご意見・お問い合わせ</p>
            <v-form
              ref="form"
              v-model="contactFormValidation.valid"
              lazy-validation
            >
              <v-text-field
                v-model="contactForm.name"
                color="blue-grey lighten-2"
                :rules="contactFormValidation.nameRules"
                label="名前"
                required
              ></v-text-field>
              <v-text-field
                v-model="contactForm.email"
                color="blue-grey lighten-2"
                :rules="contactFormValidation.emailRules"
                label="メールアドレス"
                required
              ></v-text-field>
              <v-textarea
                v-model="contactForm.contents"
                color="blue-grey lighten-2"
                :rules="contactFormValidation.contentsRules"
                label="内容"
                required
              ></v-textarea>
              <v-btn
                :loading="contactForm.loading"
                :disabled="!contactFormValidation.valid"
                @click="sendMail()"
                block
                large
                color="blue-grey lighten-4"
                class="my-5 font-weight-bold"
                >送信
              </v-btn>
            </v-form>
          </v-container>
        </v-card>
        <v-snackbar
          v-model="snackBar.show"
          :color="snackBar.color"
          bottom
          right
          :timeout="6000"
          class="font-weight-bold"
        >
          {{ snackBar.message }}
        </v-snackbar>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import { functions } from "@/plugins/firebase";

export default {
  data: () => ({
    contactForm: {
      name: "",
      contents: "",
      email: "",
      loading: false,
    },
    contactFormValidation: {
      valid: false,
      nameRules: [(v) => !!v || "名前は必須項目です"],
      emailRules: [(v) => !!v || "メールアドレスは必須項目です"],
      contentsRules: [(v) => !!v || "内容は必須項目です"],
    },
    snackBar: {
      show: false,
      color: "",
      message: "",
    },
  }),
  methods: {
    sendMail: function () {
      if (this.$refs.form.validate()) {
        this.contactForm.loading = true;
        const mailer = functions.httpsCallable("sendMail");

        mailer(this.contactForm)
          .then(() => {
            this.formReset();
            this.showSnackBar(
              "success",
              "お問い合わせありがとうございます。送信完了しました"
            );
          })
          .catch((err) => {
            this.showSnackBar(
              "error",
              "送信に失敗しました。時間をおいて再度お試しください"
            );
            console.log(err);
          })
          .finally(() => {
            this.contactForm.loading = false;
          });
      }
    },
    showSnackBar: function (color, message) {
      this.snackBar.message = message;
      this.snackBar.color = color;
      this.snackBar.show = true;
    },
    formReset: function () {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
h2 {
  margin-top: 18px;
  letter-spacing: 2px;
  text-align: center;
  font-weight: 200;
  color: #90A4AE;
}
 p{
  text-align: center;
  color: #90A4AE;
}

</style>
