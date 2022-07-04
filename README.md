# Cloning WORDLE APP 

##프로젝트 실행
### `npm start`

##TODO LIST

### 요구사항

- [x] React로 작성합니다. (Next와 같은 프레임워크 없이 순수 React로 작성)
- [x] 상태관리는 제한없이 편한 도구를 사용합니다. (Mobx 사용)
- [x] 스타일링에는 css-in-js 형식을 권장합니다. (Styled-component 사용)

###UI
- [x] 베이스 UI는 wordle을 참고합니다.
- [x] header / 30개의 글자 tile들 / keyboard UI
- [ ] wordle의 animation은 넣으면 좋지만 안넣어도 무방합니다.
- ### tile color는 다음을 따릅니다.
- [x] green: #6aaa64
- [x] yellow: #c9b458
- [x] gray: #787c7e
- [ ] 시도 횟수를 초과하거나 정답 단어를 맞춘 후에 표시되는 statistics popup 대신 공유 팝업이 표시되며 공유 버튼과 다시하기 버튼, 닫기 버튼만 존재합니다.

###FEATURES
- [ ] 기본 기능들은 wordle의 기능과 동일합니다.
- [ ] 실제 키보드 입력, UI 키보드 클릭은 정상적으로 작동합니다.
- [ ] 한 단어는 5글자를 넘길 수 없습니다.
- [ ] 5글자를 채우지 않고 제출시 제출되지 않고 에러 토스트가 표시됩니다.
- [ ] 단어가 invalid 할 경우 제출되지 않고 에러 토스트가 표시됩니다.
- [ ] 제출 후에 tile, keyboard의 배경색은 정상적으로 변경됩니다.
- [ ] 제출 횟수는 6회를 초과할 수 없습니다. 
- [ ] 6회 제출을 하거나 정답 단어를 맞출 경우 정상적으로 공유 팝업이 표시됩니다.
- [ ] 공유 팝업의 공유 버튼 클릭시 결과 텍스트가 클립보드에 복사됩니다. (아래는 결과 공유 텍스트의 형식)
- [ ] 공유 팝업의 다시하기 버튼 클릭시 정답 단어, 지금까지 제출한 단어가 초기화 되며 팝업이 닫힙니다.
- [ ] 공유 팝업의 닫기 버튼 클릭시 팝업이 닫힙니다.
- [x] 허용되는 단어는 words.json에 있는 단어들로 제한됩니다.