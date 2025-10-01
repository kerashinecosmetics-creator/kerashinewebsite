// proxy.js
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Forward all requests from port 80 to Next.js (3000)
app.use(
  "/",
  createProxyMiddleware({
    target: "http://localhost:3000",
    changeOrigin: true,
  })
);

app.listen(80, () => {
  console.log("Proxy running on http://kerashine.com (port 80) → 3000");
});
