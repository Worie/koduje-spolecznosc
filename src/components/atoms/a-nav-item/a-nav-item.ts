import { Component, Vue } from 'vue-property-decorator'
import './a-nav-item.scss'
import template from './a-nav-item.html'

@Component({
  template,
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
    iconName: {
      required: true,
      type: String,
    },
  }
})
export class aNavItem extends Vue {

}
