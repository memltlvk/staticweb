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
        <q-card class="persons-card">

          <div class="person-card-section">

            <div class="person-image-div">
              <q-card class="person-image">
                <img :src="person.image" class="person-image">
              </q-card>
            </div>

            <q-card class="person-info-div info-card">

              <div class="text-body2 text-bold">{{ person.name }}</div>

              <q-separator dark spaced="sm"/>

                <div class="q-gutter-xs">

                  <div class="q-mt-sm">
                    <q-icon name="assignment_ind" size="1.5rem"/>
                    {{ person.title }}
                  </div>

                </div>

            </q-card>

            <q-card class="person-contact-div info-card">

                <div class="phone-div">
                  <q-icon name="call" size="1.5rem"/>
                  {{ person.phone }}
                </div>

                <div class="email-div">
                  <q-icon name="email" size="1.5rem"/>
                  {{ person.email }}
                </div>

            </q-card>

          </div>

        </q-card>
        </div>
      </div>

      </q-tab-panel>

      <q-tab-panel name="feedback">

      <div class="feedback-column">
        <q-card class="bg-white" style="width: 100%">
          <q-card-section>
            <q-form
              @submit="onSubmit"
              @reset="onReset"
            >
              <div class="feedback-form">

              <div class="feedback-form-item-header text-h6">
                <q-card class="q-px-md q-mb-md bg-accent text-white">Feedback</q-card>
              </div>

              <q-input
                class="feedback-form-item q-mb-md"
                filled
                v-model="enquiry.name"
                label="Name"
                hint="Name and surname"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <q-input
                class="feedback-form-item q-mb-md"
                filled
                v-model="enquiry.address"
                label="Address"
                hint="Address"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <q-input
                class="feedback-form-item q-mb-md"
                filled
                v-model="enquiry.city"
                label="City"
                hint="City"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <q-input
                class="feedback-form-item q-mb-md"
                filled
                v-model="enquiry.state"
                label="State"
                hint="State"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
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
                  val => val !== null && val !== '' || 'Please type the Pincode',
                  val => val > 100000 && val < 999999 || 'Please type 6 digit Pincode'
                ]"
              />

              <q-input
                class="feedback-form-item q-mb-md"
                filled
                v-model="enquiry.country"
                label="Country"
                hint="Country"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <q-input
                class="feedback-form-item q-mb-md"
                filled
                v-model="enquiry.email"
                label="Email"
                hint="Email"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
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
                  val => val !== null && val !== '' || 'Please type the Phone Number',
                  val => val > 1000000000 && val < 9999999999 || 'Please type 10 digit Phone number'
                ]"
              />

              <div class="feedback-form-item-footer">
                <q-btn push label="Submit" type="submit" color="accent"/>
                <q-btn push label="Reset" type="reset" color="negative" class="q-ml-sm" />
              </div>

              </div>

            </q-form>
          </q-card-section>
        </q-card>

      </div>
      </q-tab-panel>

    </q-tab-panels>
    </div>
  </q-page>

</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ServicePage',

  components: {  },

  setup() {

    const enquiry = ref(
      {
        'name': '',
        'address': '',
        'city': '',
        'state': '',
        'pincode': '',
        'country': '',
        'phone': '',
        'email': ''
      }
    );

    const persons = [
      {
        'no' : 1,
        'image': '../assets/photo_murali.jpg',
        'title': 'Operations Manager',
        'name': 'G.Murali',
        'phone': '+91 9840871709',
        'email': 'murali@carriercargo.in'
      },
      {
        'no' : 2,
        'image': '../assets/photo_balaji.jpg',
        'title': 'Customs Manager',
        'name': 'K.Balaji',
        'phone': '+91 9840871909',
        'email': 'balaji@carriercargo.in'
      },
      {
        'no' : 3,
        'image': '../assets/photo_jaikumar.jpg',
        'title': 'Airport Operations',
        'name': 'K.Jaikumar',
        'phone': '+91 9840879808',
        'email': 'jai@carriercargo.in'
      },
      {
        'no' : 4,
        'image': '../assets/photo_sridharan.jpg',
        'title': 'Accounts & Finance Manager',
        'name': 'C.R.Sridharan',
        'phone': '+91 9789091196',
        'email': 'accounts@carriercargo.in'
      }
    ];

    const tab = ref('staff');

    function onSubmit () {

      console.log('enquiry = ', enquiry.value);

    }

    function onReset () {

      enquiry.value = {
        'name': '',
        'address': '',
        'city': '',
        'state': '',
        'pincode': '',
        'country': '',
        'phone': '',
        'email': ''
      }

    }

    return {
      persons,
      enquiry,
      tab,
      onSubmit,
      onReset
    };

  }
})
</script>

<style lang="scss" scoped>

@font-face {
  font-family: BarlowCondensed;
  src: url('../css/fonts/BarlowCondensed-Medium.ttf') format('truetype');
}

$accentbg: radial-gradient(circle, lighten($accent, 5%) 0%, $accent 100%);

.bordered {
  border: 1px solid red;
}

.display-area {
  min-width: 16.5rem;
  width: 100%;
}

.persons-column {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  row-gap: 1rem;
}

.persons-column-item {
  width: 100%;
}

.persons-card {
  background-color: $yellow-3;
  height: 100%;
  width: 100%;

  padding-top: 1rem;
  padding-bottom: 1rem;

  padding-left: 1rem;
  padding-right: 1rem;
}

.info-card, .contact-card {
  background: $accentbg !important;
  font-size: 0.7rem;
  font-weight: bold;
  color: white;
  width: 100%;

  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
}

.contact-card {
  font-family: BarlowCondensed;

  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}

.person-card-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;

  row-gap: 0.7rem;
  column-gap: 0.7rem;
}

.person-image-div {
  overflow: hidden;
  height: 100%;

  max-width: 6rem;

  flex: 100%;
}

.person-image {
  height: 100%;
}

.person-info-div {
  flex: 100%;
}

.person-contact-div {
  flex: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.phone-div {
  flex: 100%;

  margin-bottom: 0.5rem;
}

.email-div {
  flex: 100%;
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


@media only screen and (min-width: 400px) {

  .person-image-div {
    flex: 30%;
  }

  .person-info-div {
    flex: 65%;
  }

}

@media only screen and (min-width: 500px) {

  .persons-column {
    column-gap: 1rem;
  }

  .persons-column-item {
    flex: 48%;
  }

  .person-image-div {
    flex: 100%;
  }

  .person-info-div {
    flex: 100%;
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

</style>
