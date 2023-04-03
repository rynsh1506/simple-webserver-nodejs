import http from "node:http";
import fs from "node:fs";
import { template } from "chalk-template";

const port = 5000;

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write("Error: file not found");
        } else {
            res.write(data);
        }
        res.end();
    });
};

http.createServer((req, res) => {
    res.writeHead(200, {
        "Contents-type": "text/html",
    });
    renderHTML("./view/index.html", res);
}).listen(port, () => {
    console.log(template(`Listening on port ${port}... \nLink: {red.underline http://localhost:${port}}`));
});
