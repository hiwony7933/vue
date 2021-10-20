<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

# 컴포넌트 

- 컴포넌트 : 화면의 영역을 영역별로 구분해서 코드로 관리하는 것
-  영역을 구분했을때 컴포넌트가 관계가 생긴다.

인스턴스를 생성하면 기본적으로 root 컴포넌트가 된다. 


{} -> 객체표기법, 객체리터럴 

Promise -> 자바의 비동기 처리 패턴
코드와 개념 
.then(function(response){

})
.catch

화면에 반영되어서 갱신되는것은 리엑티비티 

바인딩 -> 값이 연결되는 구간



삼항연산자
computed  // return으로 와야됨

reuturn this.isError ? 'warning' : null ;  // 이즈에러가 트루면 워닝이고 아니면 널

if (isError)  {          // 이즈에러가 트루이면
    return 'warning'     //리턴으로 워닝을 주고
} else {                 // 펄스이면 
    return null;         //리턴으로 널을 준다
}

Vue CLI

- 명령어를 통한 특정 액션을 수행하는 도구 , 명령어 보조 도구, 명령어 실행 도구

* Installation

$node -v
10.xx 버전

$npm -v
6.xx 버전

$npm install -g @vue/cli
설치 명령어


$vue create vue-cli
$cd vue-cli

$npm run serve // 실행명령어


hello-world -> 케밥 케이스
HelloWorld -> 파스칼 케이스 단어 앞에 대문자

컴포넌트는 두단어 이상 파스칼 케이스로 생성 - AppHeader.vue
- html 표준태그인지 컴포넌트 태그인지 브라우저가 알길이 없어서 구분해야된다.
- 스타일가이드 권고사항

v-bind : 프롭스 속성이름 = "상위 컴포넌트의 데이터 이름"

{{ }} -> 콧수염괄호를 이용해서 화면에 바로 보여주는것 리엑티비티

# 오탈자주의

화면을 만들어 놓고 scrpit 는 데이터 중심으로 코딩할것


Angular React 의 장점 - > vue.js

