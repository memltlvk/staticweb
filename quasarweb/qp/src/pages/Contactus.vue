<template>
  <q-page class="flex flex-start">
    <div class="display-area">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey q-mt-sm"
        active-color="accent"
        indicator-color="accent"
        align="justify"
      >
        <q-tab name="staff" label="Staff" />
        <q-tab name="feedback" label="Feedback" />
      </q-tabs>

      <q-tab-panels class="bg-transparent" v-model="tab" animated>
        <q-tab-panel name="staff">
          <div class="persons-column">
            <div
              v-for="person in persons"
              :key="person.no"
              class="persons-column-item"
            >
              <person-card-component
                :person="person"
                :displayArea="displayArea"
              >
              </person-card-component>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="feedback">
          <div class="feedback-column">
            <q-card class="bg-white" style="width: 100%">
              <q-card-section>
                <q-form @submit="onSubmit" @reset="onReset">
                  <div class="feedback-form">
                    <div class="feedback-form-item-header text-h6">
                      <q-card class="q-px-md q-mb-md bg-accent text-white"
                        >Feedback</q-card
                      >
                    </div>

                    <q-input
                      class="feedback-form-item q-mb-md"
                      filled
                      v-model="enquiry.name"
                      label="Name"
                      hint="Name and surname"
                      lazy-rules
                      :rules="[
                        (val) =>
                          (val && val.length > 0) || 'Please type something',
                      ]"
                    />

                    <q-input
                      class="feedback-form-item q-mb-md"
                      filled
                      v-model="enquiry.address"
                      label="Address"
                      hint="Address"
                      lazy-rules
                      :rules="[
                        (val) =>
                          (val && val.length > 0) || 'Please type something',
                      ]"
                    />

                    <q-input
                      class="feedback-form-item q-mb-md"
                      filled
                      v-model="enquiry.city"
                      label="City"
                      hint="City"
                      lazy-rules
                      :rules="[
                        (val) =>
                          (val && val.length > 0) || 'Please type something',
                      ]"
                    />

                    <q-input
                      class="feedback-form-item q-mb-md"
                      filled
                      v-model="enquiry.state"
                      label="State"
                      hint="State"
                      lazy-rules
                      :rules="[
                        (val) =>
                          (val && val.length > 0) || 'Please type something',
                      ]"
                    />

                    <q-input
                      class="feedback-form-item q-mb-md"
                      filled
                      type="number"
                      v-model="enquiry.pincode"
                      label="Pincode"
                      hint="Pincode"
                      lazy-rules
                      :rules="[
                        (val) =>
                          (val !== null && val !== '') ||
                          'Please type the Pincode',
                        (val) =>
                          (val > 100000 && val < 999999) ||
                          'Please type 6 digit Pincode',
                      ]"
                    />

                    <q-input
                      class="feedback-form-item q-mb-md"
                      filled
                      v-model="enquiry.country"
                      label="Country"
                      hint="Country"
                      lazy-rules
                      :rules="[
                        (val) =>
                          (val && val.length > 0) || 'Please type something',
                      ]"
                    />

                    <q-input
                      class="feedback-form-item q-mb-md"
                      filled
                      v-model="enquiry.email"
                      label="Email"
                      hint="Email"
                      lazy-rules
                      :rules="[
                        (val) =>
                          (val && val.length > 0) || 'Please type something',
                      ]"
                    />

                    <q-input
                      class="feedback-form-item q-mb-md"
                      filled
                      type="number"
                      v-model="enquiry.phone"
                      label="Phone"
                      hint="Phone"
                      lazy-rules
                      :rules="[
                        (val) =>
                          (val !== null && val !== '') ||
                          'Please type the Phone Number',
                        (val) =>
                          (val > 1000000000 && val < 9999999999) ||
                          'Please type 10 digit Phone number',
                      ]"
                    />

                    <div class="feedback-form-item-footer">
                      <q-btn push label="Submit" type="submit" color="accent" />
                      <q-btn
                        push
                        label="Reset"
                        type="reset"
                        color="negative"
                        class="q-ml-sm"
                      />
                    </div>
                  </div>
                </q-form>
              </q-card-section>
            </q-card>
          </div>
        </q-tab-panel>
      </q-tab-panels>

      <!-- resize observer for the display area -->
      <q-resize-observer @resize="onDisplayAreaResize" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

