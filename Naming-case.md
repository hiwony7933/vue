#네이밍 케이스
1.케밥-케이스

kebab-case, spinal-case, Train-Case, Lisp-case
-하이픈으로 단어를 연결하는 표기법
-HTML 태그의 id, class 속성으로 흔히 사용됨.

2.파스칼 표기법
PascalCase, BackgroundColor, TypeName, PowerPoint
-첫 단어를 대문자로 시작하는 표기법

3.스네이크 케이스(뱀 표기법)
snake_case, background_color, type_name
-단어를 밑줄 문자로 구분하는 표기법
-perl, php, python, ruby, rust....

4.헝가리언 표기법
strName, bBusy, szName
-접두어를 사용하는 표기법
-str -> string, b -> boolean, sz -> null로 끝나는 문자열(string+zero)

 

# css 방법론
1.BEM
-개발, 디버깅, 유지보수를 위하여 가능한 한 명확하게 네이밍하는 것이 목표
-소문자, 숫자만을 조합
-조합은 하이픈(-)으로 연결하여 작명
-모든것이 클래스이고 중첩된 것은 없다.

블록(block)
-형태(red,big)가 아닌 목적(menu, button)에맞게 결정해야 한다. (header,menu,search-form...)
-환경에 영향을 받지 않아야한다.(여백, 위치 설정x)
-태그, id선택자로 사용하면 안된다.

요소(Element)
-블록안에서 특정 기능을 담당하는 부분
-block__element 형태로 사용(더블 언더바)
-형태(red,big)가 아닌 목적(item, text, title, list)에맞게 결정해야 한다.
-블록에 종속되어 있어 블록의 부분으롬나 사용할 수 있고 다른 요소의 부분으로 사용할 수 없다.
-선택적으로 사용가능해야 한다.(요소가 없을 수도 있다)

수식어(Modifier)
-블록이나 요소의 모양(color,size), 상태(disabled, checked..)를 정의한다.
-block__elemt--modifier, block--modifier(더블 하이픈)로 사용한다.
-블리언 타입, 키-벨류 타입이 있다.
불리언: 수식어가 있으면 값이 true라고 가정(form__button--disabled)
키-벨류:하이픈으로 연결하여 표시한다.(block__element--modifier)

 

혼합사용(Mix)
-block1,block2__element 형태로 사용가능
(?)-block2__element에 여백이나 위치를 지정하고 block1은 독립적으로 유지할 수 있다.

 

결론
-블록,요소,수식어의 목적에 적응되면 네이빙이 수월해짐
-용도와 형태 위치를 알수 있다보니 유지 보수 용이
-네이밍이 길어지니 sass, less에 적합

틀린 예시
-중첩이 있으면 안됨.

2.OOCSS(Object Oriented CSS) 객체지향 css
-구조와 모양으로 분리
-반복적인 것은 별도로 분리
-콘테이너와 콘텐츠의 분리(의존적인 스타일 사용x)
.title -> h2, h2.title


네이밍
-가능한 짧고 간결하게 작성
-동작과 형태가 예상 가능하도록 명확히 작성
-형태보다는 목적의 의미를 작성
-구체적이지 않고 일반적으로 사용가능하도록 작성
