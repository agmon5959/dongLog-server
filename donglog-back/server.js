const http = require("http");

const server = http.createServer((req, res) => {
  const { url, method } = req;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  if (method === "GET" && url === "/home") {
    res.write("Hello World");
  } else {
    res.write("한글 테스트");
  }

  res.end();
});

server.listen(3001, () => {
  console.log("서버가 실행중");
});
