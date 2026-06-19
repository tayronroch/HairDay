import dayjs from "dayjs";
import { schedulesDay } from "../schedules/load.js";
import { scheduleNew } from "../../services/schedule-new.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");
const savedDate = localStorage.getItem("hairday:selected-date");

selectedDate.min = inputToday;
selectedDate.value =
  savedDate && dayjs(savedDate).isAfter(dayjs(inputToday).subtract(1, "day"))
    ? savedDate
    : inputToday;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente");
    }

    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione um horário");
    }

    const [hour] = hourSelected.innerHTML.split(":");
    const when = dayjs(selectedDate.value)
      .add(hour, "hour")
      .format("YYYY-MM-DDTHH:mm:ss.SSS");
    const id = new Date().getTime();

    await scheduleNew(id, name, when);
    await schedulesDay();
    alert("Cadastro realizado com sucesso!");
    clientName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error);
  }
};
