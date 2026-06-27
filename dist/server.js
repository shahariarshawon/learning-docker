"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 3000;
app.get("/", (req, res) => {
    res.send(`
    <html>
      <head>
        <title>Docker TypeScript App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #0f172a;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .card {
            background: #1e293b;
            padding: 40px;
            border-radius: 16px;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          }
          h1 {
            color: #38bdf8;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Hello Docker + TypeScript!</h1>
          <p>This application is running inside a Docker container.</p>
          <p>Language: TypeScript</p>
        </div>
      </body>
    </html>
  `);
});
app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        message: "Docker TypeScript app is healthy",
        language: "TypeScript",
        port: PORT
    });
});
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});
