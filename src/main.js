"use Strict";

import dayjs from "./libs/dayjs.js";
import { schedulesDay } from "./modules/page-load.js";

import "./modules/form/submit.js";

import "./styles/global.css";
import "./styles/form.css";
import "./styles/schedule.css";

schedulesDay();
console.log(dayjs().format("DD/MM- HH:mmm"));
