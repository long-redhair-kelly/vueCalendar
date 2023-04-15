<script setup lang="ts">
import "../css/Calendar.css";
import { ref, computed } from "vue";
// import CalendarHeader from "./CalendarHeader.vue";
import { YearMonth } from "../../src/interfaces/YearMonth";

const weekDays = ["日", "月", "火", "水", "木", "金", "土"];
const currentDate = new Date();
let yearMonth = ref<YearMonth>({
  year: currentDate.getFullYear(),
  month: currentDate.getMonth() + 1,
});

/**
 * カレンダー本体
 */
let calendar: Array<Array<string>> = [];
const computedCalendar = computed(() => {
  const calendarArray = [];
  let firstWeekDay = new Date(
    yearMonth.value.year,
    yearMonth.value.month - 1,
    1
  ).getDay();
  let lastDay = new Date(
    yearMonth.value.year,
    yearMonth.value.month,
    0
  ).getDate();
  let dayNumber = 1;

  while (dayNumber < lastDay) {
    let weekData: Array<string> = [];
    for (let i = 0; i <= 6; i++) {
      if (calendarArray.length == 0 && i < firstWeekDay) {
        weekData[i] = "";
      } else if (lastDay < dayNumber) {
        weekData[i] = "";
      } else {
        weekData[i] = dayNumber.toString();
        dayNumber++;
      }
    }
    calendarArray.push(weekData);
  }
  calendar = calendarArray;
  return calendarArray;
});
// calendar.value = computedCalendar.value;
console.debug("*** calendar: ", calendar);

/**
 * 現在年月
 */
const currentYearMonth = () => {
  yearMonth.value.year = currentDate.getFullYear();
  yearMonth.value.month = currentDate.getMonth() + 1;
  return yearMonth;
};

/**
 * 前年
 */
const prevYear = () => {
  yearMonth.value.year--;
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
  return yearMonth;
};

/**
 * 来年
 */
const nextYear = () => {
  yearMonth.value.year++;
  return yearMonth;
};
</script>

<template>
  <div>
    <div id="header">
      <span class="header-arrow" @click="prevYear">◀</span>
      <span class="header-arrow" @click="prevMonth">＜</span>
      <span class="selected-month" @click="currentYearMonth"
        >{{ yearMonth.year }}年{{ yearMonth.month }}月</span
      >
      <span class="header-arrow" @click="nextMonth">＞</span>
      <span class="header-arrow" @click="nextYear">▶</span>
    </div>
    <table id="main">
      <thead>
        <th v-for="(weekDay, weekDayIndex) in weekDays" :key="weekDayIndex">
          {{ weekDay }}
        </th>
      </thead>
      <tbody>
        <tr
          v-for="(rowNumber, rowNumberIndex) in computedCalendar"
          :key="rowNumberIndex"
        >
          <td
            v-for="(columnNumber, columnNumberIndex) in rowNumber"
            :key="columnNumberIndex"
          >
            {{ columnNumber }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
