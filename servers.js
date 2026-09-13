const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// فایل ذخیره دائمی
const DATA_FILE = path.join(__dirname, "players.json");

// خواندن داده‌ها
function loadPlayers() {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            fs.writeFileSync(DATA_FILE, "{}");
        }

        return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    } catch (error) {
        console.error("Error loading players:", error);
        return {};
    }
}

// ذخیره داده‌ها
function savePlayers(players) {
    fs.writeFileSync(
        DATA_FILE,
        JSON.stringify(players, null, 2)
    );
}

let players = loadPlayers();

// تست سرور
app.get("/", (req, res) => {
    res.json({
        online: true,
        message: "World Gama server is running!"
    });
});

// ساخت ID
app.post("/api/create-id", (req, res) => {
    const { id } = req.body;

    if (!/^\d{9,12}$/.test(id)) {
        return res.status(400).json({
            success: false,
            message: "ID must contain 9-12 digits."
        });
    }

    if (players[id]) {
        return res.status(409).json({
            success: false,
            message: "This ID is already taken."
        });
    }

    players[id] = {
        coins: 0,
        level: 1
    };

    savePlayers(players);

    res.json({
        success: true,
        message: "ID created successfully.",
        id: id
    });
});

// دریافت اطلاعات بازیکن
app.get("/api/player/:id", (req, res) => {
    const id = req.params.id;

    if (!players[id]) {
        return res.status(404).json({
            success: false,
            message: "ID not found."
        });
    }

    res.json({
        success: true,
        id: id,
        coins: players[id].coins,
        level: players[id].level
    });
});

// تغییر سکه و Level
app.post("/api/player/:id/save", (req, res) => {
    const id = req.params.id;

    if (!players[id]) {
        return res.status(404).json({
            success: false,
            message: "ID not found."
        });
    }

    const { coins, level } = req.body;

    if (typeof coins === "number") {
        players[id].coins = coins;
    }

    if (typeof level === "number") {
        players[id].level = level;
    }

    savePlayers(players);

    res.json({
        success: true,
        message: "Data saved permanently.",
        player: players[id]
    });
});

app.listen(PORT, () => {
    console.log(
        `World Gama server running on port ${PORT}`
    );
});
