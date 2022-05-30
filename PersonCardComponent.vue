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

    <!-- resize observer for the display area -->
    <q-resize-observer @resize="onCardResize" />
  </q-card>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

import { useQuasar, colors } from "quasar";

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
    viewport: {
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

    const cardWidth = ref(props.viewport.width / props.viewport["font-size"]);

    function isValid(val) {
      if (typeof val === "undefined") {
        return false;
      } else if (val === null) {
        return false;
      } else {
        return true;
      }
    }

    function getBreakpointMeta() {
      const el = document.getElementById("mainCard");
      const cssobj = window.getComputedStyle(el, ":before");

      return JSON.parse(JSON.parse(cssobj.content));
    }

    function onCardResize(size) {
      cardWidth.value = size.width / props.viewport["font-size"];

      // console.log('resized cardWidth = ', cardWidth.value);

      const brkpt = getBreakpointMeta();
      console.log("breakpoint meta = ", brkpt);

      // void runUpdateDim(cardWidth.value);
    }

    function fny(m, c, x) {
      return m * x + c;
    }

    function calcsetDim(param, m, c, cssClass, cssProperty) {
      const cal = fny(m, c, param).toString() + "rem";

      const elems = document.getElementsByClassName(cssClass);

      for (let i = 0; i < elems.length; i++) {
        elems[i].style.setProperty(cssProperty, cal);
      }
    }

    function runUpdateDim(cardWidth) {
      // console.log('viewport.width = ', props.viewport.width);
      // console.log('cardWidth = ', cardWidth);

      const cssDescription = [
        {
          cssvar: "--normalFontSize",
          cssclass: "person-card-section",
          m: 0.0252,
          c: 0.3472,
        },
        {
          cssvar: "--cardTopMargin",
          cssclass: "person-card-section",
          m: 0.189,
          c: -0.1457,
        },
        {
          cssvar: "--cardBottomMargin",
          cssclass: "person-card-section",
          m: 0.189,
          c: -0.1457,
        },
        {
          cssvar: "--imageDivWidth",
          cssclass: "person-image-div",
          m: 0.315,
          c: 0.0906,
        },
        {
          cssvar: "--infodivTopMargin",
          cssclass: "person-info-div",
          m: 0.189,
          c: -1.3457,
        },
        {
          cssvar: "--infodivBottomMargin",
          cssclass: "person-info-div",
          m: 0.126,
          c: -1.0638,
        },
        {
          cssvar: "--personNameFontSize",
          cssclass: "person-name",
          m: 0.0378,
          c: 0.4709,
        },
        {
          cssvar: "--separatorMarginTop",
          cssclass: "separator",
          m: 0.0252,
          c: -0.3528,
        },
        {
          cssvar: "--separatorMarginBottom",
          cssclass: "separator",
          m: 0.0252,
          c: -0.3528,
        },
        {
          cssvar: "--iconFontSize",
          cssclass: "icon-style",
          m: 0.0378,
          c: 0.6709,
        },
        {
          cssvar: "--phonedivBottomMargin",
          cssclass: "phone-div",
          m: 0.0,
          c: 0.0,
        },
      ];

      cssDescription.forEach(function (cssDescriptionValue) {
        void calcsetDim(
          cardWidth,
          cssDescriptionValue.m,
          cssDescriptionValue.c,
          cssDescriptionValue.cssclass,
          cssDescriptionValue.cssvar
        );
      });
    }

    onMounted(() => {
      void runUpdateDim(cardWidth.value);
    });

    return {
      onCardResize,
      calcsetDim,
      runUpdateDim,
    };
  },
});
</script>

<style scoped lang="scss">
@font-face {
  font-family: BarlowCondensed;
  src: url("../css/fonts/BarlowCondensed-Medium.ttf") format("truetype");
}

$accentbg: radial-gradient(circle, lighten($accent, 5%) 0%, $accent 100%);

.bordered {
  border: 1px solid red;
}

// **********

/* ***** Variable Declarations ***** */

.person-card-section {
  --normalFontSize: 0.7rem;
  --cardTopMargin: 4rem;
  --cardBottomMargin: 4rem;
  --cardLeftMargin: 1rem;
  --cardRightMargin: 1rem;
}

.person-image-div {
  --imageDivWidth: 7rem;
}

.person-info-div {
  --infodivTopMargin: 2.8rem;
  --infodivBottomMargin: 1.7rem;
}

.person-name {
  --personNameFontSize: 1.3rem;
}

.separator {
  --separatorMarginTop: 0.2rem;
  --separatorMarginBottom: 0.2rem;
}

.icon-style {
  --iconFontSize: 1.5rem;
}

.phone-div {
  --phonedivBottomMargin: 0rem;
}

/* ***** */

/* *****
    Breakpoint specific settings
    for default width
    i.e < 24rem width
***** */

.persons-card::before {
  /* ***** breakpoint data for js ***** */
  content: '{"bp":"xsmall1"}';
  display: none;
}

// **********

.persons-card {
  background-image: url("/assets/personal-card.png");
  background-size: cover;

  width: 100%;
  height: 100%;
}

.person-card-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  text-align: center;
  font-weight: bold;
  color: $accent;

  width: 100%;
}

.person-image-div {
  z-index: 4;
}

.person-image {
  z-index: 3;
}

.info-div {
  flex: 100%;
}

.person-info-div {
  flex: 100%;

  z-index: 1;
}

.person-name {
  font-weight: bold;
}

.person-title {
  font-weight: bold;
}

.person-contact-div {
  flex: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.icon-style {
}

.phone-div {
  flex: 100%;
}

.email-div {
  flex: 100%;
}

.email-div-full-span {
  flex: 100%;

  justify-content: center;
  align-items: center;

  display: none;
}

/* *************************************** */

@media only screen and (min-width: 24rem) {
  /* *****
    Breakpoint specific settings
    for default width
    i.e < 24rem width
  ***** */

  .persons-card::before {
    /* ***** breakpoint data for js ***** */
    content: '{"bp":"xsmall2"}';
    display: none;
  }

  // **********

  .persons-card {
    background-image: url("/assets/personal-card-landscape.png");
    background-size: cover;
  }

  .person-card-section {
    justify-content: center;
    align-items: center;
  }

  .person-image-div {
    flex: 30%;

    height: 100%;
  }

  .info-div {
    flex: 65%;
  }

  .person-info-div {
    flex: 100%;

    padding-left: 1rem;
  }

  .person-contact-div {
    flex: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    padding-left: 1rem;
  }

  .phone-div {
    flex: 100%;
  }

  .email-div {
    flex: 100%;

    display: none;
  }

  .email-div-full-span {
    flex: 100%;

    margin-top: 1rem;

    display: flex;
  }
}

/* *************************************** */

/* Apply the variables */

.person-card-section {
  font-size: var(--normalFontSize);

  padding-top: var(--cardTopMargin);
  padding-bottom: var(--cardBottomMargin);

  padding-left: var(--cardLeftMargin);
  padding-right: var(--cardRightMargin);
}

.person-image-div {
  width: var(--imageDivWidth);
}

.person-info-div {
  margin-top: var(--infodivTopMargin);
  margin-bottom: var(--infodivBottomMargin);
}

.person-name {
  font-size: var(--personNameFontSize);
}

.separator {
  margin-top: var(--separatorMarginTop);
  margin-bottom: var(--separatorMarginBottom);
}

.icon-style {
  font-size: var(--iconFontSize);
}

.phone-div {
  margin-bottom: var(--phonedivBottomMargin);
}
</style>
