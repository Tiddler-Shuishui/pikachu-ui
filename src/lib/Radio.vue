<template>
  <label class="pikachu-radio" :class="{'is-checked': label === model}">
    <span class="pikachu-radio_input">
      <span class="pikachu-radio_inner"></span>
      <input
          class="pikachu-radio_original"
          type="radio"
          :value="label"
          :name="name"
          v-model="model"
      />
    </span>
    <span class="pikachu-radio_label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script lang="ts">
import {computed} from 'vue';
export default {
  name: 'Radio',
  props:{
    label:{
      type:[String,Number,Boolean],
      default:''
    },
    name:{
      type:String,
      default: ''
    },
    value:null
  },
  setup(props,context){
    const model = computed({
      get(){
        return props.value
      },
      set(value){
        context.emit('update:value',value)
      }
    })
    return {model}
  }
};
</script>

<style lang="scss" scoped>
.pikachu-radio {
  color: #606266;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  display: inline-block;
  outline: none;
  margin-right: 20px;
  & .pikachu-radio_input {
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .pikachu-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 16px;
      height: 16px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform .25s ease-in;
      }
    }
    .pikachu-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  & .pikachu-radio_label {
    padding-left: 10px;
  }
  &.is-checked {
    .pikachu-radio_input {
      .pikachu-radio_inner {
        border-color: #409eff;
        background: #409eff;
        &:after {
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
    .pikachu-radio_label {
      color: #409eff;
    }
  }
}
</style>