export function showDialog(message, type = "error") {
  const dialog = document.getElementById("app-dialog");
  const dialogMessage = document.getElementById("dialog-message");
  const dialogIcon = document.getElementById("dialog-icon");

  if (!dialog || !dialogMessage || !dialogIcon) return;

  dialogMessage.textContent = message;

  if (type === "success") {
    dialogIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    dialogMessage.style.color = "#22c55e";
  } else {
    dialogIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
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
