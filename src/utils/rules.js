import { AiOutlineCalendar, AiOutlineCamera } from 'react-icons/ai';
import { IoMdPin } from 'react-icons/io';
import { GiClothes, GiAmpleDress, GiThreeFriends } from 'react-icons/gi';
import { BsClockHistory } from 'react-icons/bs';
import { BiChurch } from 'react-icons/bi';


export const dateHour = [
  {
    id: 'generalRules-time',
    title: 'Datas e Horários',
    itemTitle: 'Ensaio',
    sentences: [
      'A definir',
    ],
    icon: <AiOutlineCalendar style={{ width: 30, height: 30 }} />, 
  },
  {
    id: 'generalRules-photos',
    title: '',
    itemTitle: 'Cerimônia',
    sentences: [
      'Dia 04 de dezembro de 2022',
      '19:00',
    ],
    icon: <BiChurch style={{ width: 30, height: 30 }} />
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
    icon: <GiThreeFriends style={{ width: 42, height: 42 }} color="#2D3047" />
  },
  {
    id: 'groomsmen-elegant-man',
    title: '',
    itemTitle: 'Fique elegante',
    inspirationUrl: 'https://pin.it/39ejHan',
    sentences: [
      'Camisa social branca',
      'Terno na cor azul',
      'gravata que lhe presenteamos',
      'Clique na aba Inspirações do menu principal para dar uma olhadinha em alguns estilos que adoraríamos te ver usando!'
    ],
    icon: <GiClothes style={{ width: 65, height: 65 }} color="#2D3047" />
  }
];

export const bridesmaid = [
  {
    id: 'bridesmaid-care-bride',
    title: 'Às nossas Madrinhas...',
    itemTitle: 'Cuide bem da noiva!',
    sentences: [
      '“O amigo ama em todos os momentos; é um irmão na adversidade.” Pv 17:17'
    ],
    icon: <GiThreeFriends style={{ width: 42, height: 42 }} color="#2D3047" />
  },
  {
    id: 'bridesmaid-elegant-women',
    title: '',
    itemTitle: 'Fique elegante!',
    inspirationUrl: 'https://pin.it/6CuPK65',
    sentences: [
      'Antes de qualquer coisa, queremos que você se sinta linda e bem vestida.',
      'Fique a vontade para escolher o modelo que você se sentir melhor.',
      'Use vestido longo e que siga a cor indicada que é parecida com a cor da gravata do padrinho.',
      'Use também o colar e o esmalte que escolhemos com tanto carinho',
      'Clique na aba Inspirações do menu principal para dar uma olhadinha em alguns estilos que adoraríamos te ver usando!'
    ],
    icon: <GiAmpleDress style={{ width: 65, height: 65 }} />
  }
];

export const tips = [
  {
    id: 'tip-1',
    title: 'Dicas',
    itemTitle: 'Chegue com antecedência',
    sentences: [
      'Não podemos nos atrasar, ok?',
      'Pedimos que seja 30 minutos antes da cerimônia.'
    ],
    icon: <BsClockHistory style={{ width: 30, height: 30 }} />
  },
  {
    id: 'tip-2',
    title: '',
    itemTitle: 'Tire muitas fotos!',
    sentences: [
      'Ajude-nos a eternizar esse momento!',
    ],
    icon: <AiOutlineCamera style={{ width: 30, height: 30 }} />
  }
];

export const inspiration = [
  {
    title: 'Inspirações',
  }
];

export const address = [
  {
    id: 'address',
    title: 'Endereço',
    itemTitle: '',
    sentences: [
      'Avenida Benjamim Brasil, 570 - Maraponga, Fortaleza - CE, 60762-080'
    ],
    icon: <IoMdPin style={{ width: 30, height: 30 }} />,
    addressMapUrl: 'https://maps.google.com/maps?q=Avenida,%20Rua%20Benjamim%20Brasil,%20570%20-%20Maraponga,%20Fortaleza%20-%20CE,%2060762-080&t=&z=15&ie=UTF8&iwloc=&output=embed',
  }
];
