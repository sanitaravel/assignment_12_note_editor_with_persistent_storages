const localSaveButton = document.getElementById(
  "localSaveButton"
) as HTMLButtonElement;
const localLoadButton = document.getElementById(
  "localLoadButton"
) as HTMLButtonElement;
const apiSaveButton = document.getElementById(
  "apiSaveButton"
) as HTMLButtonElement;
const apiLoadButton = document.getElementById(
  "apiLoadButton"
) as HTMLButtonElement;

const textArea = document.getElementById("textArea") as HTMLTextAreaElement;

localSaveButton.addEventListener("click", () => {
  localStorage.setItem("data", textArea.value);
});

localLoadButton.addEventListener("click", () => {
  textArea.value = localStorage.getItem("data") || "";
});

apiSaveButton.addEventListener("click", async () => {
  const response = await fetch(
    "https://679b5a9533d3168463239040.mockapi.io/note/2",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: textArea.value }),
    }
  );
  if (response.status !== 200) {
    alert("Failed to save data");
    return;
  } else {
    console.log(response);
  }
});

apiLoadButton.addEventListener("click", async () => {
  const response = await fetch(
    "https://679b5a9533d3168463239040.mockapi.io/note/2"
  );
  if (response.status !== 200) {
    alert("Failed to load data");
    return;
  } else {
    const data = await response.json();
    textArea.value = data.content;
  }
});
