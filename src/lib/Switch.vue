<template>
  <button
    class="pi-switch"
    @click="toggle"
    :class="{ 'pi-checked': value }"
  >
    <span></span>
  </button>
</template>

<script lang="ts" setup="props, context">
const props = defineProps<{ value: boolean }>()
const emit = defineEmits<{
  (e: 'update:value', visible: boolean): void;
}>()
const toggle = () => {
  emit("update:value", !props.value);
};
</script>

<style lang="scss" scoped>
@use "sass:math";
$h: 22px;
$h2: $h - 4px;

.pi-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
  transition: background 250ms;

  &.pi-checked {
    background: blue;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  button.checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
