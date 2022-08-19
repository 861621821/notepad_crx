<template>
  <div class="xl-editable-table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date"/>
      <el-table-column prop="name" label="Name"/>
      <el-table-column prop="address" label="Address"/>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tableData = ref([]);
fetch('/data.json').then(response => response.json())
  .then(({ data }) => {
    tableData.value = data
  });
</script>

<style>

</style>