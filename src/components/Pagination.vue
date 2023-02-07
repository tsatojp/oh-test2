<template>
  <div class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item btn_dark_color">
        <a>{{ pageNo }}</a>
      </li>
    </ul>
    <button class="pagination__btn--first btn_middle_color" @click="firstClick">
      &lt;&lt;
    </button>
    <button class="pagination__btn--prev btn_middle_color" @click="prevClick">
      &lt;
    </button>

    <button
      class="pagination__btn--prevNo btn_light_color"
      v-show="prevNo != 0"
    >
      {{ prevNo }}
    </button>
    <p class="triple_leader prev_icon">･･･</p>
    <p class="triple_leader next_icon">･･･</p>
    <button
      class="pagination__btn--nextNo btn_light_color"
      v-show="pageNo != props.maxPageNo"
    >
      {{ nextNo }}
    </button>

    <button class="pagination__btn--next btn_middle_color" @click="nextClick">
      &gt;
    </button>
    <button class="pagination__btn--last btn_middle_color" @click="lastClick">
      &gt;&gt;
    </button>
  </div>
</template>
<script setup lang="ts">
import { computed, type Ref, ref } from "vue";
const firstPageNo: number = 1; // ページ番号初期値
const pageNo: Ref<number> = ref(firstPageNo); // ページ番号
const prevNo: Ref<number> = computed(() => pageNo.value - 1);
const nextNo: Ref<number> = computed(() => pageNo.value + 1);
const props = defineProps({
  pageNo: Number,
  maxPageNo: Number,
});
const emits = defineEmits<{
  (e: "pageClick", pageNo: number): void;
}>();
const firstClick = () => {
  pageNo.value = firstPageNo;
  emits("pageClick", pageNo.value);
};
const prevClick = () => {
  if (pageNo.value === 1) {
    pageNo.value = 1;
  } else {
    pageNo.value = pageNo.value - 1;
  }
  emits("pageClick", pageNo.value);
};
const nextClick = () => {
  if (pageNo.value === props.maxPageNo) {
    pageNo.value = props.maxPageNo;
  } else {
    pageNo.value = pageNo.value + 1;
  }
  emits("pageClick", pageNo.value);
};
const lastClick = () => {
  pageNo.value = props.maxPageNo!;
  emits("pageClick", pageNo.value);
};
</script>
<style scoped>
.pagination__item a,
.pagination__item--current,
.pagination__btn--prev,
.pagination__btn--next,
.pagination__btn--first,
.pagination__btn--last,
.pagination__btn--prevNo,
.pagination__btn--nextNo {
  box-sizing: border-box;
  display: block;
  color: #fff;
  text-decoration: none;
  text-align: center;
  min-width: 3em;
  transition: all 0.2s;
  margin: 1px 1px 1px 1px;
  padding: calc(1em - 1px) 1em;
}
.triple_leader {
  box-sizing: border-box;
  display: block;
  color: rgb(1, 1, 1);
  text-decoration: none;
  text-align: center;
  min-width: 3em;
  transition: all 0.2s;
  margin: 0px 0px 0px 0px;
  padding: calc(1em - 1px) 1em;
}
.btn_middle_color {
  background: #716f6e;
  border: 1px solid #716f6e;
}
.btn_light_color {
  background: #c5bdb8;
  border: 1px solid #c5bdb8;
}
.btn_dark_color {
  background: #575454;
  border: 1px solid #575454;
}
.pagination__item a:hover,
.pagination__item--current:hover,
.pagination__btn--prev:hover,
.pagination__btn--next:hover,
.pagination__btn--first:hover,
.pagination__btn--last:hover {
  color: #655141;
  background: #fff;
  border: 1px solid #655141;
}
.pagination {
  position: relative;
  display: flex;
  justify-content: center;
  color: #a4a4a4;
  line-height: 1;
  margin: 0;
  padding: 2em 0;
}
.pagination__list {
  display: none;
}
.pagination__pos {
  position: absolute;
  top: -0.5em;
  left: 50%;
  transform: translate(-50%, 0);
  color: #655141;
}
.pagination__btn--prev {
  order: 2;
}
.pagination__btn--next {
  order: 8;
}
.pagination__btn--first {
  order: 1;
}
.pagination__btn--last {
  order: 9;
}
.pagination__btn--prevNo {
  order: 4;
}
.pagination__btn--nextNo {
  order: 6;
}
.prev_icon {
  order: 3;
}
.next_icon {
  order: 7;
}
@media (min-width: 520px) {
  .pagination__list {
    order: 5;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .pagination__item {
    margin: 0;
  }
  .pagination__item--current {
    background: #fff;
    color: #655141;
    font-weight: bold;
    border: 1px solid #655141;
    margin: 0 1px 0 0;
  }
  .pagination__pos {
    display: none;
  }
}
</style>
