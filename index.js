const fs = require("fs");
var pdf = require("html-pdf");
var path = require("path");
var handlebars = require("handlebars");

var elem1 = fs.readFileSync("./Elementos_1.png", { encoding: "base64" });
var elem2 = fs.readFileSync("./Elementos_2.png", { encoding: "base64" });
var elem3 = fs.readFileSync("./Elementos_3.png", { encoding: "base64" });
var managerr_assign = fs.readFileSync("./managerr_assign.png", {
  encoding: "base64",
});

const data = {
  courseName: "JS",
  duration: "70HORAS",
  conclusionDate: "hoje",
  generalManager: "Serra",
  studentName: "belois lsdjfakdsfjalksdfjakdljfaldskfjaskdlf",
  element_1: elem1,
  element_2: elem2,
  element_3: elem3,
  managerr_assign: managerr_assign,
};

var html = fs.readFileSync("./html.html", "utf8");
var options = {
  orientation: "landscape",
  height: "1080px",
  width: "1920px",
};

var templateHtml = fs.readFileSync(
  path.join(process.cwd(), "./template.html"),
  "utf8"
);
var template = handlebars.compile(templateHtml);

var html = template(data);

pdf.create(html, options).toFile("./businesscard.pdf", function (err, res) {
  if (err) return console.log(err);
  console.log(res);
});
