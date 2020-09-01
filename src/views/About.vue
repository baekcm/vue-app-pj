<!--
    views 폴더는 보통 페이지 component 이다.
    이 안에서 잘게 쪼개고 싶은 경우에는 components 폴더에 넣는다.
-->

<!-- 
    template 안에는 html tag 가 들어간다. 
    Vue Component 는 제일 위에 하나의 tag 가 먼저 존재해야 한다.
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutInner title="Inner 에 보내줄 title value 는 'About' 입니다." />
    <!-- 아래와 같이 title 값을 보내지 않는 경우 Inner.vue 파일의 default 옵션에 의해 기본값을 출력 -->
    <!-- <AboutInner /> -->

    <!-- String type 이 아닌 number 를 보내려고 한다면 -->
    <!-- <AboutInner title="5" /> 이 방식은 string "5" 가 되므로 아래와 같이 한다. -->
    <!-- <AboutInner :title="title" /> data 에 title 을 활용해서 number 값을 보낸다. -->
  </div>
</template>

<!-- script export default 안에는 options 들이 들어간다. -->
<!-- data, method, computed, watch 등... -->
<!-- 
  Inner.vue component 를 재사용 가능하게 만들었으므로,
  About.vue 에서도 Home.vue 와 같이 사용할 수 있다.
-->
<script>
import AboutInner from '@/components/Inner.vue';

export default {
    components: {
        AboutInner
    },
    data() {
        return {
            message : 'Vue Cli 를 통해 Single File Component 재 작성 테스트',
            title: 5
        }
    }
}    
</script>

<!-- 
    html style 이 들어간다. 
    scoped 를 넣어줘야지만 css code 가 template 에 있는 html 에만 적용이 된다.
    scoped 를 넣지 않을 경우 application 전체에 적용되기때문에 대부분 넣어준다.
-->
<style scoped>
    h1 {
        color: red;
    }
</style>