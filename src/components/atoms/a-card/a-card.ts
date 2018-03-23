import { Component, Vue } from 'vue-property-decorator'
import './a-card.scss'

@Component({
  name: 'a-card',
  template: require('./a-card.html'),
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
