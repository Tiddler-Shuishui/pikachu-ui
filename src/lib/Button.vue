<template>
  <button class="pi-button" :class="classes" :disabled="disabled" @click="$emit('click',$event)">
    <span v-if="loading" class="pi-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts" setup="props">
import { computed } from "vue";
const props = withDefaults(defineProps<{
  theme?: 'button' | 'text' | 'link';
  size?: 'normal' | 'big' | 'small';
  level?: 'normal' | 'main' | 'danger';
  disabled?: boolean;
  loading?: boolean;
}>(),{
  theme: 'button',
  size: 'normal',
  level: 'normal'
});
const { theme, size, level } = props;
defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
const classes = computed(() => {
  return {
    [`pi-theme-${theme}`]: theme,
    [`pi-size-${size}`]: size,
    [`pi-level-${level}`]: level,
  }
})
</script>

<style lang="scss" scoped>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;

.pi-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  &+& {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.pi-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover,
    &:focus {
      color: linear-gradient($blue, 10%);
    }
  }

  &.pi-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.pi-size-normal {
    font-size: 16px;
    height: 32px;
    padding: 0 8px;
  }

  &.pi-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.pi-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.pi-theme-button {
    &.pi-level-main {
      background: $blue;
      color: white;
      border-color: $blue;

      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }

    &.pi-level-danger {
      background: $red;
      border-color: $red;
      color: white;

      &:hover,
      &focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }

  &.pi-theme-text {
    &.pi-level-main {
      color: $blue;

      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }

    &.pi-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.pi-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;

      &:hover {
        border-color: $grey;
      }
    }
  }

  &.pi-theme-link,
  &.pi-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  >.pi-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: pi-spin 1s infinite linear;
  }
}

@keyframes pi-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>