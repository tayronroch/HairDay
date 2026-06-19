import { hoursLoad } from "../form/hours-load.js";
import { schedulFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";

const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  const date = selectedDate.value;
  const dailySchedules = await schedulFetchByDay({ date });
  schedulesShow({ dailySchedules })
  hoursLoad({ date, dailySchedules });
  
}