import { useQuasar, colors } from "quasar";

import PersonCardComponent from "../components/PersonCardComponent/PersonCardComponent.vue";

export default defineComponent({
  name: "ContactUsPage",

  components: {
    PersonCardComponent,
  },

  setup() {
    const $q = useQuasar();

    const viewport = {
      width: $q.screen.width,
      height: $q.screen.height,
      "font-size": 16, // TODO: query and set
    };

    const displayArea = ref(viewport);

    const enquiry = ref({
      name: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      country: "",
      phone: "",
      email: "",
    });

    const persons = [
      {
        no: 1,
        image: "../assets/photo_murali.jpg",
        title: "Operations Manager",
        name: "G.Murali",
        phone: "+91 9840871709",
        email: "murali@carriercargo.in",
      },
      {
        no: 2,
        image: "../assets/photo_balaji.jpg",
        title: "Customs Manager",
        name: "K.Balaji",
        phone: "+91 9840871909",
        email: "balaji@carriercargo.in",
      },
      {
        no: 3,
        image: "../assets/photo_jaikumar.jpg",
        title: "Airport Operations",
        name: "K.Jaikumar",
        phone: "+91 9840879808",
        email: "jai@carriercargo.in",
      },
      {
        no: 4,
        image: "../assets/photo_sridharan.jpg",
        title: "Accounts Manager",
        name: "C.R.Sridharan",
        phone: "+91 9789091196",
        email: "accountsdocument@carriercargo.in",
      },
    ];

    const tab = ref("staff");

    function onSubmit() {
      console.log("enquiry = ", enquiry.value);
    }

    function onReset() {
      enquiry.value = {
        name: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        country: "",
        phone: "",
        email: "",
      };
    }

    function onDisplayAreaResize(size) {
      displayArea.value = {
        width: size.width,
        height: size.height,
        "font-size": 16, // TODO: query and set
      };

      console.log("viewport = ", viewport);
      console.log("displayArea = ", displayArea.value);
    }

    return {
      displayArea,
      persons,
      enquiry,
      tab,
      onSubmit,
      onReset,
      onDisplayAreaResize,
    };
  },
});
</script>

<style lang="scss" scoped>
@font-face {
  font-family: BarlowCondensed;
  src: url("../css/fonts/BarlowCondensed-Medium.ttf") format("truetype");
}

$accentbg: radial-gradient(circle, lighten($accent, 5%) 0%, $accent 100%);

.bordered {
  border: 1px solid red;
}

.display-area {
  width: 100%;
  height: auto;
}

.persons-column {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  row-gap: 1rem;
  column-gap: 1rem;
}

.persons-column-item {
  flex: 100%;

  min-width: 14rem;
  max-width: 30rem;
}

.feedback-column {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  column-gap: 1rem;
}

.feedback-column-item {
  flex: 100%;
}

.feedback-form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  column-gap: 1rem;
}

.feedback-form-item {
  flex: 100%;
}

.feedback-form-item-header {
  flex: 100%;
}

.feedback-form-item-footer {
  flex: 100%;
}

@media only screen and (min-width: 32rem) {
  .persons-column-item {
    flex: 48%;
  }

  .feedback-form-item {
    flex: 40%;
  }

  .feedback-form-item-header {
    flex: 100%;
  }

  .feedback-form-item-footer {
    flex: 100%;
  }
}

@media only screen and (min-width: 64rem) {
  .persons-column-item {
    flex: 22%;
  }

  .feedback-form-item {
    flex: 20%;
  }

  .feedback-form-item-header {
    flex: 100%;
  }

  .feedback-form-item-footer {
    flex: 100%;
  }
}
</style>
