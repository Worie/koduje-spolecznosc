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
      required: true,
      default: 'text',
    },
  }
})
export class aInput extends Vue {
  
  get test(): string {
    return this.$store.getters.test;
  }

  set test(newValue: string) {
    this.$store.dispatch('setTest', {
      test: newValue,
    });
  }

  public handleKeyUp(ev: KeyboardEvent): void {
    // do stuff here if you want
  }
}
