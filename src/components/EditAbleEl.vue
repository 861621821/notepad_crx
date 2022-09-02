<template>
  <div class="xl-editable-wrap" @dblclick="handleEdit">
    <el-input ref="inputEl" :class="{ 'not-edit': !isEdit }" :disabled="!isEdit" v-model="value" clearable @blur="isEdit = false;" @change="handleSave"></el-input>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits,onMounted } from 'vue';

const props = defineProps(['modelValue']);
const isEdit = ref(false);
const value = ref(props.modelValue);

const handleEdit = () => {
  isEdit.value = true;
  setTimeout(()=>{
    inputEl.value.focus()
  })
}

const inputEl = ref(null);
const emit = defineEmits(['update:modelValue'])
const handleSave = () => {
  console.log(11);
  isEdit.value = false;
  // inputEl.value.blur();
  emit('update:modelValue', value.value)
}

onMounted(() => {
  console.log('---:', inputEl.value)
})
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