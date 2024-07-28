export function formatContentToHTML(content) {
  const lines = content.split("\n");
  let formattedContent = "";
  let inList = false;

  lines.forEach((line) => {
    if (line.startsWith("Title:")) {
      formattedContent += `<h2>${line.substring(6).trim()}</h2>`;
    } else if (line.startsWith("Scene:")) {
      formattedContent += `<h3>${line.substring(6).trim()}</h3>`;
    } else if (line.startsWith("- ")) {
      if (!inList) {
        formattedContent += "<ul>";
        inList = true;
      }
      formattedContent += `<li>${line.substring(2)}</li>`;
    } else if (line.startsWith("Parent:") || line.startsWith("Child:")) {
      formattedContent += `<p><strong>${line.split(":")[0]}</strong>: ${line
        .split(":")[1]
        .trim()}</p>`;
    } else if (line.startsWith("Ending:")) {
      formattedContent += `<h3>${line.substring(7).trim()}</h3>`;
    } else if (line.startsWith("Hashtags:")) {
      formattedContent += `<p><strong>Hashtags:</strong> ${line
        .substring(9)
        .trim()}</p>`;
    } else if (line.trim() === "") {
      if (inList) {
        formattedContent += "</ul>";
        inList = false;
      }
      formattedContent += "<br>";
    } else {
      formattedContent += `<p>${line}</p>`;
    }
  });

  if (inList) {
    formattedContent += "</ul>";
  }

  return formattedContent;
}
