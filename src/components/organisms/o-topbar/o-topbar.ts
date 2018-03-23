import { Component, Vue } from 'vue-property-decorator'
import './o-topbar.scss'
import aInput from '../../atoms/a-input'

@Component({
  name: 'o-topbar',
  template: require('./o-topbar.html'),
  components: {
    aInput
  }
})
export class oTopbar extends Vue {

}
