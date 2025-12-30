const textArea = document.getElementById("text");

const charCount = document.getElementById("charCount");
const charNoSpace = document.getElementById("charNoSpace");
const wordCount = document.getElementById("wordCount");
const lineCount = document.getElementById("lineCount");

textArea.addEventListener("input", () => {
  const text = textArea.value;

  // characters
  charCount.innerText = text.length;

  // characters without spaces
  charNoSpace.innerText = text.replace(/\s/g, "").length;

  // words
  const words = text.trim().split(/\s+/);
  wordCount.innerText = text.trim() === "" ? 0 : words.length;

  // lines
  lineCount.innerText = text === "" ? 0 : text.split("\n").length;
});

function clearText() {
  textArea.value = "";
  charCount.innerText = 0;
  charNoSpace.innerText = 0;
  wordCount.innerText = 0;
  lineCount.innerText = 0;
}
