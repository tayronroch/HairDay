import { apiConfig } from "./api-config";
import { showDialog } from "../utils/dialog.js";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
    showDialog("Não foi possível cancelar o agendamento");
  }
}
