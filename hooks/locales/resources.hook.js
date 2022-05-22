import { useRouter } from 'next/router';

export const AVAILABLE_CATEGORIES_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'music', label: 'Música' },
  { value: 'sport', label: 'Deportes' },
  { value: 'theater', label: 'Teatros y comedia' }
]

//export const COMMON_DESCRIPTION = 'hello world';

const MUSIC_RESOURCES = {
  'music-1': {
    id: 'music-1',
    title: 'Monkey concert',
    subtitle: 'sáb., jun. 28, 10:00',
    location: 'Edificio 1. Madrid',
    image: '/images/music-1.jpg',
    category: 'music',
    priceStartIn: 500,
    geometry: {
      coordinates: [40.420, -3.705]
    }
  },
  'music-2': {
    id: 'music-2',
    title: 'Baby concert',
    subtitle: 'sáb., jun. 28, 10:00',
    location: 'Edificio 1. Madrid',
    image: '/images/music-2.jpg',
    category: 'music',
    priceStartIn: 500,
    geometry: {
      coordinates: [40.429, -3.715]
    }
  },
  'music-3': {
    id: 'music-3',
    title: 'Classic music',
    subtitle: 'sáb., jun. 28, 10:00',
    location: 'Edificio 1. Madrid',
    image: '/images/music-3.jpg',
    category: 'music',
    priceStartIn: 500,
    geometry: {
      coordinates: [40.418, -3.708]
    }
  },
  'music-4': {
    id: 'music-4',
    title: 'Otro evento musical',
    subtitle: 'sáb., jun. 28, 10:00',
    location: 'Edificio 1. Madrid',
    image: '/images/music-4.jpg',
    category: 'music',
    priceStartIn: 500,
    geometry: {
      coordinates: [40.425, -3.755]
    }
  },
  
}

const SPORT_RESOURCES = {
  'sport-1': {
    id: 'sport-1',
    title: 'Diamond league ',
    subtitle: 'sáb., jun. 28, 10:00',
    location: 'Edificio 1. Madrid',
    image: '/images/sport-1.jpg',
    category: 'sport',
    priceStartIn: 500,
    geometry: {
      coordinates: [40.420, -3.705]
    }
  },
  'sport-2': {
    id: 'sport-2',
    title: 'Sport 2',
    subtitle: 'sáb., jun. 28, 10:00',
    location: 'Edificio 1. Madrid',
    image: '/images/sport-2.jpg',
    category: 'sport',
    priceStartIn: 500,
    geometry: {
      coordinates: [40.410, -3.745]
    }
  },
  'sport-3': {
    id: 'sport-3',
    title: 'Sport 3',
    subtitle: 'sáb., jun. 28, 10:00',
    location: 'Edificio 1. Madrid',
    image: '/images/sport-3.jpg',
    category: 'sport',
    priceStartIn: 500,
    geometry: {
      coordinates: [40.430, -3.685]
    }
  },
  'sport-4': {
    id: 'sport-4',
    title: 'Sport 4',
    subtitle: 'sáb., jun. 28, 10:00',
    location: 'Edificio 1. Madrid',
    image: '/images/sport-4.jpg',
    category: 'sport',
    priceStartIn: 500,
    geometry: {
      coordinates: [40.400, -3.755]
    }
  },
  'sport-5': {
    id: 'sport-5',
    title: 'Sport 4',
    subtitle: 'sáb., jun. 28, 10:00',
    location: 'Edificio 1. Madrid',
    image: '/images/sport-4.jpg',
    category: 'sport',
    priceStartIn: 500,
    geometry: {
      coordinates: [40.427, -3.700]
    }
  }
}


