<template>
<div>
  导航栏 | <router-link to="/">Hugh </router-link> |
  <router-link to="/xxx">Hugh2 </router-link>
</div>
<hr />
<router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>
