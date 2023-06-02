import { Preview, print } from 'react-html2pdf';


export const PDFconverter = () => {
  console.log("acaaa");

  const elementToConvert = document.querySelector(".pdf");

  html2pdf()
    .set({
      margin: 1,
      filename: "Etiqueta.pdf",
      image: {
        type: "",
        quality: 1,
      },
      // pagebreak: { mode: "avoid-all", before: "#page2el" },

      html2canvas: {
        foreignObjectRendering: false,
        scale: 5,
        letterRendering: true,
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
      },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    })
    .from(elementToConvert)
    .save();
  console.log("convirtiendo html a pdf...");
};
