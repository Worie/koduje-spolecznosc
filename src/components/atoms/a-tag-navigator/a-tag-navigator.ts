import { Component, Vue } from 'vue-property-decorator'
import './a-tag-navigator.scss'
import template from './a-tag-navigator.html'

@Component({
  template,
  components: {
  },
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
    value: {
      type: String,
      required: true,
      default: '',
    },
    url: {
      type: String,
      required: false,
      default: '#',
    }
  }
})
export class aTagNavigator extends Vue {
 public handleTagClick(): void {
   // do stuff here
   // related to router etc
   this.$store.dispatch('setTypeFilter', {
     typeFilter: this.$props.value,
   })
 }
}
