<template>
  <div class="topnav">
    <div class="logo">
      <svg class="icon">
        <use xlink:href="#icon-qing"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc"> 文档 </router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuVisible" class="toggleAside" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  props: {
    toggleMenuVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    return {
      toggleAside,
    }
  },
}
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 32px;
      height: 32px;
      color: orangered;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  @media (max-width: 500px) {
    > .toggleAside {
      display: inline-block;
      width: 32px;
      height: 32px;
      background: fade-out($color: #000000, $amount: 0.9);
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
    }

    > .menu {
      display: none;
    }

    > .logo {
      margin: 0 auto;
    }
  }
}
</style>
