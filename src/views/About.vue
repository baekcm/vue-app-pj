<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutInner />
  </div>
</template>

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
            message : 'Vue Cli 를 통해 Single File Component 재 작성 테스트'
        }
    }
}    
</script>
