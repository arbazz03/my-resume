const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.get("/generate-pdf", async (req, res) => {
    let browser;

    try {
        browser = await puppeteer.launch({
            headless: true,
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--font-render-hinting=medium",
                "--force-color-profile=srgb",
            ],
        });

        const page = await browser.newPage();

        await page.setViewport({
            width: 1400,
            height: 2000,
            deviceScaleFactor: 2,
        });

        await page.goto(
            "https://friendly-palm-tree-67r6rjpg4wvfp4x-5173.app.github.dev/",
            {
                waitUntil: "networkidle0",
            }
        );

        await page.emulateMediaType("screen");

        const pdf = await page.pdf({
            format: "A4",
            printBackground: true,
            preferCSSPageSize: true,
            margin: {
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
            },
            scale: 1,
        });

        res.setHeader("Content-Type", "application/pdf");

        res.send(pdf);

    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    } finally {
        if (browser) await browser.close();
    }
});

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});