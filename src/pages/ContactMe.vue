<template>
  <div>
    <div class="page__title" v-if="!sendSuccesful">
      <h1>Kontaktieren Sie mich.</h1>
      <br />
      <p>
        Sie können mir direkt über das Online-Formular schreiben oder Sie
        kontaktieren mich über
        <a
          href="https://www.linkedin.com/in/mirza-malkoc-508470218/"
          target="_blank"
        >
          LinkedIn</a
        >. Ich werde mich um eine schnelle Antwort bemühen.
      </p>
    </div>
    <div class="form__card" v-if="!sendSuccesful">
      <w-card tile>
        <w-form>
          <w-input
            :validators="[validators.mailrequired]"
            class="mb2"
            label="E-Mail*"
            type="email"
            name="email"
            bg-color="orange-light4"
            outline
            v-model="clientData.clientEmail"
            required
          >
          </w-input>
          <w-input
            :validators="[validators.required]"
            class="mb2"
            label="Name*"
            type="text"
            name="name"
            bg-color="orange-light4"
            outline
            v-model="clientData.clientName"
          >
          </w-input>
          <w-input
            class="mb5"
            label="Telefon-Nr.:"
            type="tel"
            pattern="[0-9]*"
            name="phoneNumber"
            bg-color="orange-light4"
            outline
            v-model="clientData.clientNumber"
          >
          </w-input>
          <w-textarea
            :validators="[validators.required]"
            outline
            type="text"
            name="message"
            placeholder="Nachricht*"
            bg-color="orange-light4"
            v-model="clientData.clientMessage"
          ></w-textarea>
          <w-button
            class="submit__button"
            type="submit"
            bg-color="orange-light2"
            @click="submitForm"
            >Senden</w-button
          >
        </w-form>
      </w-card>
    </div>
    <div class="page__title" v-else>
      <h1>Nachricht gesendet.</h1>
      <br />
      <p>
        Vielen Dank für ihre Nachricht. Ich werde schnellstmöglich antworten.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    validators: {
      required: (value) => !!value || "Bitte füllen sie dieses Feld aus.",
      mailrequired: (value) =>
        value.includes("@") || "Bitte geben sie eine E-Mail Adresse an.",
    },
    clientData: {
      clientName: "",
      clientEmail: "",
      clientNumber: "",
      clientMessage: "",
      date: "",
    },
    sendSuccesful: false,
  }),
  methods: {
    checkForm() {
      if (
        this.clientData.clientEmail === "" ||
        !this.clientData.clientEmail.includes("@")
      ) {
        return false;
      } else if (
        this.clientData.clientName === "" ||
        this.clientData.clientMessage === ""
      ) {
        return false;
      } else return true;
    },
    async submitForm() {
      this.clientData.date = this.getDate();
      if (this.checkForm() === false) return;
      else {
        const response = await fetch(
          "https://malkoc-mirza-portfolio-default-rtdb.europe-west1.firebasedatabase.app/requests.json",
          {
            method: "POST",
            body: JSON.stringify(this.clientData),
          }
        );

        const responseData = await response.json();

        if (!response.ok) {
          const error = new Error(responseData.message || "Failed to post!");
          throw error;
        }
        this.sendSuccesful = true;
      }
    },
    getDate() {
      const today = new Date();
      const date =
        today.getDate() +
        "." +
        (today.getMonth() + 1) +
        "." +
        today.getFullYear();
      const time = today.getHours() + ":" + today.getMinutes();
      const timeData = time + " / " + date;
      return timeData;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  font-family: "Roboto Condensed", sans-serif;
}

div.page__title {
  margin: 5vh 15vw 0 15vw;
  a {
    color: white;
    text-decoration-line: underline;
  }
}
div.form__card {
  width: 70%;
  margin: 10vh auto;
  color: black;
  background-color: white;
  border: 2px solid;
  border-radius: 10px;
}

.submit__button {
  display: block;
  margin: 5vh auto 2vh auto;
}
</style>
