import { ReactComponent as Clock } from '../assets/icons/clock.svg';
import { ReactComponent as Camera } from '../assets/icons/camera.svg';
import { ReactComponent as PartyPopper } from '../assets/icons/party_popper.svg';
import { ReactComponent as Friends } from '../assets/icons/friends.svg';
import { ReactComponent as Suit } from '../assets/icons/suit.svg';

export const generalRules = [
  {
    title: 'Para o grande dia...',
    itemTitle: 'Chegue com antecedência',
    sentences: [
      'Não podemos nos atrasar, ok?',
      'Pedimos que seja 30 minutos antes da cerimônia.'
    ],
    icon: <Clock />
  },
  {
    title: '',
    itemTitle: 'Tire muitas fotos',
    sentences: [
      'Ajude-nos a eternizar este momento'
    ],
    icon: <Camera />
  },
  {
    title: '',
    itemTitle: 'Divirta-se muito!',
    sentences: [],
    icon: <PartyPopper />
  }
];

export const groomsmen = [
  {
    title: 'Aos nossos Padrinhos...',
    itemTitle: 'Cuide bem do noivo',
    sentences: [
      '“O amigo ama em todos os momentos; é um irmão na adversidade.” Pv 17:17'
    ],
    icon: <Friends />
  },
  {
    title: '',
    itemTitle: 'Fique elegante',
    sentences: [
      'Camisa social branca',
      'Terno na cor azul (clique no ícone do terno)',
      'gravata que lhe presenteamos'
    ],
    icon: <Suit />
  }
];