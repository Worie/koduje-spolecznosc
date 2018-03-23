import { Component, Vue } from 'vue-property-decorator'
import './m-newsletter.scss'
import aInput from '../../atoms/a-input'

@Component({
  name: 'm-newsletter',
  template: require('./m-newsletter.html'),
  components: {
    aInput
  }
})
export class mNewsletter extends Vue {

}
