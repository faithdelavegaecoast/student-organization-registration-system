// js/student-form.js
const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "";
  const kb = bytes / 1024;
  if (kb < 1024) return `${Math.round(kb)} KB`;
  const mb = kb / 1024;
  return `${mb.toFixed(1)} MB`;
}

if (uploadBtn && fileInput && fileList) {
  uploadBtn.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", () => {
    fileList.innerHTML = "";
    const files = Array.from(fileInput.files || []);
    if (!files.length) return;

    for (const f of files) {
      const li = document.createElement("li");
      li.textContent = `${f.name} (${formatBytes(f.size)})`;
      fileList.appendChild(li);
    }
  });
}
