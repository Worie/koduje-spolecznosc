import { Component, Vue } from 'vue-property-decorator'
import './a-input.scss'
import template from './a-input.html'


@Component({
  template,
  components: {
  },
  props: {
    example: {
      type: String,
      required: false,
      default: 'text',
    },
  }
})
export class aInput extends Vue {
  get cardFilter(): string {
    return this.$store.getters.cardFilter;
  }

  set cardFilter(newValue: string) {
    this.$store.dispatch('setCardFilter', {
      cardFilter: newValue,
    });
  }
}
