import { Component, Vue } from 'vue-property-decorator';
import './c-button.scss';
import '../../../../node_modules/carbon-components/scss/components/button/_button.scss';
import template from './c-button.html';
import * as Carbon from 'carbon-components';

@Component({
  template,
  components: {
  },
  props: {
    content: {
      required: true,
      type: String,
    },
  }
})
export class cButton extends Vue {
  private carbonInstance: any;

  mounted() {
    this.carbonInstance = Carbon.Button.create(this.$el);
  }

  public handleSearchClick(): void {
    // console.log('japierdiszu');
  }

}
