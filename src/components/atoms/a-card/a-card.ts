import { Component, Vue } from 'vue-property-decorator'
import './a-card.scss'
import template from './a-card.html'

@Component({
  template,
  components: {
  },
  props: {
    data: {
      required: true,
      types: Object,
    },
  }
})
export class aCard extends Vue {

  get card(): ICard {
    return this.$props.data;
  }
}
