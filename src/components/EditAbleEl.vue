<template>
  <div class="xl-editable-wrap" @dblclick="fn">
    <el-input :class="{ 'not-edit': !isEdit }" :disabled="!isEdit" v-model="value" clearable @blur="isEdit = false"></el-input>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';

const props = defineProps(['modelValue']);
const isEdit = ref(false);
const value = ref(props.modelValue);
onMounted(()=>{
  // value.value = props.modelValue
})

const fn = ()=>{
  console.log(11);
  isEdit.value = true
}
</script>

<style lang="scss" scoped>
:deep(.el-input){
  &.not-edit{
    .el-input__wrapper{
      box-shadow: unset;
    }
  }
  &.is-disabled {
    .el-input__wrapper{
      background: unset;
    }
    .el-input__inner{
      color: var(--el-input-text-color,var(--el-text-color-regular));
      cursor: text;
    }
  }
}
</style>