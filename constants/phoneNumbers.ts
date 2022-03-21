import {ImageSourcePropType} from 'react-native'
import {images} from '.'
import icons from './icons'
import {Colors} from './themes'

export type telNumType = {
  id: number
  name: string
  number: string
  img: ImageSourcePropType
  description: string
}
export type studioTelNumType = {
  id: number
  name: string
  description: string
  img: ImageSourcePropType
  telNumbers: telNumType[]
  bgColor: string
  type: string
  studio: string
  price: string
  sizes: number[]
}

export type arsNumType = {
  id: number
  name: string
  number: string
  img: ImageSourcePropType
  description: string
}

export type studioArsNumType = {
  id: number
  name: string
  description: string
  img: ImageSourcePropType
  arsNumRpt: arsNumType[]
  arsNumCam: arsNumType[]
  bgColor: string
  type: string
  studio: string
  price: string
  sizes: number[]
}

export type selectionDataType = {
  title: string
  description: string
  img: ImageSourcePropType
  screen: string
  // screen: keyof RootStackParamList
}

export const studioTelNum: studioTelNumType[] = [
  {
    id: 1,
    name: 'NS-1',
    description: 'N1 Studio 전화참여용 번호',
    img: images.mapPin,
    telNumbers: [
      {
        id: 1,
        name: '[[ 대표번호 ]]',
        number: '02-2070-0001',
        img: icons.phoneAuto,
        description: 'NS-1 연결 시, 보통 쓰는 번호 통화중일 경우 자동전환 됨',
      },
      {
        id: 2,
        name: '단일번호 2',
        number: '02-781-0001',
        img: icons.phoneAuto,
        description: '단일 전화 연결용 번호 통화중일 경우 자동전환 안됨',
      },
      {
        id: 3,
        name: '단일번호 3',
        number: '02-781-0002',
        img: icons.phoneAuto,
        description: '단일 전화 연결용 번호 통화중일 경우 자동전환 안됨',
      },
      {
        id: 4,
        name: '단일번호 4',
        number: '02-781-0003',
        img: icons.phoneAuto,
        description: '단일 전화 연결용 번호 통화중일 경우 자동전환 안됨',
      },
    ],
    bgColor: Colors.NS1,
    type: 'TELEVISION',
    studio: 'NS - 1',
    price: 'TEL',
    sizes: [],
  },
  {
    id: 2,
    name: 'NS-2',
    description: 'N2 Studio 전화참여용 번호',
    img: images.bookmark,
    telNumbers: [
      {
        id: 1,
        name: '[[ 대표번호 ]]',
        number: '02-2070-0002',
        img: icons.phoneAuto,
        description: 'NS-2 연결 시, 보통 쓰는 번호 통화중일 경우 자동전환 됨',
      },
      {
        id: 2,
        name: '단일번호 2',
        number: '02-781-0001',
        img: icons.phoneAuto,
        description: '단일 전화 연결용 번호 통화중일 경우 자동전환 안됨',
      },
      {
        id: 3,
        name: '단일번호 3',
        number: '02-781-0002',
        img: icons.phoneAuto,
        description: '단일 전화 연결용 번호 통화중일 경우 자동전환 안됨',
      },
      {
        id: 4,
        name: '단일번호 4',
        number: '02-781-0003',
        img: icons.phoneAuto,
        description: '단일 전화 연결용 번호 통화중일 경우 자동전환 안됨',
      },
    ],
    bgColor: Colors.NS2,
    type: 'TELEVISION',
    studio: 'NS - 2',
    price: 'TEL',
    sizes: [],
  },
  {
    id: 3,
    name: 'NS-4',
    description: 'N4 Studio 전화참여용 번호',
    img: images.flag,
    telNumbers: [
      {
        id: 1,
        name: '[[ 대표번호 ]]',
        number: '02-2070-0004',
        img: icons.phoneAuto,
        description: 'NS-4 연결 시, 보통 쓰는 번호 통화중일 경우 자동전환 됨',
      },
      {
        id: 2,
        name: '단일번호 2',
        number: '02-781-0001',
        img: icons.phoneAuto,
        description: '단일 전화 연결용 번호 통화중일 경우 자동전환 안됨',
      },
      {
        id: 3,
        name: '단일번호 3',
        number: '02-781-0002',
        img: icons.phoneAuto,
        description: '단일 전화 연결용 번호 통화중일 경우 자동전환 안됨',
      },
      {
        id: 4,
        name: '단일번호 4',
        number: '02-781-0003',
        img: icons.phoneAuto,
        description: '단일 전화 연결용 번호 통화중일 경우 자동전환 안됨',
      },
    ],
    bgColor: Colors.NS4,
    type: '재난 MULTI',
    studio: 'NS - 4',
    price: 'TEL',
    sizes: [],
  },
  {
    id: 4,
    name: 'RAON',
    description: 'RAON Studio 전화참여용 번호',
    img: images.notebook,
    telNumbers: [
      {
        id: 1,
        name: '[[ 대표번호 ]]',
        number: '02-2070-0006',
        img: icons.phoneAuto,
        description: 'RAON연결 시, 보통 쓰는 번호 통화중일 경우 자동전환 됨',
      },
      {
        id: 2,
        name: '단일번호 2',
        number: '02-781-0001',
        img: icons.phoneAuto,
        description: '단일 전화 연결용 번호 통화중일 경우 자동전환 안됨',
      },
      {
        id: 3,
        name: '단일번호 3',
        number: '02-781-0002',
        img: icons.phoneAuto,
        description: '단일 전화 연결용 번호 통화중일 경우 자동전환 안됨',
      },
      {
        id: 4,
        name: '단일번호 4',
        number: '02-781-0003',
        img: icons.phoneAuto,
        description: '단일 전화 연결용 번호 통화중일 경우 자동전환 안됨',
      },
    ],
    bgColor: Colors.RaOn,
    type: 'INTERNET',
    studio: 'RAON',
    price: 'TEL',
    sizes: [],
  },
  {
    id: 5,
    name: '1Radio',
    description: '1Radio 뉴스 Studio 전화참여용 번호',
    img: images.radio,
    telNumbers: [
      {
        id: 1,
        name: '[[ 대표번호 ]]',
        number: '02-2070-0006',
        img: icons.phoneAuto,
        description: '1Radio연결 시, 보통 쓰는 번호 통화중일 경우 자동전환',
      },
      {
        id: 2,
        name: '단일번호 2',
        number: '02-781-0001',
        img: icons.phoneAuto,
        description: '단일 전화 연결용 번호 통화중일 경우 자동전환 안됨',
      },
      {
        id: 3,
        name: '단일번호 3',
        number: '02-781-0002',
        img: icons.phoneAuto,
        description: '단일 전화 연결용 번호 통화중일 경우 자동전환 안됨',
      },
      {
        id: 4,
        name: '단일번호 4',
        number: '02-781-0003',
        img: icons.phoneAuto,
        description: '단일 전화 연결용 번호 통화중일 경우 자동전환 안됨',
      },
    ],
    bgColor: Colors.Radio,
    type: 'Radio',
    studio: '1R News',
    price: 'TEL',
    sizes: [],
  },
]

