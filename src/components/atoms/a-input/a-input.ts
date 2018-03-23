import { Component, Vue } from 'vue-property-decorator'
import './a-input.scss'

@Component({
  name: 'a-input',
  template: require('./a-input.html'),
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

  public handleKeyUp(ev: KeyboardEvent): void {
    // do stuff here if you want
  }
}
