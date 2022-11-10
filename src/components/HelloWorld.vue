<script setup>
import { ref, onMounted, reactive,computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
onMounted(() => {
  store.dispatch('getData');
  console.log(store.state.data);
});


let source = computed(()=>store.state.data);
const count = ref(0)
</script>

<template>
  <div>
    <h1 style="text-align: center;">台北旅遊圖鑑</h1>
    <b-card v-for="data in source.data"
  >
    <b-card :title=data.name :subtitle="'地址:'+data.address">
      <b-card-text>
        {{data.introduction}}
      </b-card-text>
      <a :href="data.official_site" class="card-link">官網</a>
      <b-link :href="data.url" class="card-link">介紹網站</b-link>
    </b-card>
  </b-card>
  </div>


</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
