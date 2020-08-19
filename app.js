const fetch = require("node-fetch")
const ch = require("cheerio")
const fs = require("fs")

const URL = ""

// const elements = []

fetch(URL).then(r => r.text().then(html => {
    const $ = ch.load(html)
    let o = ""
    $("a").each((i, e) => {
        if (e?.attribs["href"]?.startsWith("/") || e?.attribs["href"]?.startsWith("#") || !e?.attribs["href"])
            return
        elements.push({ url: e.attribs["href"], text: e.children[0].data })
        o += "\n" + e.attribs["href"]
    })
    console.log(o)

}))

