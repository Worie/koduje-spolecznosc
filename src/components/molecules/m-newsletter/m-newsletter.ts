import { Component, Vue } from 'vue-property-decorator'
import './m-newsletter.scss'
import aInput from '../../atoms/a-input'
import aButton from '../../atoms/a-button'

@Component({
  name: 'm-newsletter',
  template: './m-newsletter.html',
  components: {
    aInput,
    aButton,
  }
})
export class mNewsletter extends Vue {

}
