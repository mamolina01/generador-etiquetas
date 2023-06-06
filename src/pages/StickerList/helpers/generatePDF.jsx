import html2pdf from "html2pdf.js";

export const generatePDF = (etiquetas) => {
  // Contenido HTML del template
  const template = generateTemplate(etiquetas);
  console.log(template);

  // Opciones para la generación del PDF
  const opciones = {
    margin: 0,
    filename: "mi-template.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  // Genera el PDF
  html2pdf().from(template).set(opciones).save();
};

const generateTemplate = (etiquetas) => {
  const html = document.createElement("html");
  const body = document.createElement("body");
  html.style.maxWidth="100%"
  html.style.minHeight="1120px"
  html.style.maxHeight="1120px"
  html.style.backgroundColor="red"

  body.style.padding = "1em";
  body.style.display = "flex";
  body.style.height="100%"
  body.style.maxWidth="100%"
  body.style.minHeight="1120px"
  body.style.maxHeight="1120px"



  for (const etiqueta of etiquetas) {
    delete etiqueta.id;
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.flexWrap="no-wrap"
    div.style.width = "50%";
    div.style.minWidth = "50%";
    div.style.border = "1px solid black";
    div.style.borderRadius = "3px";
    div.style.margin = "5px";
    div.style.padding = "0.5em";
    const values = Object.keys(etiqueta);
    for (const item of values) {
      const h1 = document.createElement("h1");
      h1.style.fontWeight = "600";
      h1.style.textTransform = "uppercase";
      h1.innerHTML = item;
      const divH3 = document.createElement("div");
      divH3.style.width = "100%";
      divH3.style.borderBottom = "1px solid black";
      divH3.style.paddingBottom="5px"
      const h3 = document.createElement("h3");
      h3.style.textTransform = "uppercase";

      h3.innerHTML = etiqueta[item];
      divH3.appendChild(h3);
      div.appendChild(h1);
      div.appendChild(divH3);
    }
    body.appendChild(div);
  }

  html.appendChild(body);
  console.log("generando template");
  return html;
};
