/**
 * 
 */
declare global {

interface ICard {
  keywords: string[],
  type: 'people' | 'books' | 'sources' | 'conferences' | 'videos';
  content: string;
}

interface ITag {
  name: string,
  value: string;
  url: string;
}


}

// required if we do not export anything in module
export {};