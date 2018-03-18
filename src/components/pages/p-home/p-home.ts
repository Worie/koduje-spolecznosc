import { Component, Vue } from 'vue-property-decorator'

// terrible - path should always be absolute 
import oTopbar from '../../organisms/o-topbar'
import oMainContent from '../../organisms/o-main-content'

// it'd be cool if we didnt have to explicitly load those,too
import './p-home.scss'

@Component({
  template: require('./p-home.html'),
  components: {
    oTopbar,
    oMainContent
  }
})
export class pHome extends Vue {
 
}
