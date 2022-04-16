<template>
  <div style="background-image: url('/assets/logistics_bg.jpg')">

  <q-layout view="hHh LpR fFf">

    <q-header elevated class="bg-transparent">
      <q-toolbar class="top-toolbar">

        <q-btn class="text-accent" dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <div style="height: 4.3rem">
            <img src="../assets/log_01.png" style="padding-top: 0.5rem; padding-bottom: 1rem; height: 100%">
          </div>
        </q-toolbar-title>

        <div class="q-gutter-sm">
          <q-btn
            v-for="navlink in navlinks"
            :key="navlink.no"
            class="tp-menu"
            :icon="navlink.icon"
            :label="navlink.label"
            stack
            glossy
            color="purple"
            size="sm"
            :to="navlink.link"
          />
        </div>

        <div style="width: 10px">&nbsp;</div>

        <q-btn class="text-accent" dense flat round icon="menu" @click="toggleRightDrawer" />

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" :width="250">
      <!-- drawer content -->

      <div class="side-drawer" style="height: 100%">

      <q-list>

        <q-item
          v-for="navlink in navlinks"
          :key="navlink.no"
          active-class="tab-active text-white shadow-1 rounded-borders"
          :to="navlink.link"
          exact
          class="q-ma-md inactive text-grey-9"
          clickable
          v-ripple
        >
          <q-item-section>
            <div>
            <q-icon :name="navlink.icon" style="font-size: 2em" />&nbsp;&nbsp;&nbsp;{{ navlink.label }}
            </div>
          </q-item-section>

        </q-item>

      </q-list>

      </div>

    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" :width="250">
      <!-- drawer content -->

      <div class="side-drawer" style="height: 100%">

        <q-card class="q-ma-md right-panel">
          <div class="q-px-md q-py-sm">
            <div class="q-pb-xs text-h6 text-white" v-html="cname">
            </div>
            <q-separator dark />
            <div class="q-py-xs text-caption fb" v-html="address">
            </div>
            <q-separator dark />
            <div class="q-pt-xs text-caption fb" v-html="tel">
            </div>
          </div>
        </q-card>

        <div class="columns items-start">
          <q-card class="bottom-toolbar" style="margin-top: 1rem; margin-left: 0.5rem">
          <div class="col">

          </div>
          </q-card>
          <div class="col">

          </div>
          <div class="col q-ml-md">
            <q-card class="bg-white">
              <img src="../assets/log_01.png" style="height: 60px; width: 120px">
            </q-card>
          </div>
        </div>

      </div>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-transparent">
      <q-toolbar class="bottom-toolbar">
        <q-toolbar-title>


          <div style="height: 0.3rem">&nbsp;</div>

          <q-separator dark />

          <div class="text-center fb q-pt-xs text-caption">&#169; {{ copyright }}</div>

        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>

  </div>
</template>

<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    const navlinks = ref(
      [
        {
          'no': '1',
          'name': 'home',
          'link': '/',
          'icon': 'home',
          'label': 'Home'
        },
        {
          'no': '2',
          'name': 'aboutus',
          'link': '/aboutus',
          'icon': 'contacts',
          'label': 'About Us'
        },
        {
          'no': '3',
          'name': 'services',
          'link': '/services',
          'icon': 'support_agent',
          'label': 'Services'
        },
        {
          'no': '4',
          'name': 'clients',
          'link': '/clients',
          'icon': 'lan',
          'label': 'Clients'
        },
        {
          'no': '5',
          'name': 'contactus',
          'link': '/contactus',
          'icon': 'contact_phone',
          'label': 'Contact Us'
        }
      ]
    );

    const cname = 'Carrier Cargo';

    const address = '\
    Old 142, New 293, II Floor, <br>\
    Linghi Chetty Street,<br>\
    Parrys, Chennai - 600001,<br>\
    Tamilnadu, INDIA.';

    const tel = '\
    <span class="material-icons">call</span> : +91 44 42084456, <br>\
    <span style="color: transparent"><span class="material-icons">call</span> : </span>+91 44 25213232<br>\
    <span class="material-icons">email</span> : contactus@carriercargo.in';

    const copyright = 'Carrier Cargo';

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },

      navlinks,

      cname,
      address,
      tel,
      copyright
    }
  }
})
</script>

<style lang="scss" scoped>

$accentlt : lighten($accent, 10%);
$accentinactive : lighten($accent, 50%);

$purplebg: radial-gradient(circle, lighten($deep-purple-10, 20%) 0%, $deep-purple-10 100%);

$purplebglt: radial-gradient(circle, lighten($deep-purple-10, 60%) 0%, lighten($deep-purple-10, 40%) 100%);

.tab-active {
  background: $purplebg !important;
  color: white !important;
}

.inactive {
  background: $purplebglt;
  font-weight: bold;
  border-radius: 0.25rem;
  margin-top: 1rem;
  margin-right: 1rem;
}

.top-toolbar {
  width: 100%;
  background: radial-gradient(circle, lighten($warning, 20%) 0%, $warning 100%);
  color: white;
}

.bottom-toolbar {
  width: 100%;
  background: $purplebg;
  color: white;
}

.right-panel {
  background: $purplebg;
  color: white;
}

.side-drawer {
  background-image: url('/assets/logistics_bg.jpg');
  overflow: hidden;
}

.fb {
  font-size: 0.75rem;
  font-weight: bold;
  color: white;
}


.tp-menu {
  width: 6rem;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: bold;
  font-style: normal;
  font-size: 1rem !important;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}

@media only screen and (max-width: 750px) {

  .tp-menu {
    display: none;
  }

}

</style>
