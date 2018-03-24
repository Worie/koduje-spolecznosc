import { Component, Vue } from 'vue-property-decorator'
import './o-sidebar.scss'
import mNewsletter from '../../molecules/m-newsletter'
import mNavItem from '../../molecules/m-nav-item'

@Component({
  name: 'o-sidebar',
  template: require('./o-sidebar.html'),
  components: {
    mNewsletter,
    mNavItem,
  }
})
export class oSidebar extends Vue {

}
