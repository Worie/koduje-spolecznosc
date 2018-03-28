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
  }
})
export class aTagNavigator extends Vue {
 get name(): string {
   return this.$props.name;
 }

 get url(): string {
   return '#';
 }
 
 get value(): string {
   return this.$props.value;
 }

 public handleTagClick(): void {
   // do stuff here
   // related to router etc
   this.$store.dispatch('setTypeFilter', {
     typeFilter: this.value,
   })
 }
}
