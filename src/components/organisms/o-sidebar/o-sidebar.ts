import { Component, Vue } from 'vue-property-decorator'
import './o-sidebar.scss'
import mNewsletter from '../../molecules/m-newsletter'
import aNavItem from '../../atoms/a-nav-item'

@Component({
  name: 'o-sidebar',
  template: require('./o-sidebar.html'),
  components: {
    mNewsletter,
    aNavItem,
  }
})
export class oSidebar extends Vue {

}
