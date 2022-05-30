<template>
  <q-card id="mainCard" class="persons-card">
    <div class="person-card-section">
      <div class="person-image-div">
        <q-card class="person-image">
          <img :src="person.image" class="person-image" />
        </q-card>
      </div>

      <div class="info-div">
        <div class="person-info-div">
          <div class="person-name">{{ person.name }}</div>

          <div class="separator">
            <q-separator color="accent" />
          </div>

          <div class="person-title">
            <span class="icon-style">
              <q-icon name="assignment_ind" />
            </span>
            {{ person.title }}
          </div>
        </div>

        <div class="person-contact-div">
          <div class="phone-div">
            <span class="icon-style">
              <q-icon name="call" />
            </span>
            {{ person.phone }}
          </div>

          <div class="email-div">
            <span class="icon-style">
              <q-icon name="email" />
            </span>
            {{ person.email }}
          </div>
        </div>
      </div>

      <div class="email-div-full-span">
        <span class="icon-style">
          <q-icon name="email" />
        </span>
        &nbsp;{{ person.email }}
      </div>
    </div>

    <!-- resize observer for the persons card -->
    <q-resize-observer @resize="onCardResize" />
  </q-card>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

import { useQuasar, colors } from "quasar";

import _ from "lodash";

import cssStructure from "./css/cssStructure.json";

export default defineComponent({
  name: "PersonCardComponent",

  props: {
    person: {
      type: Object,
      default() {
        return {
          no: 1,
          image: "",
          title: "",
          name: "",
          phone: "",
          email: "",
        };
      },
    },
    colors: {
      type: Object,
      default() {
        return {
          bg: "",
          infobg: "",
          infotext: "",
          contactbg: "",
          contacttext: "",
        };
      },
    },
    displayArea: {
      type: Object,
      default() {
        return {
          width: 256,
          height: 256,
          "font-size": 16,
        };
      },
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const $q = useQuasar();

    const cardWidth = ref(
      props.displayArea.width / props.displayArea["font-size"]
    );

    function isValid(val) {
      if (typeof val === "undefined") {
        return false;
      } else if (val === null) {
        return false;
      } else {
        return true;
      }
    }

    // function getBreakpointMeta() {
    //   const el = document.getElementById("mainCard");
    //   const cssobj = window.getComputedStyle(el, ":before");

    //   return JSON.parse(JSON.parse(cssobj.content));
    // }

    function onCardResize(size) {
      cardWidth.value = size.width / props.displayArea["font-size"];

      console.log("resized cardWidth = ", cardWidth.value);

      const breakpointData = cssStructure.cssData;
      // console.log("breakpoint data = ", breakpointData);

      void documentUpdateDim(breakpointData, cardWidth.value);
    }

    function fny(x, x1, x2, y1, y2) {
      // Line function
      let slope = (y2 - y1) / (x2 - x1);
      let constant = y1 - slope * x1;

      return slope * x + constant;
    }

    function calcsetDim(
      cssClass,
      cssVariable,
      baseParameterValue,
      cssVariableValueMin,
      cssVariableValueMax,
      baseParameterValueMin,
      baseParameterValueMax
    ) {
      // calculate the cssProperty and set the same in the document

      // calculate the cssVariable value
      let cssVariableValue = 0;

      if (baseParameterValueMin === baseParameterValueMax) {
        // base parameter range is constant
        cssVariableValue = cssVariableValueMin;
      } else {
        cssVariableValue = fny(
          baseParameterValue,
          baseParameterValueMin,
          baseParameterValueMax,
          cssVariableValueMin,
          cssVariableValueMax
        );
      }

      // console.log("***********************");
      // console.log("cssClass = ", cssClass);
      // console.log("cssVariable = ", cssVariable);
      // console.log("baseParameterValue = ", baseParameterValue);
      // console.log("cssVariableValueMin = ", cssVariableValueMin);
      // console.log("cssVariableValueMax = ", cssVariableValueMax);
      // console.log("baseParameterValueMin = ", baseParameterValueMin);
      // console.log("baseParameterValueMax = ", baseParameterValueMax);
      // console.log("cssVariableValue = ", cssVariableValue);
      // console.log("***********************");

      const cssVariableValueString = cssVariableValue.toString() + "rem";

      // set the cssVariable value in the document
      const elems = document.getElementsByClassName(cssClass);

      for (let i = 0; i < elems.length; i++) {
        elems[i].style.setProperty(
          cssVariable,
          cssVariableValueString,
          "important"
        );
        // console.log(`Setting ${cssVariable}: ${cssVariableValueString};`);
        // console.log("elem = ", elems[i]);
      }
    }

    function findDataset() {
      // get the current dataset from ::before class content
      const el = document.getElementById("mainCard");
      let dataset = window.getComputedStyle(el, "::before").content;

      dataset = dataset.substr(1, dataset.length - 2);

      console.log("current dataset = ", dataset);

      return dataset;
    }

    function documentUpdateDim(cssData, baseParameterValue) {
      // update the document with the current cssData

      // get the base parameter and its values
      const baseParameterClassData = _.chain(cssData)
        .filter({ cssClass: "__base_parameter" })
        .value();

      let dataset = findDataset();

      const baseParameters = baseParameterClassData[0][dataset].split(",");

      // loop through the cssData
      cssData.forEach(function (val) {
        // ignore __base-parameter class
        if (val.cssClass !== "__base_parameter") {
          // calculate and update dim

          const classParameters = val[dataset].split(",");

          void calcsetDim(
            val.cssClass,
            val.cssVariable,
            baseParameterValue,
            parseFloat(classParameters[0]),
            parseFloat(classParameters[1]),
            baseParameters[0],
            baseParameters[1]
          );
        }
      });
    }

    onMounted(() => {
      // void documentUpdateDim(cardWidth.value);
    });

    return {
      onCardResize,
      calcsetDim,
      documentUpdateDim,
    };
  },
});
</script>

<style scoped lang="scss">
@font-face {
  font-family: BarlowCondensed;
  src: url("../../css/fonts/BarlowCondensed-Medium.ttf") format("truetype");
}

$accentbg: radial-gradient(circle, lighten($accent, 5%) 0%, $accent 100%);

.bordered {
  border: 1px solid red;
}

// **********

@import "css/autogenerated";
</style>
