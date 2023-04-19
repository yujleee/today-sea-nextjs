interface ContainerType {
  children: React.ReactNode;
}

interface Beach {
  'beach-num': number;
  lat: number;
  lon: number;
  name: string;
  nx: number;
  ny: number;
}

interface Now {
  date: string;
  time: string;
}

interface Forecast {
  baseDate: string;
  baseTime: string;
  beachNum: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}

interface Sun {
  beachNum: string;
  baseDate: string;
  sunrise: string;
  sunset: string;
}

interface Tide {
  beachNum: string;
  baseDate: string;
  tiStnld: string;
  tiTime: string;
  tiType: string;
  tilevel: string;
}
