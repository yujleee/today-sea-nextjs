# 🏖 오늘의 바다

<div>
  <img src="https://user-images.githubusercontent.com/82587107/193453777-04ebfdc3-029e-4d95-82d3-b578160345d7.jpg" width="60%" alt="아이폰14 목업"/>
</div>



오늘의 바다는 전국의 해수욕장 날씨와 바다 상황을 조회할 수 있는 서비스입니다.

리액트 공부 이전 [Vanilla JS로 만들었던 프로젝트](https://github.com/yujleee/today-sea)를 `next.js`로 마이그레이션 해보았습니다. 

상세 기능은 현재까지 기존 프로젝트와 동일합니다.

<br/>


### 설명

- 공공데이터 오픈 API인 [기상청의 전국 해수욕장 날씨 조회 서비스](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15102239)를 이용했습니다.
- 기상청 정책상 일출일몰, 조석조회는 여름철(6~8월)에만 가능합니다.


<br/>

### 📑 마이그레이션 관련 기록

추가 예정

<br/>

## 💻 기술 스택

`TypeScript` `Nextjs` `SCSS` `Recoil` `React Query` `Vercel`


<br/>

## 🗂 디렉토리 구조

수정 예정

<br/>

## 👀 기능 시연

| 검색                                                                                                                                  | 검색어 컨트롤                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ![오늘의바다-모바일](https://user-images.githubusercontent.com/82587107/191970663-b671198c-eedc-4ec1-8ae0-9e6e0b6d055d.gif) | ![오늘의바다-키보드](https://user-images.githubusercontent.com/82587107/192080083-4de34325-1653-4863-bfee-3e3e04b94d06.gif) |

| 유효성 검사                                                                                                                             | 안내 팝업                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| ![검색어-유효성검사](https://user-images.githubusercontent.com/82587107/190955718-31aec4a8-7af8-4ad9-907f-a8c54cadc840.gif) | ![오늘의바다-안내팝업](https://user-images.githubusercontent.com/82587107/191968242-400710e2-de48-4d7f-a762-f7aebd1fa2ae.gif) |

<br/>

## 📍 상세 기능

- 검색 페이지
  - 추천 키워드
  - 검색어 키보드 컨트롤 (Desktop)
  - 검색어 유효성 검사
- 상세 페이지
  - 로딩
  - API 연동 시간대별 해수욕장 날씨예보, 기타 정보 조회
  - 서비스 안내 팝업

[위키 페이지](https://github.com/yujleee/today-sea/wiki)에서 상세 기능을 살펴볼 수 있습니다.










