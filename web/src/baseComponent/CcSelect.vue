<!--Created by 张强 on 2018/6/13.-->
<template>
  <el-select v-model="model" v-bind="$attrs" :multiple="multiSelect"  v-on="$listeners">
    <el-option :label="option.label" :value="option.value" :key="option.value" :disabled="option.disabled" v-for="option in options"/>
  </el-select>
</template>

<script>
import { Component, Vue, Prop } from 'vue-property-decorator'

export default @Component class CcSelect extends Vue {
  /* vue-props */
  @Prop([Array, String, Number]) value
  @Prop([Array, String]) options
  // @Prop(Boolean) multiple
  @Prop(Boolean) multiSelect
  /* vue-vuex */
  /* vue-data */
  /* vue-compute */
  get model () {
    if (!this.value && this.value !== 0) { // 解决value === 0时无效的问题
      return this.multiSelect ? [] : ''
    } else {
      if (this.multiSelect) {
        return Array.isArray(this.value) ? this.value : [this.value]
      } else {
        return Array.isArray(this.value) ? (this.value[0] || '') : this.value
      }
    }
  }
  set model (val) {
    this.$emit('input', val)
  }
  /* vue-watch */
  /* vue-lifecycle */
  /* vue-method */
  isExists () {
    if (typeof this.options !== 'string') {
      return !!this.options.find(o => o.value === this.value)
    }
    return false
  }
}
</script>

<style lang="scss" scoped>
</style>
