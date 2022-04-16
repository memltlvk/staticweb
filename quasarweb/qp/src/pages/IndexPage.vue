<template>

  <q-page class="flex flex-center q-gutter-md">
    <div style="width: 800px">
    <q-carousel
      v-model="slide"
      animated
      arrows
      navigation
      infinite
      :autoplay="autoplay"
    >
      <q-carousel-slide :name="1" img-src="assets/001.jpg" />
      <q-carousel-slide :name="2" img-src="assets/002.jpg" />
      <q-carousel-slide :name="3" img-src="assets/003.jpg" />
      <q-carousel-slide :name="4" img-src="assets/004.jpg" />
      <q-carousel-slide :name="5" img-src="assets/005.jpg" />
      <q-carousel-slide :name="6" img-src="assets/006.jpg" />
      <q-carousel-slide :name="7" img-src="assets/007.jpg" />
      <q-carousel-slide :name="8" img-src="assets/008.jpg" />
      <q-carousel-slide :name="9" img-src="assets/009.jpg" />
    </q-carousel>
    </div>
  </q-page>

</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',

  components: {  },

  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
})
</script>

