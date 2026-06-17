import dayjs from "dayjs";

const form = document.querySelector("form");
const SelectedDate = document.getElementById("date");
const inputToDay = dayjs(new Date()).format("YYYY-MM-DD");

SelectedDate.value = inputToDay;
SelectedDate.min = inputToDay;

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("Enviado");
};
