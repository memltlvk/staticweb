<template>
  <q-page class="flex flex-start q-gutter-md">
    <div
      style="
        width: 600px;
        position: absolute;
        top: 20px;
        left: 30px;
        z-index: 1000;
      "
      v-html="text"
    ></div>

    <div style="position: absolute; top: 0px; left: 0px">
      <img src="assets/ship_home.png" />
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent } from "vue";
import { colors } from "quasar";

export default defineComponent({
  name: "AboutUsPage",

  components: {},

  setup() {
    // setting the color from palette
    const { getPaletteColor } = colors;

    const paletteColorAccent = getPaletteColor("accent");
    const paletteColorWarning = getPaletteColor("warning");

    const text =
      '<p>Founders of <span class="cc">Carrier Cargo</span> <br> have been in the Customs and <br> Logistics Industry since 1996 (26 <br> years). They have accumulated this <br> experience in their service, ever since the <br> inception of <span class="cc">Carrier Cargo</span>.</p> \
    <p><span class="cc">Carrier Cargo</span> have matched this Customs and Logistics <br> knowledge, with a robust infrastructure of good fleet of <br> trucks and yards, a highly service motivated, long serving staff. <br> <span class="cc">Carrier Cargo</span> have acquired full recognition by the Government of <br> India Customs Department.</p> \
    <p>Naturally, <span class="cc">Carrier Cargo</span> have attracted and retained an esteemed clientele. But <br> like every able organisation, <span class="cc">Carrier Cargo</span> wants to expand without resting on their <br> laurels and would like to have you as their esteemed partner in this regard. The <br> passion and motto of <span class="cc">Carrier Cargo</span> is to provide a Credible, Fully Consolidated and Highly Appreciated services to customers. </p> \
    <p>For further info <a style="color: yellow" href="/contactus">Contact us</a></p> \
    \
    <style> \
    p { \
      color: white; \
      font-weight: bold; \
      text-shadow: 2px 2px 4px #000000; \
    } \
    .cc { \
      color: ' +
      paletteColorAccent +
      "; \
      font-weight: bold; \
    } \
    </style>";

    return {
      text,
    };
  },
});
</script>
