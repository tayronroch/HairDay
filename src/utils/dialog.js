export function showDialog(message, type = "error") {
  const dialog = document.getElementById("app-dialog");
  const dialogMessage = document.getElementById("dialog-message");
  const dialogIcon = document.getElementById("dialog-icon");

  if (!dialog || !dialogMessage || !dialogIcon) return;

  dialogMessage.textContent = message;

  if (type === "success") {
    dialogIcon.setAttribute("src", "./src/assets/success.svg");
    dialogMessage.style.color = "#22c55e";
  } else {
    dialogIcon.setAttribute("src", "./src/assets/error.svg");
    dialogMessage.style.color = "#ef4444";
  }

  dialog.showModal();
}

export function showConfirmDialog(message) {
  return new Promise((resolve) => {
    const dialog = document.getElementById("confirm-dialog");
    const dialogMessage = document.getElementById("confirm-message");
    const btnYes = document.getElementById("confirm-yes");
    const btnNo = document.getElementById("confirm-no");

    if (!dialog || !dialogMessage || !btnYes || !btnNo) {
      // Fallback se algo der errado com o DOM
      resolve(confirm(message));
      return;
    }

    dialogMessage.textContent = message;

    const handleYes = () => {
      cleanup();
      dialog.close();
      resolve(true);
    };

    const handleNo = () => {
      cleanup();
      dialog.close();
      resolve(false);
    };

    const cleanup = () => {
      btnYes.removeEventListener("click", handleYes);
      btnNo.removeEventListener("click", handleNo);
    };

    btnYes.addEventListener("click", handleYes);
    btnNo.addEventListener("click", handleNo);

    dialog.showModal();
  });
}