export const studioArsNum: studioArsNumType[] = [
  {
    id: 1,
    name: 'NS-1',
    description: 'NS1 PD call, 생방송 제작 오디오(n-1) 모니터링용 ARS',
    img: images.mapPin,
    arsNumRpt: [
      {
        id: 1,
        name: '# PGM( N-1 ) #',
        number: '02-6099-7993',
        img: icons.Nmns1,
        description:
          '방송 Audio (앵커 소리 포함, 참여 기자 목소리 제외, 피디콜 제외). 일반적 참여 용도',
      },
      {
        id: 2,
        name: 'PGM(N-1) & 피디콜',
        number: '02-6099-7997',
        img: icons.Nmns1PDcall,
        description:
          '방송 Audio (앵커 소리 포함, 참여 기자 목소리 제외) & 피디콜 통합 청취',
      },
      {
        id: 3,
        name: '1TV OnAir',
        number: '02-6099-7991',
        img: icons.TV,
        description: '1TV OnAir (참여 시, 기자 목소리 메아리 침). 비상용',
      },
      {
        id: 4,
        name: '2TV OnAir',
        number: '02-6099-7992',
        img: icons.TV,
        description: '2TV OnAir (참여 시, 기자 목소리 메아리 침). 비상용',
      },
    ],
    arsNumCam: [
      {
        id: 1,
        name: '# 피디콜 Only #',
        number: '02-6099-7994',
        img: icons.PDcall,
        description: '부조 피디의 콜만 듣고 싶을 때 사용. 일반적 참여 용도',
      },
      {
        id: 2,
        name: 'PGM(N-1) & 피디콜',
        number: '02-6099-7997',
        img: icons.Nmns1PDcall,
        description:
          '방송 Audio (앵커 소리 포함, 참여 기자 목소리 제외) & 피디콜 통합 청취. 비상용',
      },
      {
        id: 3,
        name: '1TV OnAir',
        number: '02-6099-7991',
        img: icons.TV,
        description: '1TV OnAir (참여 시, 기자 목소리 메아리 침). 비상용',
      },
      {
        id: 4,
        name: '2TV OnAir',
        number: '02-6099-7992',
        img: icons.TV,
        description: '2TV OnAir (참여 시, 기자 목소리 메아리 침). 비상용',
      },
    ],
    bgColor: Colors.NS1,
    type: 'TELEVISION',
    studio: 'NS - 1',
    price: 'MNG',
    sizes: [],
  },
  {
    id: 2,
    name: 'NS-2',
    description: 'NS2 PD call, 생방송 제작 오디오(n-1) 모니터링용 ARS',
    img: images.bookmark,
    arsNumRpt: [
      {
        id: 1,
        name: '# PGM( N-1 ) #',
        number: '02-6099-7995',
        img: icons.Nmns1,
        description:
          '방송 Audio (앵커 소리 포함, 참여 기자 목소리 제외, 피디콜 제외). 일반적 참여 용도',
      },
      {
        id: 2,
        name: 'PGM(N-1) & 피디콜',
        number: '02-6099-7998',
        img: icons.Nmns1PDcall,
        description:
          '방송 Audio (앵커 소리 포함, 참여 기자 목소리 제외) & 피디콜 통합 청취',
      },
      {
        id: 3,
        name: '1TV OnAir',
        number: '02-6099-7991',
        img: icons.TV,
        description: '1TV OnAir (참여 시, 기자 목소리 메아리 침). 비상용',
      },
      {
        id: 4,
        name: '2TV OnAir',
        number: '02-6099-7992',
        img: icons.TV,
        description: '2TV OnAir (참여 시, 기자 목소리 메아리 침). 비상용',
      },
    ],
    arsNumCam: [
      {
        id: 1,
        name: '# 피디콜 Only #',
        number: '02-6099-7996',
        img: icons.PDcall,
        description: '부조 피디의 콜만 듣고 싶을 때 사용. 일반적 참여 용도',
      },
      {
        id: 2,
        name: 'PGM(N-1) & 피디콜',
        number: '02-6099-7998',
        img: icons.Nmns1PDcall,
        description:
          '방송 Audio (앵커 소리 포함, 참여 기자 목소리 제외) & 피디콜 통합 청취. 비상용',
      },
      {
        id: 3,
        name: '1TV OnAir',
        number: '02-6099-7991',
        img: icons.TV,
        description: '1TV OnAir (참여 시, 기자 목소리 메아리 침). 비상용',
      },
      {
        id: 4,
        name: '2TV OnAir',
        number: '02-6099-7992',
        img: icons.TV,
        description: '2TV OnAir (참여 시, 기자 목소리 메아리 침). 비상용',
      },
    ],
    bgColor: Colors.NS2,
    type: 'TELEVISION',
    studio: 'NS - 2',
    price: 'MNG',
    sizes: [],
  },
  {
    id: 3,
    name: 'NS-4',
    description: 'NS4 PD call, 생방송 제작 오디오(n-1) 모니터링용 ARS',
    img: images.flag,
    arsNumRpt: [
      {
        id: 1,
        name: '# PGM( N-1 ) #',
        number: '02-6099-7985',
        img: icons.Nmns1,
        description:
          '방송 Audio (앵커 소리 포함, 참여 기자 목소리 제외, 피디콜 제외). 일반적 참여 용도',
      },
      {
        id: 2,
        name: '1TV OnAir',
        number: '02-6099-7991',
        img: icons.TV,
        description: '1TV OnAir (참여 시, 기자 목소리 메아리 침). 비상용',
      },
      {
        id: 3,
        name: '2TV OnAir',
        number: '02-6099-7992',
        img: icons.TV,
        description: '2TV OnAir (참여 시, 기자 목소리 메아리 침). 비상용',
      },
    ],
    arsNumCam: [
      {
        id: 1,
        name: '# 피디콜 Only #',
        number: '02-6099-7986',
        img: icons.PDcall,
        description: '부조 피디의 콜만 듣고 싶을 때 사용. 일반적 참여 용도',
      },
      {
        id: 2,
        name: '1TV OnAir',
        number: '02-6099-7991',
        img: icons.TV,
        description: '1TV OnAir (참여 시, 기자 목소리 메아리 침). 비상용',
      },
      {
        id: 3,
        name: '2TV OnAir',
        number: '02-6099-7992',
        img: icons.TV,
        description: '2TV OnAir (참여 시, 기자 목소리 메아리 침). 비상용',
      },
    ],
    bgColor: Colors.NS4,
    type: '재난 MULTI',
    studio: 'NS - 4',
    price: 'MNG',
    sizes: [],
  },
  {
    id: 4,
    name: 'RAON',
    description: 'RAON PD call, 생방송 제작 오디오(n-1) 모니터링용 ARS',
    img: images.notebook,
    arsNumRpt: [
      {
        id: 1,
        name: '# PGM( N-1 ) #',
        number: '02-6099-7993',
        img: icons.Nmns1,
        description:
          '방송 Audio (앵커 소리 포함, 참여 기자 목소리 제외, 피디콜 제외). 일반적 참여 용도',
      },
      {
        id: 2,
        name: 'PGM(N-1) & 피디콜',
        number: '02-6099-7993',
        img: icons.Nmns1PDcall,
        description:
          '방송 Audio (앵커 소리 포함, 참여 기자 목소리 제외) & 피디콜 통합 청취',
      },
    ],
    arsNumCam: [
      {
        id: 1,
        name: '# 피디콜 Only #',
        number: '02-6099-7993',
        img: icons.PDcall,
        description: '부조 피디의 콜만 듣고 싶을 때 사용. 일반적 참여 용도',
      },
      {
        id: 2,
        name: 'PGM(N-1) & 피디콜',
        number: '02-6099-7993',
        img: icons.Nmns1PDcall,
        description:
          '방송 Audio (앵커 소리 포함, 참여 기자 목소리 제외) & 피디콜 통합 청취. 비상용',
      },
    ],
    bgColor: Colors.RaOn,
    type: 'INTERNET',
    studio: 'RAON',
    price: 'MNG',
    sizes: [],
  },
]

