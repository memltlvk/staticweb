<template>
  <q-page class="flex flex-center q-pa-lg q-gutter-lg">
    <q-card
      v-for="service in services"
      :key="service.no"
      class="main-card text-white"
    >
      <div class="column items-center q-ma-sm q-gutter-sm">
        <img :src="service.image" />

        <q-card class="title-card">
          <div class="q-ma-xs text-center text-h6 text-grey-9">
            {{ service.title }}
          </div>
        </q-card>

        <div class="text-bold">{{ service.text }}</div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServicesPage",

  components: {},

  setup() {
    const services = [
      {
        no: 1,
        image: "../assets/falcon.png",
        title: "Air Freight",
        text: "We offer a comprehensive air-freight service to the Importers & Exporters of high value cargo and time critical cargo. We have a comprehensive clearance procedure for air cargo clearances.",
      },
      {
        no: 2,
        image: "../assets/ship.png",
        title: "Sea Freight",
        text: "With our innovative Express Import online system, we can collect from more than 170 countries and bring the delivery to you, offering you complete control over your import shipments.",
      },
      {
        no: 3,
        image: "../assets/truck1.png",
        title: "Truck Loading",
        text: "For large loads with special requirements we offer flexible Road freight services with advanced trucking manner, which cover various industrial centres in South India.",
      },
      {
        no: 4,
        image: "../assets/truck2.png",
        title: "Packing & Moving",
        text: "Transportation, being our speciality, we can do a better job with our own fleet of Trucks (of which 20 are closed trucks and 5 are open trailors of double axle 20 feet) for local transportation.",
      },
      {
        no: 5,
        image: "../assets/truck3.png",
        title: "Logistics",
        text: "We handle logistics for centralised storage management of spare parts, stock replenishment, streamlined stock operations, efficient inventory spend and effective stock re-utilisation.",
      },
      {
        no: 6,
        image: "../assets/industry.png",
        title: "Industrial Services",
        text: "We provide customers generic commercial needs, industry specific requirements, business order consolidation, worldwide storage and distribution, after sales services and more.",
      },
    ];

    return {
      services,
    };
  },
});
</script>

<style lang="scss" scoped>
.main-card {
  max-width: 250px;
  background-image: url("/assets/services-card.png");
  width: 250px;
  height: 300px;
}
.title-card {
  width: 100%;
  max-width: 200px;
  background: radial-gradient(circle, lighten($warning, 20%) 0%, $warning 100%);
  width: 200px;
  height: 40px;
}
</style>
