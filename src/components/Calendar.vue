<template>
  <div>
    <CalendarHeader />
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

<script setup lang="ts">
import "../css/Calendar.css";
import CalendarHeader from "./CalendarHeader.vue";

const weekDays = ["日", "月", "火", "水", "木", "金", "土"];
const calendar = [
  ["", "", "", "", "", "", 1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
  [30, "", "", "", "", "", ""],
];
</script>
