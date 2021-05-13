# YouTube-Data-API

주소 : https://parkjeongwoong.github.io/vuetube/

- Vuex를 이용해서 YouTube Data API를 활용해 꾸민 youtube 비디오 검색 사이트

❗ 일일 할당량 초과시 403 Error 가 뜨면서 검색이 되지 않는 문제가 있음



[ 바뀐 점 ]

- 영상을 클릭하면 영상의 위치로 이동
- More를 누르면 더 많은 동영상 표시
- 영상 반복 버튼 추가 (반복 재생 기능이 들어있는 영상을 가져와서 재생이 끊기고 새로고침 됨)
- 기존 More => 더 많은 영상 정보가 담긴 쿼리를 요구하는 새로운 요청을 보냄 (할당량 낭비)
  - 바뀔 More => 애초에 20개 정도의 영상 정보를 받아오고, More는 숨김 해제 처리만 할 예정



[ 바꿀 점 ]

- 영상에 대한 정보를 Local에 저장 => 저장하고 싶은 영상 목록 기능 생성
  - vue router 기능활용, 영상 목록 db에 저장? local에 저장??

