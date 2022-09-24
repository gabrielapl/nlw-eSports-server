import express from "express";
import { response } from "express";
const app = express();
app.get("/ads", (req, res) => {
    return response.json([
        { id: 1, name: "Anúncio 1" },
        { id: 1, name: "Anúncio 1" },
        { id: 1, name: "Anúncio 1" }
    ]);
});
app.listen(3333, () => console.log("Server listening on port 3333 🚀"));
