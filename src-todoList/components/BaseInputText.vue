<template>
  <input
    type="text"
    class="input"
    :value="value"
    v-on="listeners"
  >
</template>

<script>
/**
 * v-bind
 * 缩写：
 * 动态地绑定一个或多个特性，或一个组件 prop 到表达式。
 * 
 * v-on
 * 缩写：@
 * 绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。
 * 
 * scoped  css module
 * 
 * https://cn.vuejs.org/v2/guide/components.html
 * 
 * 为了让它正常工作，这个组件内的 <input> 必须：
 * 将其 value 特性绑定到一个名叫 value 的 prop 上
 * 在其 input 事件被触发时，将新的值通过自定义的 input 事件抛出
 * 
 */
export default {
  //props 可以是数组或对象，用于接收来自父组件的数据
  props: {
    value: {
      type: String,
      default: '',
    }
  },
  //计算属性 计算属性将被混入到 Vue 实例中
  // 计算属性是基于它们的响应式依赖进行缓存的   简单理解，计算属性有缓存，方法不会有缓存
  computed: {
    listeners () {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => {
          console.log(event.target.value)
          this.$emit('input', event.target.value)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid $vue-blue;
}
</style>
