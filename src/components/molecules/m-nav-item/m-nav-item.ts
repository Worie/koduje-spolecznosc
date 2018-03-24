import { Component, Vue } from 'vue-property-decorator'
import './m-nav-item.scss'

@Component({
  name: 'm-nav-item',
  template: require('./m-nav-item.html'),
  components: {
  },
  props: {
    content: {
      required: true,
      type: String,
    },
    href: {
      required: true,
      type: String,
    },
    liClass: {
      required: true,
      type: String,
    },
  }
})
export class mNavItem extends Vue {

}
