
<demo>
  基础用法
  </demo>
  
  <template>
    <Radio label="皮卡乒" v-model:value="labelVal">皮卡乒</Radio>
    <Radio label="皮卡乓" v-model:value="labelVal">皮卡乓</Radio>
    <div class="picked">Picked:{{labelVal}}</div>
  </template>
  
  <script lang="ts">
  import Radio from '../lib/Radio.vue';
  import {ref} from 'vue';
  export default {
    name: 'RadioDemo',
    components:{Radio},
    setup(){
      const labelVal = ref('皮卡乒')
      return {labelVal}
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .picked{
    padding: 10px 0;
  }
  </style>