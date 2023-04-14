<script setup lang="ts">
import { defineEmits, ref } from "vue";
import "../css/CalendarHeader.css";
import { YearMonth } from "../../src/interfaces/YearMonth";

const currentDate = new Date();
let yearMonth = ref<YearMonth>({
  year: currentDate.getFullYear(),
  month: currentDate.getMonth() + 1,
});
console.debug("*** header_yearMonth: ", yearMonth);
const emit = defineEmits(["emitYaerMonth"]);

/**
 * 現在年月
 */
const currentYearMonth = () => {
  yearMonth.value.year = currentDate.getFullYear();
  yearMonth.value.month = currentDate.getMonth() + 1;
  emit("emitYaerMonth", yearMonth);
  return yearMonth;
};

/**
 * 前年
 */
const prevYear = () => {
  yearMonth.value.year--;
  emit("emitYaerMonth", yearMonth);
  return yearMonth;
};

/**
 * 前月
 */
const prevMonth = () => {
  yearMonth.value.month--;
  if (yearMonth.value.month < 1) {
    yearMonth.value.year--;
    yearMonth.value.month = 12;
  }
  emit("emitYaerMonth", yearMonth);
  return yearMonth;
};

/**
 * 来月
 */
const nextMonth = () => {
  yearMonth.value.month++;
  if (yearMonth.value.month > 12) {
    yearMonth.value.year++;
    yearMonth.value.month = 1;
  }
  emit("emitYaerMonth", yearMonth);
  return yearMonth;
};

/**
 * 来年
 */
const nextYear = () => {
  yearMonth.value.year++;
  emit("emitYaerMonth", yearMonth);
  return yearMonth;
};
</script>

<template>
  <div id="header">
    <span class="header-arrow" @click="prevYear">◀</span>
    <span class="header-arrow" @click="prevMonth">＜</span>
    <span class="selected-month" @click="currentYearMonth"
      >{{ yearMonth.year }}年{{ yearMonth.month }}月</span
    >
    <span class="header-arrow" @click="nextMonth">＞</span>
    <span class="header-arrow" @click="nextYear">▶</span>
  </div>
</template>
