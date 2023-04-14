<script setup lang="ts">
import "../css/Calendar.css";
import { computed, ref } from "vue";
import CalendarHeader from "./CalendarHeader.vue";
import { YearMonth } from "../../src/interfaces/YearMonth";

const weekDays = ["日", "月", "火", "水", "木", "金", "土"];
const currentDate = new Date();
let yearMonth = ref<YearMonth>({
  year: currentDate.getFullYear(),
  month: currentDate.getMonth() + 1,
});

function currentYearMonth(currentyearMonth: YearMonth): void {
  yearMonth.value = currentyearMonth;
}
console.debug("*** yearMonth: ", yearMonth);

/**
 * カレンダー本体
 */
let calendar: Array<Array<string>> = [];
const computedCalendar = computed(() => {
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
      if (calendar.length == 0 && i < firstWeekDay) {
        weekData[i] = "";
      } else if (lastDay < dayNumber) {
        weekData[i] = "";
      } else {
        weekData[i] = dayNumber.toString();
        dayNumber++;
      }
    }
    calendar.push(weekData);
  }
  return calendar;
});
calendar = computedCalendar.value;
</script>

<template>
  <div>
    <CalendarHeader
      v-model:YearMonth="yearMonth"
      @emitYaerMonth="currentYearMonth"
    />
    <table id="main">
      <thead>
        <th v-for="(weekDay, weekDayIndex) in weekDays" :key="weekDayIndex">
          {{ weekDay }}
        </th>
      </thead>
      <tbody>
        <tr
          v-for="(rowNumber, rowNumberIndex) in calendar"
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
