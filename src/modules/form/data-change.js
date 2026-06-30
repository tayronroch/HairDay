import { schedulesDay } from "../schedules/load.js";

const selectedDate = document.getElementById("date");

selectedDate.addEventListener("change", () => {
  localStorage.setItem("hairday:selected-date", selectedDate.value);
  schedulesDay();
});
