import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePDFhtml2canvas = (element) => {
  
    // Crea una instancia de jsPDF
    const doc = new jsPDF();
  
    // Convierte el elemento HTML en una imagen utilizando html2canvas
    html2canvas(element)
      .then((canvas) => {
        // Obtiene la URL de la imagen generada
        const imgData = canvas.toDataURL('image/png');
  
        // Agrega la imagen al PDF
        doc.addImage(imgData, 'PNG', 10, 10, 190, 0);
  
        // Guarda el PDF
        doc.save('etiqueta.pdf');
      });
  }
 
  