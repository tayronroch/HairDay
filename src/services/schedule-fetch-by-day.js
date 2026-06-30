import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function schedulFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    const data = await response.json();
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "date"),
    );
    return dailySchedules;
  } catch (error) {
    alert("Não foi possível realizar o agendamento do dia selecionado.");
    console.log(error);
    return [];
  }
}
