//Joshua Pardridge
//IFT 458 Module 1 Assignment 2

const httpServer = require("http");
const url = require("url");
const fs = require("fs");

const replaceTemplate = require("./modules/replaceTemplate");

/// Read data from file
// Template
const tempLoan = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");

/////////////////////////////////
// Template
const templateHTMLCourse = fs.readFileSync(
  `${__dirname}/template/templateCourse.html`,
  "utf-8"
);

const dataObj = JSON.parse(tempLoan);

////////////////////////////////
//Create Server
const server = httpServer.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  if (query.id) {
    if (pathname === "/" || pathname.toLowerCase() === "/loans") {
      res.writeHead(200, {
        "Content-type": "text/html",
      });
      const loan = dataObj[Number(query.id)];
      const loanHTML = replaceTemplate(templateHTMLCourse, loan);
      res.end(loanHTML);
    }
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end(`resource not found`);
  }
});

//Start Listening to requests
server.listen(8000, "localhost", () => {
  console.log("Listening to requests on port 8000");
});
