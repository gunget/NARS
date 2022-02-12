import {ImageSourcePropType} from 'react-native'
import {images} from '.'

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
  price: string
  sizes: number[]
}

export const studioTelNum: studioTelNumType[] = [
  {
    id: 1,
    name: 'NS-1',
    description: 'N1 Studio 전화참여용 번호',
    img: images.nikeMetcon3,
    telNumbers: [
      {
        id: 1,
        name: '자동연결',
        number: '02-2070-0001',
        img: images.nikeMetconFree,
        description: '대표 전화번호로 이 번호로만 걸어도 NS-1에 동시연결 가능',
      },
      {
        id: 2,
        name: '전화연결2',
        number: '02-781-0001',
        img: images.nikeMetcon5Purple,
        description: '단일 전화 연결용 번호2',
      },
      {
        id: 3,
        name: '전화연결3',
        number: '02-781-0002',
        img: images.nikeZoomKobe1Proto,
        description: '단일 전화 연결용 번호3',
      },
      {
        id: 4,
        name: '전화연결4',
        number: '02-781-0003',
        img: images.nikeMetconFree,
        description: '단일 전화 연결용 번호4',
      },
    ],
    bgColor: '#BF012C',
    type: 'RUNNING',
    price: '$186',
    sizes: [6, 7, 8, 9, 10],
  },
  {
    id: 2,
    name: 'NS-2',
    description: 'N2 Studio 전화참여용 번호',
    img: images.nikeZoomKobe1Proto,
    telNumbers: [
      {
        id: 1,
        name: '자동연결',
        number: '02-2070-0002',
        img: images.nikeMetcon5Black,
        description: '대표 전화번호로 이 번호로만 걸어도 NS-2에 동시연결 가능',
      },
      {
        id: 2,
        name: '전화연결2',
        number: '02-781-0001',
        img: images.nikeMetcon3,
        description: '단일 전화 연결용 번호2',
      },
      {
        id: 3,
        name: '전화연결3',
        number: '02-781-0002',
        img: images.nikeMetcon6,
        description: '단일 전화 연결용 번호3',
      },
      {
        id: 4,
        name: '전화연결4',
        number: '02-781-0003',
        img: images.nikeMetcon5Black,
        description: '단일 전화 연결용 번호4',
      },
    ],
    bgColor: '#D39C67',
    type: 'TRAINING',
    price: '$135',
    sizes: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    id: 3,
    name: 'NS-4',
    description: 'N4 Studio 전화참여용 번호',
    img: images.nikeMetcon6,
    telNumbers: [
      {
        id: 1,
        name: '자동연결',
        number: '02-2070-0004',
        img: images.nikeMetcon4,
        description: '대표 전화번호로 이 번호로만 걸어도 NS-4에 동시연결 가능',
      },
      {
        id: 2,
        name: '전화연결2',
        number: '02-781-0001',
        img: images.nikeMetcon5Purple,
        description: '단일 전화 연결용 번호2',
      },
      {
        id: 3,
        name: '전화연결3',
        number: '02-781-0002',
        img: images.nikeMetcon5Black,
        description: '단일 전화 연결용 번호3',
      },
      {
        id: 4,
        name: '전화연결4',
        number: '02-781-0003',
        img: images.nikeMetconFree,
        description: '단일 전화 연결용 번호4',
      },
    ],
    bgColor: '#7052A0',
    type: 'BASKETBALL',
    price: '$199',
    sizes: [6, 7, 8, 9],
  },
  {
    id: 4,
    name: 'RAON',
    description: 'RAON Studio 전화참여용 번호',
    img: images.nikeMetcon5Black,
    telNumbers: [
      {
        id: 1,
        name: '자동연결',
        number: '02-2070-0006',
        img: images.nikePegasus36,
        description: '대표 전화번호로 이 번호로만 걸어도 RAON에 동시연결 가능',
      },
      {
        id: 2,
        name: '전화연결2',
        number: '02-781-0001',
        img: images.nikeMetcon5Black,
        description: '단일 전화 연결용 번호2',
      },
      {
        id: 3,
        name: '전화연결3',
        number: '02-781-0002',
        img: images.nikeZoomKobe1Proto,
        description: '단일 전화 연결용 번호3',
      },
      {
        id: 4,
        name: '전화연결4',
        number: '02-781-0003',
        img: images.nikeMetcon5Black,
        description: '단일 전화 연결용 번호4',
      },
    ],
    bgColor: '#BF012C',
    type: 'RUNNING',
    price: '$186',
    sizes: [6, 7, 8, 9, 10],
  },
]

