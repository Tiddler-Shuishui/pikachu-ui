<template>
  <h1>Radio 示例</h1>
  <Demo :component="Radio1Demo" />
</template>
<script lang="ts">
import Demo from '../components/Demo.vue'
import Radio1Demo from '../components/Radio1.demo.vue'
export default {
  components: {
    Demo,
  },
  setup() {
    return { Radio1Demo }
  },
}
</script>
