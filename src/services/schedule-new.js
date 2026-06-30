import { apiConfig } from "./api-config";
import { showDialog } from "../utils/dialog.js";

export async function scheduleNew(id, name, when) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id, name, when }),
    });
  } catch (error) {
    console.log(error);
    showDialog("Não foi possível agendar, tente novamente mais tarde.");
  }
}
