import { scheduleCancel } from "../../services/schedule-cancel.js";
import { schedulesDay } from "./load.js";
import { showConfirmDialog } from "../../utils/dialog.js";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li");
      const id = item.getAttribute("date-id");

      if (id) {
        const isConfirm = await showConfirmDialog("Tem certeza que deseja cancelar?");

        if (isConfirm) {
          await scheduleCancel({ id });
          await schedulesDay();
        }
      }
    }
  });
});
