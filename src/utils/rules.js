import { ReactComponent as Clock } from '../assets/icons/clock.svg';
import { ReactComponent as Camera } from '../assets/icons/camera.svg';
import { ReactComponent as PartyPopper } from '../assets/icons/party_popper.svg';
import { ReactComponent as Friends } from '../assets/icons/friends.svg';
import { ReactComponent as Suit } from '../assets/icons/suit.svg';
import { ReactComponent as Dress } from '../assets/icons/dress.svg';
import { ReactComponent as MapPin } from '../assets/icons/pin.svg';

export const generalRules = [
  {
    id: 'generalRules-time',
    title: 'Para o grande dia...',
    itemTitle: 'Chegue com antecedência',
    sentences: [
      'Não podemos nos atrasar, ok?',
      'Pedimos que seja 30 minutos antes da cerimônia.'
    ],
    icon: <Clock />
  },
  {
    id: 'generalRules-photos',
    title: '',
    itemTitle: 'Tire muitas fotos',
    sentences: [
      'Ajude-nos a eternizar este momento'
    ],
    icon: <Camera />
  },
  {
    id: 'generalRules-fun',
    title: '',
    itemTitle: 'Divirta-se muito!',
    sentences: [],
    icon: <PartyPopper />
  }
];

export const groomsmen = [
  {
    id: 'groomsmen-care-groom',
    title: 'Aos nossos Padrinhos...',
    itemTitle: 'Cuide bem do noivo',
    sentences: [
      '“O amigo ama em todos os momentos; é um irmão na adversidade.” Pv 17:17'
    ],
    icon: <Friends />
  },
  {
    id: 'groomsmen-elegant-man',
    title: '',
    itemTitle: 'Fique elegante',
    inspirationUrl: 'https://pin.it/39ejHan',
    sentences: [
      'Camisa social branca',
      'Terno na cor azul (clique no ícone do terno)',
      'gravata que lhe presenteamos'
    ],
    icon: <Suit />
  }
];

export const bridesmaid = [
  {
    id: 'bridesmaid-care-bride',
    title: 'Às nossas Madrinhas...',
    itemTitle: 'Cuide bem da noiva',
    sentences: [
      '“O amigo ama em todos os momentos; é um irmão na adversidade.” Pv 17:17'
    ],
    icon: <Friends />
  },
  {
    id: 'bridesmaid-elegant-women',
    title: '',
    itemTitle: 'Fique elegante',
    inspirationUrl: 'https://pin.it/6CuPK65',
    sentences: [
      'Antes de qualquer coisa, queremos que você se sinta linda e bem vestida.',
      'Fique a vontade para escolher o modelo que você se sentir melhor.',
      'Use vestido longo e que siga a cor indicada - clique no ícone do vestido - que é parecida com a cor da gravata do padrinho.',
      'Use também o colar e o esmalte que escolhemos com tanto carinho'
    ],
    icon: <Dress />
  }
];

export const inspiration = [
  {
    title: 'Inspirações',
  }
]

export const address = [
  {
    id: 'address',
    title: 'Endereço',
    itemTitle: 'Avenida Benjamim Brasil, 570 - Maraponga, Fortaleza - CE, 60762-080',
    sentences: [],
    icon: <MapPin />,
    addressMapUrl: 'https://maps.google.com/maps?q=Avenida,%20Rua%20Benjamim%20Brasil,%20570%20-%20Maraponga,%20Fortaleza%20-%20CE,%2060762-080&t=&z=15&ie=UTF8&iwloc=&output=embed',
  }
] 