import dayjs from "dayjs";
import { apiConfig } from "./api-config";
import { showDialog } from "../utils/dialog.js";

export async function schedulFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    const data = await response.json();
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "date"),
    );
    return dailySchedules;
  } catch (error) {
    showDialog("Não foi possível buscar os agendamentos do dia selecionado.");
    console.log(error);
    return [];
  }
}
