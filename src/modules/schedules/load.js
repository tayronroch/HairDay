import { hoursLoad } from "../form/hours-load.js";

export function schedulesDay() {
  const date = selectedDate.value;

  hoursLoad({ date });
}

const selectedDate = document.getElementById("date");
