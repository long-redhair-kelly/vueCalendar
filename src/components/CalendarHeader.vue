<template>
  <div id="header">
    <span class="header-arrow" @click="lastMonth">＜</span>
    <span class="selected-month"
      >{{ yearMonth.year }}年{{ yearMonth.month }}月</span
    >
    <span class="header-arrow" @click="nextMonth">＞</span>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import "../css/CalendarHeader.css";

interface YearMonth {
  year: number;
  month: number;
}

let yearMonth = reactive<YearMonth>({
  year: 2023,
  month: 4,
});

/**
 * 先月
 */
const lastMonth = () => {
  yearMonth.month--;
  if (yearMonth.month < 1) {
    yearMonth.year--;
    yearMonth.month = 12;
  }
  return yearMonth;
};

/**
 * 次月
 */
const nextMonth = () => {
  yearMonth.month++;
  if (yearMonth.month > 12) {
    yearMonth.year++;
    yearMonth.month = 1;
  }
  return yearMonth;
};
</script>
