<template>
  <q-page class="flex flex-center q-pa-lg q-gutter-lg">
    <q-card
      v-for="client in clients"
      :key="client"
      class="main-card text-white"
    >
      <div class="q-ma-md text-body2 text-grey-9" style="font-weight: bold">
        {{ client }}
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClientsPage",

  components: {},

  setup() {
    const clients = [
      "Advanced Techpro services Pvt Ltd.,",
      "Alstom T&D India",
      "Ascent Digit Solutions Pvt Ltd.,",
      "BAC Enterprises",
      "Bentoli Agri Nutrition India P Ltd.,",
      "Castwel Auto Parts Pvt Ltd.,",
      "Comstar Automotive technologies pvt ltd.,",
      "CRP-TCDC Diecasting India Pvt Ltd.,",
      "Diamond Castings Pvt Ltd.,",
      "Elgi Ultra Industries Ltd.,",
      "Faxonics Technologies Pvt Ltd.,",
      "Funskool India Ltd.,",
      "Gencor Pacific Auto Engineering P Ltd.,",
      "Hyundai Motor India Ltd.,",
      "Indian Furniture Products Ltd.,(Aditiya Birla Group)",
      "Komus Auto Components",
      "Kwality Bright Steel Alloy",
      "L & T Ltd.,",
      "LM Enterprises",
      "Manuli Hydralic India Co Ltd.,",
      "Meca Plast India P Ltd.,",
      "Mexus Education Pvt Ltd.,",
      "P.R Impex",
      "Pondy Die casting P Ltd.,",
      "Premium Steering Pvt Ltd.,",
      "S.V Sugar Mills Ltd.,",
      "Sri BKNM Industries",
      "Style Spa Furniture Ltd.,",
      "Suryaa Enterprises",
      "The Advanced Communication systems & services.",
      "Vital Cast Engineering",
    ];

    return {
      clients,
    };
  },
});
</script>

<style lang="scss" scoped>
.main-card {
  max-width: 250px;
  width: 250px;
  height: 70px;
  background: radial-gradient(circle, lighten($warning, 20%) 0%, $warning 100%);
}
</style>
