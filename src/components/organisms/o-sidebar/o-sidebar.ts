import { Component, Vue } from 'vue-property-decorator'
import './o-sidebar.scss'
import mNewsletter from '../../molecules/m-newsletter'
import aNavItem from '../../atoms/a-nav-item'
import template from './o-sidebar.html'

@Component({
  template,
  components: {
    mNewsletter,
    aNavItem,
  }
})
export class oSidebar extends Vue {

}
