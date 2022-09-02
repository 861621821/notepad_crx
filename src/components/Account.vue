<template>
  <div class="crx-account">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="环境1" name="1">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date">
            <template #default="{ row }"><EditAbleEl v-model="row.date"></EditAbleEl></template>
          </el-table-column>
          <el-table-column prop="name" label="Name">
            <template #default="{ row }"><EditAbleEl v-model="row.name"></EditAbleEl></template>
          </el-table-column>
          <el-table-column prop="address" label="Address">
            <template #default="{ row }"><EditAbleEl v-model="row.address"></EditAbleEl></template>
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EditAbleEl from './EditAbleEl.vue'

const activeName = ref('1')
const tableData = ref([]);
fetch('/data.json').then(response => response.json())
  .then(({ data }) => {
    tableData.value = data
  });

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.crx-account{
  
}
</style>
