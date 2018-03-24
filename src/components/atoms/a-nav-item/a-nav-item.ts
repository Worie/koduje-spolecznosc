import { Component, Vue } from 'vue-property-decorator'
import './a-nav-item.scss'

@Component({
  name: 'a-nav-item',
  template: require('./a-nav-item.html'),
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
