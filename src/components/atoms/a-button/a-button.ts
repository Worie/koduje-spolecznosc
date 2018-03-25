import { Component, Vue } from 'vue-property-decorator'
import './a-button.scss'

@Component({
  name: 'a-button',
  template: './a-button.html',
  components: {
  },
  props: {
    content: {
      required: true,
      type: String,
    },
  }
})
export class aButton extends Vue {

}
