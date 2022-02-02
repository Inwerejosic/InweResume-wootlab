// const { download } = require("express/lib/response");

// async function generatePDF(){
//     document.getElementById("download").innerHTML = "I am downloading, please wait";

//     var downloading = document.getElementById("myresume");
//     var doc = new jsPDF('1', 'pt');

//     await html2canvas(downloading, {

//     }).then((canvas) => {
//         doc.addImage(canvas.toDataURL("image.png"), 'PNG', 5, 5, 500, 500);
//     })
//     doc.save("myfile.pdf");

//     document.getElementById("download").innerHTML = "click to download"
// }