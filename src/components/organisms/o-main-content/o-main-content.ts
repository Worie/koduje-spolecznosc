import { Component, Vue } from 'vue-property-decorator';

// terrible - path should always be absolute
import oSidebar from '../../organisms/o-sidebar';
import aCard from '../../atoms/a-card';
import aTagNavigator from '../../atoms/a-tag-navigator';
import './o-main-content.scss';

import template from './o-main-content.html';

@Component({
  template,
  components: {
    oSidebar,
    aCard,
    aTagNavigator,
  }
})
export class oMainContent extends Vue {
  get entries(): ICard[] {
    return [{
      keywords: ['html', 'css', 'js'],
      type: 'people',
      content: 'Wojtusiek'
    },
    {
      keywords: ['html', 'css'],
      type: 'people',
      content: 'Nie wojtuśiek'
    },
    {
      keywords: ['html', 'css', 'js'],
      type: 'people',
      content: 'Jakub'
    },
    {
      keywords: ['html', 'css'],
      type: 'books',
      content: 'Damian ksiązka'
    },
    {
      keywords: ['css'],
      type: 'books',
      content: 'flexbox wojt'
    },
    {
      keywords: ['html', 'css', 'js'],
      type: 'sources',
      content: 'Comandeer strona'
    },
    {
      keywords: ['js'],
      type: 'conferences',
      content: 'YDKJS 2016'
    }];
  }

  get tags(): ITag[] {
    return [{
      name: 'Wszystko',
      value: 'all',
      url: '#all',
    },
    {
      name: 'Książki',
      value: 'books',
      url: '#books',
    },
    {
      name: 'Źródła',
      value: 'sources',
      url: '#sources',
    },
    {
      name: 'Cool People',
      value: 'people',
      url: '#people',
    },
    {
      name: 'Meet.js',
      value: 'meetjs',
      url: '#meetjs',
    },
    {
      name: 'Konferencje',
      value: 'conferences',
      url: '#conferences',
    },
    {
      name: 'Video',
      value: 'video',
      url: '#video',
    }];
  }

  get filteredEntries(): ICard[] {
    return this.entries.filter(card => this.cardCanBeShown(card));
  }

  public cardCanBeShown(card: ICard): boolean {
    const cardFilter = this.$store.getters.cardFilter;
    const typeFilter = this.$store.getters.typeFilter;

    if (typeFilter  && typeFilter !== card.type && typeFilter !== 'all') {
      return false;
    }

    if (
      (cardFilter === '' && (!typeFilter  || typeFilter == 'all')) ||
      card.content.indexOf(cardFilter) > -1 ||
      card.keywords.indexOf(cardFilter) > -1
    ) {
      return true;
    }

    return false;
  }
}