export const studioArsNum: studioArsNumType[] = [
  {
    id: 1,
    name: 'NS-1',
    description: 'NS1 PD call, 생방송 제작 오디오(n-1) 모니터링용 ARS',
    img: images.nikeMetcon3,
    arsNumRpt: [
      {
        id: 1,
        name: 'N-1',
        number: '02-6099-7993',
        img: images.nikeMetconFree,
        description:
          '스튜디오 제작 오디오 모니터링(앵커목소리 포함, 자기 목소리 제외)',
      },
      {
        id: 2,
        name: '1tv',
        number: '02-6099-7991',
        img: images.nikeMetcon5Purple,
        description: '1tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
      },
      {
        id: 3,
        name: '2tv',
        number: '02-6099-7992',
        img: images.nikeMetconFree,
        description: '2tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
      },
    ],
    arsNumCam: [
      {
        id: 1,
        name: 'PDcall',
        number: '02-6099-7994',
        img: images.nikeMetcon5Black,
        description: '스튜디오 진행PD 목소리만 듣기용',
      },
      {
        id: 2,
        name: 'PD + (부조N-1)',
        number: '02-6099-7997',
        img: images.nikePegasus36,
        description:
          'PD call과 부조진행음 함께듣기(방송참여 기자의 목소리도 함께 듣기)',
      },
      {
        id: 3,
        name: '1tv',
        number: '02-6099-7991',
        img: images.nikeMetcon5Purple,
        description: '1tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
      },
      {
        id: 4,
        name: '2tv',
        number: '02-6099-7992',
        img: images.nikeZoomKobe1Proto,
        description: '2tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
      },
    ],
    bgColor: '#BF012C',
    type: 'RUNNING',
    price: '$186',
    sizes: [6, 7, 8, 9, 10],
  },
  {
    id: 2,
    name: 'NS-2',
    description: 'NS2 PD call, 생방송 제작 오디오(n-1) 모니터링용 ARS',
    img: images.nikeMetconFree,
    arsNumRpt: [
      {
        id: 1,
        name: 'N-1',
        number: '02-6099-7995',
        img: images.nikeMetconFree,
        description:
          '스튜디오 제작 오디오 모니터링(앵커목소리 포함, 자기 목소리 제외)',
      },
      {
        id: 2,
        name: '1tv',
        number: '02-6099-7991',
        img: images.nikeMetcon5Purple,
        description: '1tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
      },
      {
        id: 3,
        name: '2tv',
        number: '02-6099-7992',
        img: images.nikeMetconFree,
        description: '2tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
      },
    ],
    arsNumCam: [
      {
        id: 1,
        name: 'PDcall',
        number: '02-6099-7996',
        img: images.nikeMetcon5Black,
        description: '스튜디오 진행PD 목소리만 듣기용',
      },
      {
        id: 2,
        name: 'PD + (부조N-1)',
        number: '02-6099-7998',
        img: images.nikePegasus36,
        description:
          'PD call과 부조진행음 함께듣기(방송참여 기자의 목소리도 함께 듣기)',
      },
      {
        id: 3,
        name: '1tv',
        number: '02-6099-7991',
        img: images.nikeMetcon5Purple,
        description: '1tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
      },
      {
        id: 4,
        name: '2tv',
        number: '02-6099-7992',
        img: images.nikeZoomKobe1Proto,
        description: '2tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
      },
    ],
    bgColor: '#D39C67',
    type: 'TRAINING',
    price: '$135',
    sizes: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    id: 3,
    name: 'NS-4',
    description: 'NS4 PD call, 생방송 제작 오디오(n-1) 모니터링용 ARS',
    img: images.nikeZoomKobe1Proto,
    arsNumRpt: [
      {
        id: 1,
        name: 'N-1',
        number: '02-6099-7985',
        img: images.nikeMetconFree,
        description:
          '스튜디오 제작 오디오 모니터링(앵커목소리 포함, 자기 목소리 제외)',
      },
      {
        id: 2,
        name: '1tv',
        number: '02-6099-7991',
        img: images.nikeMetcon5Purple,
        description: '1tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
      },
      {
        id: 3,
        name: '2tv',
        number: '02-6099-7992',
        img: images.nikeMetconFree,
        description: '2tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
      },
    ],
    arsNumCam: [
      {
        id: 1,
        name: 'PDcall',
        number: '02-6099-7986',
        img: images.nikeMetcon5Black,
        description: '스튜디오 진행PD 목소리만 듣기용',
      },
      {
        id: 2,
        name: '1tv',
        number: '02-6099-7991',
        img: images.nikeMetcon5Purple,
        description: '1tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
      },
      {
        id: 3,
        name: '2tv',
        number: '02-6099-7992',
        img: images.nikeZoomKobe1Proto,
        description: '2tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
      },
    ],
    bgColor: '#7052A0',
    type: 'BASKETBALL',
    price: '$199',
    sizes: [6, 7, 8, 9],
  },
  {
    id: 4,
    name: 'RAON',
    description: 'RAON PD call, 생방송 제작 오디오(n-1) 모니터링용 ARS',
    img: images.nikeMetcon4,
    arsNumRpt: [
      {
        id: 1,
        name: 'N-1',
        number: '02-6099-7993',
        img: images.nikeMetconFree,
        description:
          '스튜디오 제작 오디오 모니터링(앵커목소리 포함, 자기 목소리 제외)',
      },
      {
        id: 2,
        name: '1tv',
        number: '02-6099-7991',
        img: images.nikeMetcon5Purple,
        description: '1tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
      },
      {
        id: 3,
        name: '2tv',
        number: '02-6099-7992',
        img: images.nikeMetconFree,
        description: '2tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
      },
    ],
    arsNumCam: [
      {
        id: 1,
        name: 'PDcall',
        number: '02-6099-7994',
        img: images.nikeMetcon5Black,
        description: '스튜디오 진행PD 목소리만 듣기용',
      },
      {
        id: 2,
        name: '1tv',
        number: '02-6099-7991',
        img: images.nikeMetcon5Purple,
        description: '1tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
      },
      {
        id: 3,
        name: '2tv',
        number: '02-6099-7992',
        img: images.nikeZoomKobe1Proto,
        description: '2tv 생방송 모니터링(참여기자 목소리 메아리처럼 들림)',
      },
    ],
    bgColor: '#D39C67',
    type: 'TRAINING',
    price: '$135',
    sizes: [6, 7, 8, 9, 10, 11, 12],
  },
]
