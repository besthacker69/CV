import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#E53935',
        },
        dark: {
          primary: '#D50000',
        },
      },
      dark: true,
    },
  })