const TEATHER_RESOURCES = {
  'theater-1': {
    id: 'theater-1',
    title: 'Teatro 1',
    subtitle: 'sáb., jun. 28, 10:00',
    location: 'Edificio 1. Madrid',
    image: '/images/theatre-1.jpg',
    category: 'theater',
    priceStartIn: 500,
    geometry: {
      coordinates: [40.420, -3.705]
    }
  },
  'theater-2': {
    id: 'theater-2',
    title: 'Musica 2',
    subtitle: 'sáb., jun. 28, 10:00',
    location: 'Edificio 1. Madrid',
    image: '/images/theatre-2.jpg',
    category: 'theater',
    priceStartIn: 500,
    geometry: {
      coordinates: [40.425, -3.730]
    }
  },
  'theater-3': {
    id: 'theater-3',
    title: 'Musica 3',
    subtitle: 'sáb., jun. 28, 10:00',
    location: 'Edificio 1. Madrid',
    image: '/images/theatre-3.jpg',
    category: 'theater',
    priceStartIn: 500,
    geometry: {
      coordinates: [40.430, -3.745]
    }
  },
  'theater-4': {
    id: 'theater-4',
    title: 'Musica 4',
    subtitle: 'sáb., jun. 28, 10:00',
    location: 'Edificio 1. Madrid',
    image: '/images/theatre-4.jpg',
    category: 'theater',
    priceStartIn: 500,
    geometry: {
      coordinates: [40.440, -3.755]
    }
  },
  'theater-5': {
    id: 'theater-5',
    title: 'Musica 4',
    subtitle: 'sáb., jun. 28, 10:00',
    location: 'Edificio 1. Madrid',
    image: '/images/theatre-5.jpg',
    category: 'theater',
    priceStartIn: 500,
    geometry: {
      coordinates: [40.400, -3.715]
    }
  }
}

const RESOURCES = {
  ...MUSIC_RESOURCES,
  ...SPORT_RESOURCES,
  ...TEATHER_RESOURCES
}

const RESOURCES_CATEGORIES = {
    "card": {
      "title": "TKRISK Resources",
      "subtitle": "Learn how to use TKRISK through online videos, tutorials and applications.",
      "image": {
        "src": "https://websiteprodstoragene.blob.core.windows.net/images/subpage_background.webp",
        "alt": "resources-card-background"
      }
    },
    "categories": [
      {
        "id": "populares",
        "title": "Eventos populares",
        "resources": [
          "music-1",
          "theater-1",
          "sport-1",
          "music-2",
          "theater-2",
          "sport-2",
      ]
      },
      {
        "id": "music",
        "title": "Eventos musicales",
        "resources": Object.keys(MUSIC_RESOURCES)
      },
      {
        "id": "sport",
        "title": "Eventos deportivos",
        "resources": Object.keys(SPORT_RESOURCES)
      },
      {
        "id": "theater",
        "title": "Teatros y comedia",
        "resources": Object.keys(TEATHER_RESOURCES)
      },
    ]
}

export const RESOURCES_CATEGORIES_ITEMS = {
  populares: {
    "id": "populares",
    "title": "Eventos populares",
    "resources": [
      "music-1",
      "theatre-1",
      "sport-1",
      "music-2",
      "theatre-2",
      "sport-2",
  ]
  },
  music: {
    "id": "music",
    "title": "Eventos musicales",
    "resources": Object.keys(MUSIC_RESOURCES)
  },
  sport: {
    "id": "sport",
    "title": "Eventos deportivos",
    "resources": Object.keys(SPORT_RESOURCES)
  },
  theater: {
    "id": "theater",
    "title": "Teatros y comedia",
    "resources": Object.keys(TEATHER_RESOURCES)
  }
}

export const useLocaleResourcesCard = (props, functions) => {
    return RESOURCES_CATEGORIES.card;
}

export const useLocaleResourcesCategories = (props, functions) => {
    return RESOURCES_CATEGORIES.categories;
}

export const useLocaleResourcesRelated = (props, functions) => {
    return RESOURCES_CATEGORIES.related;
}


export const useLocaleResources = (props, functions) => {
  return RESOURCES;
}


const _defaultCategory = 'music';
export const useResourcesCategory = (props, functions) => {
  const router = useRouter();
  let { query: { category } } = router;
  if(!category) category = _defaultCategory;

  return { 
    category, 
    setCategory: (category) => router.push(`/events?category=${category}`) 
  };
}

export const useGetResourcesByCategory = (props, functions) => {
  const { category } = props;
  return RESOURCES_CATEGORIES_ITEMS[category].resources.map(resource => RESOURCES[resource])
}

export const useGetResourcesByIdCategory = (props, functions) => {
  const { eventId } = props;
  return eventId ? RESOURCES[eventId] : RESOURCES['music-1'];
}
