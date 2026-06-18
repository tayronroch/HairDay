import dayjs from "../libs/dayjs.js";
import { hoursLoad } from "./form/hours-load.js";

export function schedulesDay() {
  const date = dayjs().format("YYYY-MM-DD");
  hoursLoad({ date });
}
