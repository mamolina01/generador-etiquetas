import html2pdf from "html2pdf.js";

export const generatePDF = async (etiquetas, headerParams) => {
  // Contenido HTML del template
  const template = await generateTemplate(etiquetas, headerParams);
  console.log("acaa2");
  console.log(template);

  // Opciones para la generación del PDF
  const opciones = {
    margin: 0,
    filename: "mi-template.pdf",
    image: { type: "jpeg", quality: 1 },
    pagebreak: { mode: "avoid-all", before: "#page2el" },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  // Genera el PDF
    html2pdf().from(template).set(opciones).save();
};

const generateTemplate = (etiquetas, headerParams) =>
  new Promise((resolve) => {
    const preloadLink = document.createElement("link");
    preloadLink.href = headerParams.logo;
    preloadLink.rel = "preload";
    preloadLink.as = "script";

    const html = document.createElement("html");
    html.style.maxWidth = "100%";
    html.style.minHeight = "1120px";
    const head = document.createElement("head");
    head.appendChild(preloadLink);
    html.appendChild(head);

    const body = document.createElement("body");
    body.style.padding = "0.2em";
    let limit = 4;

    for (let i = 0; i < limit; i += 4) {
      const stickerContainer = document.createElement("div");
      stickerContainer.setAttribute("class", "page");
      stickerContainer.style.display = "flex";
      stickerContainer.style.justifyContent = "space-between";
      stickerContainer.style.flexWrap = "wrap";
      stickerContainer.style.gap = "5px";
      stickerContainer.style.maxHeight = "1120px";
      for (const etiqueta of etiquetas.slice(i, limit)) {
        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.flexWrap = "no-wrap";
        div.style.width = "47%";
        div.style.minWidth = "47%";
        div.style.height = "min-content";
        div.style.border = "2px solid black";
        div.style.borderRadius = "3px";
        div.style.padding = "0.5em";
        div.style.margin = "5px";
        const divHeader = document.createElement("div");
        divHeader.style.display = "flex";
        divHeader.style.justifyContent = "space-evenly";
        const divImage = document.createElement("div");

        const img = document.createElement("img");
        img.style.width = "70px";
        img.style.height = "70px";
        img.style.display = "grid";
        img.alt = "logo empresa";
        img.style.position = "center";
		img.style.borderRadius="50%"
        const urlImage = fetch(headerParams.logo)
          .then((response) => response.arrayBuffer())
          .then((buffer) => {
            const base64 = btoa(
              new Uint8Array(buffer).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            );

            img.src = `data:image/jpeg;base64,${base64}`;

            // Utiliza `imagenBase64` en tu template para mostrar la imagen en el PDF
          })
          .catch((error) => {
            console.log("Error al cargar la imagen:", error);
          });

        // img.src = preloadLink.href;

        //   console.log("aca...");
        //   img.addEventListener("load", function () {
        //     console.log("aca2...");
        //   });

        const divSocial = document.createElement("div");
        divSocial.style.display = "flex";
        divSocial.style.flexDirection = "column";
        divSocial.style.justifyContent = "space-around";

        const divInstagram = document.createElement("div");
        divInstagram.style.display = "flex";
        divInstagram.style.justifyContent = "space-evenly";
        divInstagram.style.verticalAlign = "middle";
        const instagram = document.createElement("h3");
        instagram.innerHTML = headerParams.instagram;
        const instagramIcon = document.createElement("img");
        instagramIcon.src = "/Instagram.png";
        instagramIcon.style.height = "20px";
        instagramIcon.style.width = "20px";
        divInstagram.appendChild(instagramIcon);
        divInstagram.appendChild(instagram);
        const divWhatsapp = document.createElement("div");
        divWhatsapp.style.display = "flex";
        divWhatsapp.style.justifyContent = "space-around";
        const whatsapp = document.createElement("h3");
        whatsapp.innerHTML = headerParams.whatsapp;
        const whatsappIcon = document.createElement("img");
        whatsappIcon.src = "/whatsapp.png";
        whatsappIcon.style.height = "25px";
        whatsappIcon.style.width = "25px";
        divWhatsapp.appendChild(whatsappIcon);
        divWhatsapp.appendChild(whatsapp);

        divSocial.appendChild(divInstagram);
        divSocial.appendChild(divWhatsapp);

        divImage.appendChild(img);
        divHeader.appendChild(divImage);
        divHeader.appendChild(divSocial);
        div.appendChild(divHeader);

        const values = Object.keys(etiqueta);
        for (const item of values) {
          if (item !== "id") {
            const h1 = document.createElement("h1");
            h1.style.fontWeight = "600";
            h1.style.textTransform = "uppercase";

            h1.innerHTML = item === "entreCalles" ? "entre calles" : item;
            const divH3 = document.createElement("div");
            divH3.style.width = "100%";
            divH3.style.borderBottom = "1px solid black";
            divH3.style.paddingBottom = "5px";
            divH3.style.minHeight = "33px";
            const h3 = document.createElement("h3");
            h3.style.textTransform = "uppercase";

            h3.innerHTML = etiqueta[item];
            divH3.appendChild(h3);
            div.appendChild(h1);
            div.appendChild(divH3);
            stickerContainer.appendChild(div);
          }
        }
      }
      body.appendChild(stickerContainer);
      limit = limit + 4;
      if (limit > etiquetas.length) {
        limit = etiquetas.length;
      }
    }
    html.appendChild(body);
    console.log("acaa");
    const imagen =
      html.children[1].children[0].children[0].children[0].children[0]
        .children[0];

    imagen.addEventListener("load", function () {
      // return html
      console.log("acaaa");
      setTimeout(resolve, 1000, html);
    });
    //   setTimeout(resolve, 1000, html);
  });
