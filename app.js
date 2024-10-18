import e from "express";
const app = e();
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 3000;

app.use(e.static(path.join(__dirname, "/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.listen(port, (_) => console.log(`react app is listening on port ${port}`));
