import { Component, Vue } from 'vue-property-decorator'
import './o-sidebar.scss'
import mNewsletter from '../../molecules/m-newsletter'

@Component({
  name: 'o-sidebar',
  template: require('./o-sidebar.html'),
  components: {
    mNewsletter,
  }
})
export class oSidebar extends Vue {

}
