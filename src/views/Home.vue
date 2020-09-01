<!--
    views 폴더는 보통 페이지 component 이다.
    이 안에서 잘게 쪼개고 싶은 경우에는 components 폴더에 넣는다.
-->

<!-- 
    template 안에는 html tag 가 들어간다. 
    Vue Component 는 제일 위에 하나의 tag 가 먼저 존재해야 한다.
-->
<template>
    <div>
        <h1>Single File Component</h1>
        <p>{{ message }}</p>
        <HomeInner title="Inner 에 보내줄 title value 는 'Home' 입니다." />
    </div>
</template>

<!-- script export default 안에는 options 들이 들어간다. -->
<!-- data, method, computed, watch 등... -->
<script>
import HomeInner from '@/components/Inner.vue';

export default {
    components: {
        HomeInner
    },
    data() {
        return {
            message : 'Vue Cli 를 통해 Single File Component 재 작성 테스트'
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
        color: blue;
    }
</style>