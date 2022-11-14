<script setup>
import { ref, onMounted, reactive, computed, watch} from 'vue'
import { useStore } from 'vuex'
const store = useStore()

onMounted(() => {
  //於畫面渲染時取得api資料
  store.dispatch('getData', currentPage);
  console.log(store.state.data);
});

//-----------監聽儲存庫(store)內資料變化--------
let isLoad = computed(()=>store.state.isLoad);
let source = computed(()=>store.state.data);
let isError = computed(()=>store.state.isError);
let errorMsg = computed(()=>store.state.errorMsg);
let total = computed(()=>store.state.data.total);
//--------------------------------------------
//分頁每頁筆數
let perPage = ref(30);
//目前頁數
let currentPage = ref(1);

//監聽目前頁數若換頁重新取得api資料
watch(currentPage, (nv, pv) => {
  store.dispatch('getData', nv);
})
//cors問題修復按鈕
let fix =  function() {
    window.open('https://cors-anywhere.herokuapp.com/corsdemo','_blank')
}
</script>

<template>
  <div>
    <b-overlay 
      id="overlay-background"
      :show="isLoad"
      variant="light"
      opacity="0.8"
      blur="2px"
      rounded="sm"
    >
      <h1 style="text-align: center;" class="mb-5">台北旅遊圖鑑</h1>
      <!-- 錯誤處理 -->
      <div class="center"  v-show="isError">
        <b-button variant="danger" disabled >
          {{ errorMsg }}
        </b-button>
        <div class="ms-2">
          <b-button variant="primary" @click="fix">
            點此按鈕開啟新分頁存取api權限
          </b-button>
        </div>
      </div>
      <!-- ------ -->
      <b-container  style="min-height: 500px">
        <b-row>
          <!-- 取得api資料後利用迴圈渲染畫面 -->
          <b-col lg="4" class="mb-2" v-for="data in source.data" v-bind:key = data.id>
              <b-card  
                :img-src="data.images.length!=0?data.images[0].src:'https://picsum.photos/600/300/?image=25'"
                img-alt="Image"
                img-top
                img-height="276.13"
                tag="article"
                :title=data.name 
                :subtitle="'地址:'+data.address"
              >
                <b-card-text class="text-limit">
                  {{data.introduction}}
                </b-card-text>
                <a :href="data.official_site" class="card-link">官網</a>
                <b-link :href="data.url" class="card-link">介紹網站</b-link>
              </b-card>
          </b-col>
          <!-- ----------------- -->
        </b-row>
      </b-container>
    </b-overlay>
    <!-- 當不是Loading與Error狀態時顯示分頁條 -->
    <div class="center" v-show="!isLoad&&!isError">
      <b-pagination
        v-model="currentPage"
        :total-rows="total"
        :per-page="perPage"
        first-number
      ></b-pagination>
    </div>
    <!-- --------------------------------- -->
  </div>


</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.center{
    display: flex;
    justify-content: center; 
    align-items: center; 
}
.text-limit{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
}
</style>
