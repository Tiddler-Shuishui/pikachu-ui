<template>
  <div class="topNav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use :xlink:href="logoHref"></use>
      </svg>
    </router-link>
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
    logoIndex:{
      type: Number,
      default: 1
    }
  },
  setup(props) {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    const logoHref = '#icon-pikachu-'+(props.logoIndex === 1 ? '1' : '2')
    return {
      toggleAside,
      logoHref
    }
  },
}
</script>

<style lang="scss" scoped>
.topNav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;

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
  > .toggleAside {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: fade-out($color: #000000, $amount: 0.9);
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    > .toggleAside {
      display: inline;
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
