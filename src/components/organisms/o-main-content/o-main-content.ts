import { Component, Vue } from 'vue-property-decorator'

// terrible - path should always be absolute
import oSidebar from '../../organisms/o-sidebar'

import './o-main-content.scss'

@Component({
  name: 'o-main-content',
  template: require('./o-main-content.html'),
  components: {
    oSidebar,
  }
})
export class oMainContent extends Vue {

}
