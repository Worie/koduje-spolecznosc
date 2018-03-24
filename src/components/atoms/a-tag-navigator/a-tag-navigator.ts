import { Component, Vue } from 'vue-property-decorator'
import './a-tag-navigator.scss'

@Component({
  name: 'a-tag-navigator',
  template: require('./a-tag-navigator.html'),
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