export const studioConNum: studioTelNumType[] = [
  {
    id: 1,
    name: 'NS-1',
    description: 'NS-1 주요 연락처',
    img: images.mapPin,
    telNumbers: [
      {
        id: 1,
        name: 'NS-1 PD',
        number: '02-780-1111',
        img: icons.phoneContact,
        description: 'NS-1 PD석 전화',
      },
      {
        id: 2,
        name: 'NS-1 영상감독',
        number: '02-780-1112',
        img: icons.phoneContact,
        description: 'NS-1 영상감독',
      },
      {
        id: 3,
        name: 'NS-1 음향감독',
        number: '02-780-1113',
        img: icons.phoneContact,
        description: 'NS-1 영상감독',
      },
    ],
    bgColor: Colors.NS1,
    type: '일반 연락처',
    studio: 'NS - 1',
    price: 'TEL',
    sizes: [],
  },
  {
    id: 2,
    name: 'NS-2',
    description: 'NS-2 주요 연락처',
    img: images.bookmark,
    telNumbers: [
      {
        id: 1,
        name: 'NS-2 PD',
        number: '02-780-1115',
        img: icons.phoneContact,
        description: 'NS-2 PD석',
      },
      {
        id: 2,
        name: 'NS-2 영상감독',
        number: '02-780-1116',
        img: icons.phoneContact,
        description: 'NS-2 영상감독',
      },
      {
        id: 3,
        name: 'NS-2 음향감독',
        number: '02-780-1117',
        img: icons.phoneContact,
        description: 'NS-2 영상감독',
      },
    ],
    bgColor: Colors.NS2,
    type: '일반 연락처',
    studio: 'NS - 2',
    price: 'TEL',
    sizes: [],
  },
  {
    id: 3,
    name: 'NS-4',
    description: 'NS-4 주요 연락처',
    img: images.flag,
    telNumbers: [
      {
        id: 1,
        name: 'NS-4 PD',
        number: '02-780-1118',
        img: icons.phoneContact,
        description: 'NS-4 PD석',
      },
      {
        id: 2,
        name: 'NS-4 영상감독',
        number: '02-780-1119',
        img: icons.phoneContact,
        description: 'NS-4 영상감독',
      },
      {
        id: 3,
        name: 'NS-4 음향감독',
        number: '02-780-1120',
        img: icons.phoneContact,
        description: 'NS-4 영상감독',
      },
    ],
    bgColor: Colors.NS4,
    type: '일반 연락처',
    studio: 'NS-4 재난',
    price: 'TEL',
    sizes: [],
  },
  {
    id: 4,
    name: 'RAON',
    description: 'RAON 주요 연락처',
    img: images.notebook,
    telNumbers: [
      {
        id: 1,
        name: 'RAON PD',
        number: '02-780-1121',
        img: icons.phoneContact,
        description: 'RAON PD석',
      },
      {
        id: 2,
        name: 'RAON 영상감독',
        number: '02-780-1122',
        img: icons.phoneContact,
        description: 'RAON 영상감독',
      },
      {
        id: 3,
        name: 'RAON 음향감독',
        number: '02-780-1123',
        img: icons.phoneContact,
        description: 'RAON 영상감독',
      },
    ],
    bgColor: Colors.RaOn,
    type: '일반 연락처',
    studio: 'RAON',
    price: 'TEL',
    sizes: [],
  },
  {
    id: 5,
    name: 'NDC',
    description: 'NDC(MNG수신기 위치) 연락처',
    img: images.link2,
    telNumbers: [
      {
        id: 1,
        name: 'NDC TD1',
        number: '02-780-1111',
        img: icons.phoneContact,
        description: 'NDC 기술감독',
      },
      {
        id: 2,
        name: 'NDC TD2',
        number: '02-780-1111',
        img: icons.phoneContact,
        description: 'NDC 기술감독',
      },
    ],
    bgColor: Colors.NDC,
    type: '일반 연락처',
    studio: 'NDC',
    price: 'TEL',
    sizes: [],
  },
  {
    id: 6,
    name: '1Radio',
    description: '1Radio 뉴스 부조 연락처',
    img: images.radio,
    telNumbers: [
      {
        id: 1,
        name: '1Radio PD',
        number: '02-780-1111',
        img: icons.phoneContact,
        description: '1Radio 뉴스부조 PD석 연락처',
      },
      {
        id: 2,
        name: '1Radio PD',
        number: '02-780-1111',
        img: icons.phoneContact,
        description: '1Radio 뉴스부조 공용 연락처',
      },
    ],
    bgColor: Colors.Radio,
    type: '일반 연락처',
    studio: '1R News',
    price: 'TEL',
    sizes: [],
  },
]

export const selectionData: selectionDataType[] = [
  {
    title: '부조 전화연결',
    description:
      '전화연결로 생방송에 참여 시, 담당 기자가 사용하는 전화번호 모음 ',
    img: images.selectionImg1,
    screen: 'TelOnAir',
  },
  {
    title: 'MNG참여 - 기자',
    description:
      'MNG 연결 시, ARS를 통해 기자가 앵커목소리를 듣고 싶을때 사용. (N-1)',
    img: images.selectionImg2,
    screen: 'MNGRpt',
  },
  {
    title: 'MNG참여 - 촬영기자',
    description:
      'MNG 연결 시, ARS를 통해 촬영기자가 PD Call을 듣고 싶을때 사용 ',
    img: images.selectionImg3,
    screen: 'MNGCam',
  },
]
