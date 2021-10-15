<template>
  <!-- 템플릿 루트는 html 엘리먼트가 최상위에 한개만 있어야된다. -->
  <!-- div 태그는 한개만 -->
  <div>
    <app-header 
    v-bind:propsdata="str"
    v-on:renew="renewStr"></app-header> 
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue' // 1.컴포넌트 파일을 정의하고 변수로 넣었음

export default {
  data : function() {  
    // 여러 컴포넌트에서 공유하면 안되서 function 함수를 연결해서 
    // return 으로 새 객체를 반환해주는 형식의 문법으로 진행해야 함
    return {
      str : 'Header'
    }
  },
  components : { // 2. 컴포넌트를 불러옴
    'app-header' : AppHeader
  },
  methods : {
    renewStr : function() {
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>