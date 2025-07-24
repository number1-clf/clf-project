var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/bundle-PoFK9U/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
__name(checkURL, "checkURL");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// videos.json
var videos_default = [
  {
    videoId: "8eSn6c2l1yo",
    job_title: "Marketing Professor",
    similar_videos: [
      "l6w57uFyuME",
      "_pVkBToVXeI",
      "319jNSRJ5js",
      "B7Ms7NWz914",
      "TVeKWeKCvkg"
    ]
  },
  {
    videoId: "N7SG4hFNObE",
    job_title: "author of illustrated children's books with poems",
    similar_videos: [
      "Q4gokHWD4E4",
      "zY0YGYgpRJs",
      "zxhfhDTVsPw",
      "nO8Css6x2z8",
      "YVfbMuilL7o"
    ]
  },
  {
    videoId: "DF2cSbN-au4",
    job_title: "Steadicam operator",
    similar_videos: [
      "zxhfhDTVsPw",
      "i5uQojsraMM",
      "cgB4TtlyFP8",
      "F9etbDLWW9Y",
      "zY0YGYgpRJs"
    ]
  },
  {
    videoId: "i5uQojsraMM",
    job_title: "social media manager for music artists",
    similar_videos: [
      "zxhfhDTVsPw",
      "DF2cSbN-au4",
      "YVfbMuilL7o",
      "Q4gokHWD4E4",
      "IGZlud92UCs"
    ]
  },
  {
    videoId: "FeNU8GKI6kk",
    job_title: "Police officer",
    similar_videos: [
      "WKG_8ZDO4QY",
      "XfTBczNzRng",
      "hVY2S9SMvgs",
      "7ZNpPx1Wbk4",
      "VljOrJ4-bjc"
    ]
  },
  {
    videoId: "i2F8mv06hhk",
    job_title: "Singer",
    similar_videos: [
      "Tt-945LdRxI",
      "DqVZ4C2uYVM",
      "y14K6s3F9P4",
      "WWYxv6huoOI",
      "2kKC8Ym_Hzk"
    ]
  },
  {
    videoId: "DYdBF097MAg",
    job_title: "Assesses diversity in films",
    similar_videos: [
      "YsWca8tSSkI",
      "0Z4uL-YQmMU",
      "5tDwlflWikc",
      "Ziwd_aCYNM8",
      "b1po2dxHfHE"
    ]
  },
  {
    videoId: "XfTBczNzRng",
    job_title: "Pensions",
    similar_videos: [
      "XKBBWP4cHSE",
      "kjvFBWeR_2w",
      "q_zbnou9gGs",
      "awFwWsh3esc",
      "Hnrg1w5AUoQ"
    ]
  },
  {
    videoId: "zY0YGYgpRJs",
    job_title: "Influencer",
    similar_videos: [
      "nO8Css6x2z8",
      "F9etbDLWW9Y",
      "N7SG4hFNObE",
      "DF2cSbN-au4",
      "zxhfhDTVsPw"
    ]
  },
  {
    videoId: "91thH-qMIC0",
    job_title: "Horseshoe maker",
    similar_videos: [
      "7_oGGAzJJ0k",
      "cQYnnlMvKMk",
      "G-PCLxb9lYs",
      "Z-3HgCNhN0g",
      "o3ESWJBwD3c"
    ]
  },
  {
    videoId: "7_oGGAzJJ0k",
    job_title: "Makes cars bulletproof",
    similar_videos: [
      "o3ESWJBwD3c",
      "jI6VaiiHQXA",
      "G-PCLxb9lYs",
      "4bPLEQXzqmM",
      "Xx-caBaVJJ4"
    ]
  },
  {
    videoId: "VljOrJ4-bjc",
    job_title: "CEO",
    similar_videos: [
      "q1P-Q8KzSxc",
      "jNOb8Zoi0Gw",
      "cJQrrYih7jo",
      "vQLAw1Lks-M",
      "1BzmYP4snag"
    ]
  },
  {
    videoId: "eB-_h-ExnsU",
    job_title: "Corporate Operations",
    similar_videos: [
      "X2LACSEusXs",
      "dxrPCZoUQPM",
      "nTZpSnZN3U0",
      "M4k8uYKwtQQ",
      "XfTBczNzRng"
    ]
  },
  {
    videoId: "MEhdu2lTbWg",
    job_title: "Tax Consultant for Drop Shippers/Coaches",
    similar_videos: [
      "Hnrg1w5AUoQ",
      "XKBBWP4cHSE",
      "XfTBczNzRng",
      "9pEaE6Ptr3w",
      "awFwWsh3esc"
    ]
  },
  {
    videoId: "Hnrg1w5AUoQ",
    job_title: "Data Engineer",
    similar_videos: [
      "XKBBWP4cHSE",
      "kjvFBWeR_2w",
      "MEhdu2lTbWg",
      "XfTBczNzRng",
      "awFwWsh3esc"
    ]
  },
  {
    videoId: "QBs0Az3i6cI",
    job_title: "Public Relations",
    similar_videos: [
      "fGKu96dofyw",
      "X9fKfuyCoxU",
      "8nxBY2G6sgk",
      "LBy5Wdzp-rs",
      "sWWgVWxAD5A"
    ]
  },
  {
    videoId: "lu6XdxuTtfY",
    job_title: "Basketball Player (Shooting Guard)",
    similar_videos: [
      "-o4IAymDGzc",
      "pMZ75HdkjW8",
      "F9Ftj3Xs6gc",
      "DqVZ4C2uYVM",
      "uNOUt-JEXR8"
    ]
  },
  {
    videoId: "BHNA-eCmpAQ",
    job_title: "Unknown",
    similar_videos: [
      "y14K6s3F9P4",
      "F9Ftj3Xs6gc",
      "C_7rgCFh7qE",
      "DqVZ4C2uYVM",
      "sWWgVWxAD5A"
    ]
  },
  {
    videoId: "WWYxv6huoOI",
    job_title: "Unknown",
    similar_videos: [
      "y14K6s3F9P4",
      "C_7rgCFh7qE",
      "RqqYjm0VkCQ",
      "lGfpph4I53w",
      "uwQ4-hUA64s"
    ]
  },
  {
    videoId: "5pKvzNxlt58",
    job_title: "Child model",
    similar_videos: [
      "y14K6s3F9P4",
      "C_7rgCFh7qE",
      "klXHUbtgYCE",
      "RqqYjm0VkCQ",
      "3Seyotp6hQc"
    ]
  },
  {
    videoId: "q_zbnou9gGs",
    job_title: "Canada notary",
    similar_videos: [
      "XfTBczNzRng",
      "XKBBWP4cHSE",
      "kjvFBWeR_2w",
      "awFwWsh3esc",
      "-dHNBBZ3h10"
    ]
  },
  {
    videoId: "HeXWtJUKINM",
    job_title: "Construction Worker",
    similar_videos: [
      "4bPLEQXzqmM",
      "qFsk9hwFauw",
      "6F9WHAky4Z4",
      "aT9B1gEq5sY",
      "0C02kd_uO24"
    ]
  },
  {
    videoId: "Q4gokHWD4E4",
    job_title: "romance author",
    similar_videos: [
      "N7SG4hFNObE",
      "YVfbMuilL7o",
      "3JOVlesZyUE",
      "i5uQojsraMM",
      "CzT6IwiYzsM"
    ]
  },
  {
    videoId: "bTI_cL0c-n4",
    job_title: "Food Preparation Worker",
    similar_videos: [
      "G-PCLxb9lYs",
      "Z-3HgCNhN0g",
      "7_oGGAzJJ0k",
      "jI6VaiiHQXA",
      "aT9B1gEq5sY"
    ]
  },
  {
    videoId: "B7Ms7NWz914",
    job_title: "gymnastics teacher",
    similar_videos: [
      "l6w57uFyuME",
      "8eSn6c2l1yo",
      "FBDbR09xeiA",
      "PJasOAvwaN8",
      "TVeKWeKCvkg"
    ]
  },
  {
    videoId: "BOvKFHan4FY",
    job_title: "Firefighter",
    similar_videos: [
      "vlPkTYwHJ0U",
      "GHyqq9SULcs",
      "k8arecKqjIg",
      "JEbAI2tHSWw",
      "AbiySDhBcBc"
    ]
  },
  {
    videoId: "aL8HoOMX0pc",
    job_title: "Spicy Peanut Butter Product Server/Workshop Facilitator",
    similar_videos: [
      "jI6VaiiHQXA",
      "TWQDgV_pnUE",
      "dMe_cXUqJKU",
      "o3ESWJBwD3c",
      "AiM9ehM0Ycw"
    ]
  },
  {
    videoId: "vRNq5dinY64",
    job_title: "nurse",
    similar_videos: [
      "5GfFMNC14r8",
      "OZjYkx_7th0",
      "8QTojCX44GA",
      "IEso2O9BG40",
      "dxrPCZoUQPM"
    ]
  },
  {
    videoId: "OJb8dhu2hFQ",
    job_title: "Yacht engineer",
    similar_videos: [
      "AT21j-v0tB0",
      "G-PCLxb9lYs",
      "BC6ZxoKt0Lg",
      "AiM9ehM0Ycw",
      "_x2n61lpPVs"
    ]
  },
  {
    videoId: "5GfFMNC14r8",
    job_title: "future doctor",
    similar_videos: [
      "vRNq5dinY64",
      "IEso2O9BG40",
      "dxrPCZoUQPM",
      "8QTojCX44GA",
      "9QMA_H4y9Vc"
    ]
  },
  {
    videoId: "V-plR5qB55g",
    job_title: "Music Maker for Loi Girl",
    similar_videos: [
      "DqVZ4C2uYVM",
      "GW1eAsx_jKA",
      "Tt-945LdRxI",
      "CMvPvrai5fk",
      "TuA04vGRkUs"
    ]
  },
  {
    videoId: "qZpFhEj_ZYg",
    job_title: "Water slide designer",
    similar_videos: [
      "LBy5Wdzp-rs",
      "DqVZ4C2uYVM",
      "-b0D1ZIymIM",
      "vpv-ERcYFvQ",
      "yNJ3if5TexY"
    ]
  },
  {
    videoId: "LBy5Wdzp-rs",
    job_title: "Pop Culture Memorabilia Creator",
    similar_videos: [
      "sWWgVWxAD5A",
      "oeb0_GM2lXQ",
      "qZpFhEj_ZYg",
      "3Seyotp6hQc",
      "DqVZ4C2uYVM"
    ]
  },
  {
    videoId: "bAnnkJEIXiE",
    job_title: "2D compositor in VFX",
    similar_videos: [
      "nO8Css6x2z8",
      "QRVxZ7nBt7Q",
      "zxhfhDTVsPw",
      "DF2cSbN-au4",
      "zY0YGYgpRJs"
    ]
  },
  {
    videoId: "p6pUu4OauF8",
    job_title: "Chess Teacher/Coach",
    similar_videos: [
      "319jNSRJ5js",
      "TVeKWeKCvkg",
      "8eSn6c2l1yo",
      "PJasOAvwaN8",
      "l6w57uFyuME"
    ]
  },
  {
    videoId: "KIvf8--nDk8",
    job_title: "Food tour guide",
    similar_videos: [
      "Z-3HgCNhN0g",
      "5rjhMHn1Cqo",
      "iD-0PpgSNG4",
      "cQYnnlMvKMk",
      "4bPLEQXzqmM"
    ]
  },
  {
    videoId: "eTCusuJZoyw",
    job_title: "Sophology, sensual sematic coach for women and queer",
    similar_videos: [
      "8nxBY2G6sgk",
      "9QMA_H4y9Vc",
      "ANWs569KVcs",
      "hVY2S9SMvgs",
      "dxrPCZoUQPM"
    ]
  },
  {
    videoId: "RaoY9PQbwa0",
    job_title: "Actor",
    similar_videos: [
      "sWWgVWxAD5A",
      "9uuq1QZBxN4",
      "BHNA-eCmpAQ",
      "vpv-ERcYFvQ",
      "CMvPvrai5fk"
    ]
  },
  {
    videoId: "1aECPZVfdLs",
    job_title: "Founder and Designer",
    similar_videos: [
      "dMe_cXUqJKU",
      "jI6VaiiHQXA",
      "laLHRg6ZpvI",
      "QgOp2ovoOnc",
      "qEwMcmu_h6M"
    ]
  },
  {
    videoId: "IGZlud92UCs",
    job_title: "Comedy YouTuber",
    similar_videos: [
      "i5uQojsraMM",
      "3JOVlesZyUE",
      "DF2cSbN-au4",
      "F9etbDLWW9Y",
      "zxhfhDTVsPw"
    ]
  },
  {
    videoId: "CMvPvrai5fk",
    job_title: "Singer",
    similar_videos: [
      "GW1eAsx_jKA",
      "sWWgVWxAD5A",
      "TuA04vGRkUs",
      "DqVZ4C2uYVM",
      "5pKvzNxlt58"
    ]
  },
  {
    videoId: "zxhfhDTVsPw",
    job_title: "Trailer Editor",
    similar_videos: [
      "i5uQojsraMM",
      "DF2cSbN-au4",
      "N7SG4hFNObE",
      "F9etbDLWW9Y",
      "zY0YGYgpRJs"
    ]
  },
  {
    videoId: "b5jj-zlb5x0",
    job_title: "sex scientist",
    similar_videos: [
      "pqMCh5l7ryI",
      "7oA-C2Kyy4s",
      "dMe_cXUqJKU",
      "BC6ZxoKt0Lg",
      "Af-m50-O0cs"
    ]
  },
  {
    videoId: "pqMCh5l7ryI",
    job_title: "Unknown (Factory worker in wood manufacturing)",
    similar_videos: [
      "5rjhMHn1Cqo",
      "CXEDobIjPEo",
      "4bPLEQXzqmM",
      "dMe_cXUqJKU",
      "iD-0PpgSNG4"
    ]
  },
  {
    videoId: "w3sERCrzLBU",
    job_title: "Sex toy seller",
    similar_videos: [
      "-33l1q05uIM",
      "j8BUAmYqRVI",
      "VA8CL62t7Rk",
      "0C02kd_uO24",
      "1UnRI91Cq1E"
    ]
  },
  {
    videoId: "nO8Css6x2z8",
    job_title: "Author/Writer",
    similar_videos: [
      "F9etbDLWW9Y",
      "QRVxZ7nBt7Q",
      "zY0YGYgpRJs",
      "N7SG4hFNObE",
      "DF2cSbN-au4"
    ]
  },
  {
    videoId: "J1wFZfRwEcM",
    job_title: "Sherpa / Mountain Guide",
    similar_videos: [
      "cQYnnlMvKMk",
      "6F9WHAky4Z4",
      "qFsk9hwFauw",
      "Z-3HgCNhN0g",
      "aT9B1gEq5sY"
    ]
  },
  {
    videoId: "_-O7fbJkbOQ",
    job_title: "Strength and balance exercise group leader/instructor (falls prevention)",
    similar_videos: [
      "dxrPCZoUQPM",
      "TuZ9l1xAjv0",
      "OZjYkx_7th0",
      "ZJHBO6GGTgw",
      "yahJaYBx3kU"
    ]
  },
  {
    videoId: "qFsk9hwFauw",
    job_title: "Chef/Restaurant Owner",
    similar_videos: [
      "VA8CL62t7Rk",
      "6F9WHAky4Z4",
      "4bPLEQXzqmM",
      "aT9B1gEq5sY",
      "HeXWtJUKINM"
    ]
  },
  {
    videoId: "M4k8uYKwtQQ",
    job_title: "announcer",
    similar_videos: [
      "F9Ftj3Xs6gc",
      "y14K6s3F9P4",
      "uNOUt-JEXR8",
      "5pKvzNxlt58",
      "pPu54iJ1qOU"
    ]
  },
  {
    videoId: "obm-zrrcdO8",
    job_title: "milkman",
    similar_videos: [
      "bTI_cL0c-n4",
      "G-PCLxb9lYs",
      "AT21j-v0tB0",
      "Z-3HgCNhN0g",
      "hB_-G-QWxd8"
    ]
  },
  {
    videoId: "WYuxOafORis",
    job_title: "Weather Forecaster",
    similar_videos: [
      "BC6ZxoKt0Lg",
      "rJfJoCmpQTs",
      "rPNazYUtfd4",
      "CXEDobIjPEo",
      "7SudW9YN5m4"
    ]
  },
  {
    videoId: "cgB4TtlyFP8",
    job_title: "Unknown",
    similar_videos: [
      "DF2cSbN-au4",
      "YVfbMuilL7o",
      "IsCt76eyetI",
      "N7SG4hFNObE",
      "zxhfhDTVsPw"
    ]
  },
  {
    videoId: "NlQq37r4158",
    job_title: "Flight Attendant",
    similar_videos: [
      "0C02kd_uO24",
      "VA8CL62t7Rk",
      "j8BUAmYqRVI",
      "-33l1q05uIM",
      "qFsk9hwFauw"
    ]
  },
  {
    videoId: "_vukBAl6Uxk",
    job_title: "Unknown",
    similar_videos: [
      "wvmspQ9INvQ",
      "XRaiUQGhY6Q",
      "R1Ha2KtMqT4",
      "d7TO_REYbvs",
      "n5d_MiGd4Jo"
    ]
  },
  {
    videoId: "utlMfpIbSKM",
    job_title: "Toxiologist",
    similar_videos: [
      "vlPkTYwHJ0U",
      "RsL2Lg6PAUg",
      "a83P0bnelpU",
      "8PeqVA9puTU",
      "AbiySDhBcBc"
    ]
  },
  {
    videoId: "PJasOAvwaN8",
    job_title: "Early Years Educator",
    similar_videos: [
      "_pVkBToVXeI",
      "l6w57uFyuME",
      "TVeKWeKCvkg",
      "FBDbR09xeiA",
      "319jNSRJ5js"
    ]
  },
  {
    videoId: "lDYpKkIq4N4",
    job_title: "Tattooist",
    similar_videos: [
      "DqVZ4C2uYVM",
      "RqqYjm0VkCQ",
      "Cwl3-cLiP1I",
      "EFtvMRJ_kwM",
      "C_7rgCFh7qE"
    ]
  },
  {
    videoId: "QRVxZ7nBt7Q",
    job_title: "Magician / Performance Artist",
    similar_videos: [
      "3JOVlesZyUE",
      "nO8Css6x2z8",
      "F9etbDLWW9Y",
      "bAnnkJEIXiE",
      "zY0YGYgpRJs"
    ]
  },
  {
    videoId: "ptm75kS8cqk",
    job_title: "Receptionist",
    similar_videos: [
      "aT9B1gEq5sY",
      "4bPLEQXzqmM",
      "qFsk9hwFauw",
      "0C02kd_uO24",
      "6F9WHAky4Z4"
    ]
  },
  {
    videoId: "R1Ha2KtMqT4",
    job_title: "Singer",
    similar_videos: [
      "wvmspQ9INvQ",
      "UkRkUb6-xow",
      "n5d_MiGd4Jo",
      "nTZpSnZN3U0",
      "_vukBAl6Uxk"
    ]
  },
  {
    videoId: "TWQDgV_pnUE",
    job_title: "Unknown",
    similar_videos: [
      "jI6VaiiHQXA",
      "aL8HoOMX0pc",
      "geYThCosmho",
      "EumbbNyGRMk",
      "AiM9ehM0Ycw"
    ]
  },
  {
    videoId: "MXXyOMgs9Xk",
    job_title: "Unknown",
    similar_videos: [
      "0C02kd_uO24",
      "-33l1q05uIM",
      "VA8CL62t7Rk",
      "NlQq37r4158",
      "1UnRI91Cq1E"
    ]
  },
  {
    videoId: "3JOVlesZyUE",
    job_title: "Content creator",
    similar_videos: [
      "QRVxZ7nBt7Q",
      "IsCt76eyetI",
      "Q4gokHWD4E4",
      "CzT6IwiYzsM",
      "YVfbMuilL7o"
    ]
  },
  {
    videoId: "JEbAI2tHSWw",
    job_title: "Bins collector",
    similar_videos: [
      "vlPkTYwHJ0U",
      "BOvKFHan4FY",
      "Tf2LUbofY5I",
      "rWzqxjRK1IU",
      "utlMfpIbSKM"
    ]
  },
  {
    videoId: "ndD1UXmfgw0",
    job_title: "Investment advisor or wealth manager",
    similar_videos: [
      "kjvFBWeR_2w",
      "awFwWsh3esc",
      "XKBBWP4cHSE",
      "XfTBczNzRng",
      "Hnrg1w5AUoQ"
    ]
  },
  {
    videoId: "nFYOQ9VguAg",
    job_title: "Australian Football Agent",
    similar_videos: [
      "41c_AkhZeRk",
      "klXHUbtgYCE",
      "aWR6JVzMHZM",
      "Tt-945LdRxI",
      "RqqYjm0VkCQ"
    ]
  },
  {
    videoId: "AiM9ehM0Ycw",
    job_title: "Farm manager, Poultry",
    similar_videos: [
      "o3ESWJBwD3c",
      "syGpIjQf27c",
      "laLHRg6ZpvI",
      "jI6VaiiHQXA",
      "qFsk9hwFauw"
    ]
  },
  {
    videoId: "pYQEQ49kqoE",
    job_title: "Engineer (medicine factory)",
    similar_videos: [
      "dxrPCZoUQPM",
      "XMhlNDGmn8A",
      "8QTojCX44GA",
      "vRNq5dinY64",
      "9QMA_H4y9Vc"
    ]
  },
  {
    videoId: "F9Ftj3Xs6gc",
    job_title: "Outdoor wind tunnel (operator/facilitator)",
    similar_videos: [
      "C_7rgCFh7qE",
      "y14K6s3F9P4",
      "klXHUbtgYCE",
      "BHNA-eCmpAQ",
      "RqqYjm0VkCQ"
    ]
  },
  {
    videoId: "iD-0PpgSNG4",
    job_title: "Unknown",
    similar_videos: [
      "5rjhMHn1Cqo",
      "7oA-C2Kyy4s",
      "3PjjZUgSPu8",
      "NlQq37r4158",
      "-33l1q05uIM"
    ]
  },
  {
    videoId: "pPu54iJ1qOU",
    job_title: "Singer",
    similar_videos: [
      "3Seyotp6hQc",
      "RqqYjm0VkCQ",
      "C_7rgCFh7qE",
      "5pKvzNxlt58",
      "kEvyHCJWg6U"
    ]
  },
  {
    videoId: "Cwl3-cLiP1I",
    job_title: "Stripper",
    similar_videos: [
      "DqVZ4C2uYVM",
      "-o4IAymDGzc",
      "GksYGRB6ork",
      "y14K6s3F9P4",
      "GW1eAsx_jKA"
    ]
  },
  {
    videoId: "9NnYRn_oixc",
    job_title: "Choreographer",
    similar_videos: [
      "P9MRaDQ5Pdo",
      "Cwl3-cLiP1I",
      "-o4IAymDGzc",
      "GksYGRB6ork",
      "y14K6s3F9P4"
    ]
  },
  {
    videoId: "aWR6JVzMHZM",
    job_title: "wedding celebrant",
    similar_videos: [
      "y14K6s3F9P4",
      "C_7rgCFh7qE",
      "vpv-ERcYFvQ",
      "RqqYjm0VkCQ",
      "WWYxv6huoOI"
    ]
  },
  {
    videoId: "-b0D1ZIymIM",
    job_title: "spoken word poet",
    similar_videos: [
      "DqVZ4C2uYVM",
      "TuA04vGRkUs",
      "RqqYjm0VkCQ",
      "vpv-ERcYFvQ",
      "sWWgVWxAD5A"
    ]
  },
  {
    videoId: "AT21j-v0tB0",
    job_title: "unknown",
    similar_videos: [
      "G-PCLxb9lYs",
      "BC6ZxoKt0Lg",
      "rPNazYUtfd4",
      "7_oGGAzJJ0k",
      "V2n5ls3gYRI"
    ]
  },
  {
    videoId: "k8arecKqjIg",
    job_title: "Firefighter",
    similar_videos: [
      "BOvKFHan4FY",
      "GHyqq9SULcs",
      "vlPkTYwHJ0U",
      "JEbAI2tHSWw",
      "AbiySDhBcBc"
    ]
  },
  {
    videoId: "_x2n61lpPVs",
    job_title: "Gearbox Engineer for Aston Martin",
    similar_videos: [
      "o3ESWJBwD3c",
      "BC6ZxoKt0Lg",
      "AT21j-v0tB0",
      "AiM9ehM0Ycw",
      "pqMCh5l7ryI"
    ]
  },
  {
    videoId: "-o4IAymDGzc",
    job_title: "Banjo Player",
    similar_videos: [
      "Mt01e0ssI24",
      "RqqYjm0VkCQ",
      "y14K6s3F9P4",
      "DqVZ4C2uYVM",
      "pMZ75HdkjW8"
    ]
  },
  {
    videoId: "tFeLSpsdn50",
    job_title: "Neuropsychologist specialized on ADHD",
    similar_videos: [
      "dxrPCZoUQPM",
      "pYQEQ49kqoE",
      "9QMA_H4y9Vc",
      "0M944FmlHxU",
      "XMhlNDGmn8A"
    ]
  },
  {
    videoId: "189ZC7ujLEI",
    job_title: "Professional Mountain Biker",
    similar_videos: [
      "dMe_cXUqJKU",
      "AT21j-v0tB0",
      "bTI_cL0c-n4",
      "J1wFZfRwEcM",
      "G-PCLxb9lYs"
    ]
  },
  {
    videoId: "o4htJIogg4w",
    job_title: "Unknown (Self-Employed Business Owner)",
    similar_videos: [
      "6F9WHAky4Z4",
      "aT9B1gEq5sY",
      "qFsk9hwFauw",
      "4bPLEQXzqmM",
      "VA8CL62t7Rk"
    ]
  },
  {
    videoId: "vlPkTYwHJ0U",
    job_title: "Vice Defense Minister",
    similar_videos: [
      "BOvKFHan4FY",
      "GHyqq9SULcs",
      "utlMfpIbSKM",
      "8PeqVA9puTU",
      "a83P0bnelpU"
    ]
  },
  {
    videoId: "KKWx8PJzO2o",
    job_title: "Officer of Space Intelligence",
    similar_videos: [
      "8PeqVA9puTU",
      "RsL2Lg6PAUg",
      "k8arecKqjIg",
      "utlMfpIbSKM",
      "GHyqq9SULcs"
    ]
  },
  {
    videoId: "dxrPCZoUQPM",
    job_title: "Neuroscientist",
    similar_videos: [
      "XMhlNDGmn8A",
      "pYQEQ49kqoE",
      "8QTojCX44GA",
      "9QMA_H4y9Vc",
      "IEso2O9BG40"
    ]
  },
  {
    videoId: "a7pbXiN_VQU",
    job_title: "Singer",
    similar_videos: [
      "y14K6s3F9P4",
      "RqqYjm0VkCQ",
      "klXHUbtgYCE",
      "C_7rgCFh7qE",
      "EFtvMRJ_kwM"
    ]
  },
  {
    videoId: "F6e3DK_b9ZA",
    job_title: "clown therapist",
    similar_videos: [
      "dxrPCZoUQPM",
      "vRNq5dinY64",
      "OZjYkx_7th0",
      "hVY2S9SMvgs",
      "eTCusuJZoyw"
    ]
  },
  {
    videoId: "8QTojCX44GA",
    job_title: "Unknown",
    similar_videos: [
      "vRNq5dinY64",
      "dxrPCZoUQPM",
      "9QMA_H4y9Vc",
      "XMhlNDGmn8A",
      "IEso2O9BG40"
    ]
  },
  {
    videoId: "Af-m50-O0cs",
    job_title: "sheer designer",
    similar_videos: [
      "CXEDobIjPEo",
      "pqMCh5l7ryI",
      "BC6ZxoKt0Lg",
      "iD-0PpgSNG4",
      "rPNazYUtfd4"
    ]
  },
  {
    videoId: "vNJpJLX_xnU",
    job_title: "Sound Engineer",
    similar_videos: [
      "F9Ftj3Xs6gc",
      "srxsK8-Ilhk",
      "RqqYjm0VkCQ",
      "BHNA-eCmpAQ",
      "y14K6s3F9P4"
    ]
  },
  {
    videoId: "YVfbMuilL7o",
    job_title: "Producer",
    similar_videos: [
      "CzT6IwiYzsM",
      "Q4gokHWD4E4",
      "IsCt76eyetI",
      "3JOVlesZyUE",
      "cgB4TtlyFP8"
    ]
  },
  {
    videoId: "XCwsG0O7ryc",
    job_title: "Chef",
    similar_videos: [
      "Po7L6yov1fs",
      "Z-3HgCNhN0g",
      "AT21j-v0tB0",
      "8OFMGkgj1IU",
      "MaBXVbwXfEE"
    ]
  },
  {
    videoId: "Ziwd_aCYNM8",
    job_title: "Pornography Addiction Support Specialist",
    similar_videos: [
      "YsWca8tSSkI",
      "DYdBF097MAg",
      "5tDwlflWikc",
      "0Z4uL-YQmMU",
      "wxvcXImME-8"
    ]
  },
  {
    videoId: "GksYGRB6ork",
    job_title: "Strip Dancer",
    similar_videos: [
      "Cwl3-cLiP1I",
      "DqVZ4C2uYVM",
      "i2F8mv06hhk",
      "-o4IAymDGzc",
      "CLK29ezb8-4"
    ]
  },
  {
    videoId: "ra5Zp6uako4",
    job_title: "Homelessness support/housing assistance",
    similar_videos: [
      "YsWca8tSSkI",
      "5tDwlflWikc",
      "0Z4uL-YQmMU",
      "vKJZeC16bYw",
      "wxvcXImME-8"
    ]
  },
  {
    videoId: "Tf2LUbofY5I",
    job_title: "Deputy Secretary General NATO",
    similar_videos: [
      "RsL2Lg6PAUg",
      "JEbAI2tHSWw",
      "vlPkTYwHJ0U",
      "a83P0bnelpU",
      "rWzqxjRK1IU"
    ]
  },
  {
    videoId: "EFtvMRJ_kwM",
    job_title: "Exclusive Experience Manager / VIP Events Coordinator",
    similar_videos: [
      "klXHUbtgYCE",
      "C_7rgCFh7qE",
      "y14K6s3F9P4",
      "RqqYjm0VkCQ",
      "3Seyotp6hQc"
    ]
  },
  {
    videoId: "p-IOZAO8Rv4",
    job_title: "doula",
    similar_videos: [
      "IEso2O9BG40",
      "5GfFMNC14r8",
      "8nxBY2G6sgk",
      "_-O7fbJkbOQ",
      "dxrPCZoUQPM"
    ]
  },
  {
    videoId: "68O-0VEoNOo",
    job_title: "Dentist",
    similar_videos: [
      "8QTojCX44GA",
      "vRNq5dinY64",
      "dxrPCZoUQPM",
      "XMhlNDGmn8A",
      "OZjYkx_7th0"
    ]
  },
  {
    videoId: "P9MRaDQ5Pdo",
    job_title: "Director of Theater",
    similar_videos: [
      "GOCnUG5rONI",
      "EFtvMRJ_kwM",
      "DqVZ4C2uYVM",
      "9NnYRn_oixc",
      "-o4IAymDGzc"
    ]
  },
  {
    videoId: "WBULzdeI2B4",
    job_title: "Unknown",
    similar_videos: [
      "BHNA-eCmpAQ",
      "C_7rgCFh7qE",
      "DqVZ4C2uYVM",
      "TuA04vGRkUs",
      "GW1eAsx_jKA"
    ]
  },
  {
    videoId: "AbiySDhBcBc",
    job_title: "Police Officer",
    similar_videos: [
      "GHyqq9SULcs",
      "BOvKFHan4FY",
      "vlPkTYwHJ0U",
      "a83P0bnelpU",
      "utlMfpIbSKM"
    ]
  },
  {
    videoId: "cJQrrYih7jo",
    job_title: "Unknown (senior role related to operations or sales for a defense contractor)",
    similar_videos: [
      "jNOb8Zoi0Gw",
      "q1P-Q8KzSxc",
      "iEfwf4T-f-I",
      "iMYJCF5ALGM",
      "Siq-cNW_UIY"
    ]
  },
  {
    videoId: "vz1j7ltG8QU",
    job_title: "Air Traffic Controller (Trainee)",
    similar_videos: [
      "AiM9ehM0Ycw",
      "Qfpd91Vssnw",
      "7_oGGAzJJ0k",
      "jI6VaiiHQXA",
      "laLHRg6ZpvI"
    ]
  },
  {
    videoId: "Qfpd91Vssnw",
    job_title: "Lawyer",
    similar_videos: [
      "BC6ZxoKt0Lg",
      "rPNazYUtfd4",
      "7_oGGAzJJ0k",
      "laLHRg6ZpvI",
      "AiM9ehM0Ycw"
    ]
  },
  {
    videoId: "10KFRxFkNU8",
    job_title: "Charity Incubator Operator",
    similar_videos: [
      "5tDwlflWikc",
      "YsWca8tSSkI",
      "0Z4uL-YQmMU",
      "b1po2dxHfHE",
      "wxvcXImME-8"
    ]
  },
  {
    videoId: "G-PCLxb9lYs",
    job_title: "Delivery",
    similar_videos: [
      "7_oGGAzJJ0k",
      "jI6VaiiHQXA",
      "cQYnnlMvKMk",
      "o3ESWJBwD3c",
      "AT21j-v0tB0"
    ]
  },
  {
    videoId: "1BzmYP4snag",
    job_title: "Gaming Streamer",
    similar_videos: [
      "Siq-cNW_UIY",
      "jNOb8Zoi0Gw",
      "yiQZccJKcNk",
      "vQLAw1Lks-M",
      "ob0IBBaeOWY"
    ]
  },
  {
    videoId: "7FirdCcKRPI",
    job_title: "Designer (Brand Image)",
    similar_videos: [
      "jI6VaiiHQXA",
      "iD-0PpgSNG4",
      "dMe_cXUqJKU",
      "5rjhMHn1Cqo",
      "syGpIjQf27c"
    ]
  },
  {
    videoId: "7SudW9YN5m4",
    job_title: "Engineer",
    similar_videos: [
      "1UnRI91Cq1E",
      "6F9WHAky4Z4",
      "VA8CL62t7Rk",
      "-33l1q05uIM",
      "0C02kd_uO24"
    ]
  },
  {
    videoId: "srxsK8-Ilhk",
    job_title: "Game designer",
    similar_videos: [
      "RqqYjm0VkCQ",
      "sWWgVWxAD5A",
      "klXHUbtgYCE",
      "y14K6s3F9P4",
      "vNJpJLX_xnU"
    ]
  },
  {
    videoId: "Z-3HgCNhN0g",
    job_title: "Professional Skydiver",
    similar_videos: [
      "cQYnnlMvKMk",
      "jI6VaiiHQXA",
      "8OFMGkgj1IU",
      "Po7L6yov1fs",
      "Xx-caBaVJJ4"
    ]
  },
  {
    videoId: "jNOb8Zoi0Gw",
    job_title: "ethical hacker",
    similar_videos: [
      "cJQrrYih7jo",
      "Siq-cNW_UIY",
      "q1P-Q8KzSxc",
      "iMYJCF5ALGM",
      "ob0IBBaeOWY"
    ]
  },
  {
    videoId: "6qYQlhjobTY",
    job_title: "Archaeologist",
    similar_videos: [
      "BC6ZxoKt0Lg",
      "cQYnnlMvKMk",
      "rPNazYUtfd4",
      "CXEDobIjPEo",
      "bfc5JXsWtks"
    ]
  },
  {
    videoId: "3Seyotp6hQc",
    job_title: "Designer",
    similar_videos: [
      "sWWgVWxAD5A",
      "C_7rgCFh7qE",
      "y14K6s3F9P4",
      "EFtvMRJ_kwM",
      "5pKvzNxlt58"
    ]
  },
  {
    videoId: "mEy6ZWyuWV4",
    job_title: "Radio Speaker",
    similar_videos: [
      "CzT6IwiYzsM",
      "QRVxZ7nBt7Q",
      "N7SG4hFNObE",
      "nO8Css6x2z8",
      "DF2cSbN-au4"
    ]
  },
  {
    videoId: "DqVZ4C2uYVM",
    job_title: "Florist",
    similar_videos: [
      "RqqYjm0VkCQ",
      "y14K6s3F9P4",
      "vpv-ERcYFvQ",
      "C_7rgCFh7qE",
      "Cwl3-cLiP1I"
    ]
  },
  {
    videoId: "oB0TF8_VuWk",
    job_title: "street artist/graffiti artist",
    similar_videos: [
      "DqVZ4C2uYVM",
      "GW1eAsx_jKA",
      "uNOUt-JEXR8",
      "pMZ75HdkjW8",
      "sWWgVWxAD5A"
    ]
  },
  {
    videoId: "-Y35oWWXsbk",
    job_title: "Perfumer",
    similar_videos: [
      "5pKvzNxlt58",
      "EFtvMRJ_kwM",
      "DqVZ4C2uYVM",
      "vpv-ERcYFvQ",
      "TuA04vGRkUs"
    ]
  },
  {
    videoId: "6ns45cwSoTM",
    job_title: "Unknown",
    similar_videos: [
      "dMe_cXUqJKU",
      "jI6VaiiHQXA",
      "Qfpd91Vssnw",
      "pqMCh5l7ryI",
      "7FirdCcKRPI"
    ]
  },
  {
    videoId: "vKJZeC16bYw",
    job_title: "Unknown",
    similar_videos: [
      "ra5Zp6uako4",
      "b1po2dxHfHE",
      "10KFRxFkNU8",
      "0Z4uL-YQmMU",
      "5tDwlflWikc"
    ]
  },
  {
    videoId: "TuZ9l1xAjv0",
    job_title: "Nutrition Coach",
    similar_videos: [
      "ZJHBO6GGTgw",
      "9QMA_H4y9Vc",
      "vRNq5dinY64",
      "dxrPCZoUQPM",
      "_-O7fbJkbOQ"
    ]
  },
  {
    videoId: "8OFMGkgj1IU",
    job_title: "Camera Operator",
    similar_videos: [
      "Z-3HgCNhN0g",
      "Po7L6yov1fs",
      "iD-0PpgSNG4",
      "5rjhMHn1Cqo",
      "cQYnnlMvKMk"
    ]
  },
  {
    videoId: "GW1eAsx_jKA",
    job_title: "Artist (Large Scale Experiences)",
    similar_videos: [
      "TuA04vGRkUs",
      "sWWgVWxAD5A",
      "DqVZ4C2uYVM",
      "CMvPvrai5fk",
      "5pKvzNxlt58"
    ]
  },
  {
    videoId: "CXEDobIjPEo",
    job_title: "Technologist",
    similar_videos: [
      "BC6ZxoKt0Lg",
      "7SudW9YN5m4",
      "rPNazYUtfd4",
      "6F9WHAky4Z4",
      "laLHRg6ZpvI"
    ]
  },
  {
    videoId: "GOCnUG5rONI",
    job_title: "Artist (Life-size Candles)",
    similar_videos: [
      "EFtvMRJ_kwM",
      "-o4IAymDGzc",
      "C_7rgCFh7qE",
      "P9MRaDQ5Pdo",
      "y14K6s3F9P4"
    ]
  },
  {
    videoId: "VKnRCF_bDO4",
    job_title: "Singer/Rapper",
    similar_videos: [
      "sWWgVWxAD5A",
      "GW1eAsx_jKA",
      "5pKvzNxlt58",
      "CLK29ezb8-4",
      "TuA04vGRkUs"
    ]
  },
  {
    videoId: "-33l1q05uIM",
    job_title: "Unknown",
    similar_videos: [
      "VA8CL62t7Rk",
      "0C02kd_uO24",
      "MXXyOMgs9Xk",
      "j8BUAmYqRVI",
      "NlQq37r4158"
    ]
  },
  {
    videoId: "kjvFBWeR_2w",
    job_title: "Strategy Analyst",
    similar_videos: [
      "XKBBWP4cHSE",
      "awFwWsh3esc",
      "XfTBczNzRng",
      "Hnrg1w5AUoQ",
      "ndD1UXmfgw0"
    ]
  },
  {
    videoId: "fI3nPIkC0e4",
    job_title: "Theater actor",
    similar_videos: [
      "lGfpph4I53w",
      "3Seyotp6hQc",
      "EFtvMRJ_kwM",
      "y14K6s3F9P4",
      "C_7rgCFh7qE"
    ]
  },
  {
    videoId: "KKxR-VLC5b4",
    job_title: "Professional Poker Player",
    similar_videos: [
      "XKBBWP4cHSE",
      "Hnrg1w5AUoQ",
      "kjvFBWeR_2w",
      "aXOWBv7s9WA",
      "awFwWsh3esc"
    ]
  },
  {
    videoId: "o3ESWJBwD3c",
    job_title: "Unknown",
    similar_videos: [
      "jI6VaiiHQXA",
      "qFsk9hwFauw",
      "VA8CL62t7Rk",
      "AiM9ehM0Ycw",
      "aT9B1gEq5sY"
    ]
  },
  {
    videoId: "lGfpph4I53w",
    job_title: "Opera Singer",
    similar_videos: [
      "WWYxv6huoOI",
      "fI3nPIkC0e4",
      "RqqYjm0VkCQ",
      "3Seyotp6hQc",
      "EFtvMRJ_kwM"
    ]
  },
  {
    videoId: "Rg8eIWgiLkM",
    job_title: "Probation Officer (inferred)",
    similar_videos: [
      "4bPLEQXzqmM",
      "Xx-caBaVJJ4",
      "7_oGGAzJJ0k",
      "Z-3HgCNhN0g",
      "qFsk9hwFauw"
    ]
  },
  {
    videoId: "Xtl8g1ENpgU",
    job_title: "walking food tour guy",
    similar_videos: [
      "Po7L6yov1fs",
      "Z-3HgCNhN0g",
      "syGpIjQf27c",
      "cQYnnlMvKMk",
      "3PjjZUgSPu8"
    ]
  },
  {
    videoId: "OZjYkx_7th0",
    job_title: "Personal Trainer",
    similar_videos: [
      "vRNq5dinY64",
      "8QTojCX44GA",
      "IEso2O9BG40",
      "_-O7fbJkbOQ",
      "dxrPCZoUQPM"
    ]
  },
  {
    videoId: "jXgc5IYTfx4",
    job_title: "Real Estate Entrepreneur / The 1% Man",
    similar_videos: [
      "dMe_cXUqJKU",
      "-zkJlZ8xKj4",
      "7_oGGAzJJ0k",
      "rPNazYUtfd4",
      "V2n5ls3gYRI"
    ]
  },
  {
    videoId: "3KduBT3e2_8",
    job_title: "Supply Engineer",
    similar_videos: [
      "vQLAw1Lks-M",
      "iMYJCF5ALGM",
      "cJQrrYih7jo",
      "yiQZccJKcNk",
      "jNOb8Zoi0Gw"
    ]
  },
  {
    videoId: "vQLAw1Lks-M",
    job_title: "Coms and marketing",
    similar_videos: [
      "yiQZccJKcNk",
      "iMYJCF5ALGM",
      "3KduBT3e2_8",
      "jNOb8Zoi0Gw",
      "cJQrrYih7jo"
    ]
  },
  {
    videoId: "jI6VaiiHQXA",
    job_title: "Luxury Retail Sales Associate",
    similar_videos: [
      "o3ESWJBwD3c",
      "7FirdCcKRPI",
      "syGpIjQf27c",
      "dMe_cXUqJKU",
      "7_oGGAzJJ0k"
    ]
  },
  {
    videoId: "ZJHBO6GGTgw",
    job_title: "Opiate Recovery Coordinator",
    similar_videos: [
      "TuZ9l1xAjv0",
      "9QMA_H4y9Vc",
      "dxrPCZoUQPM",
      "_-O7fbJkbOQ",
      "8QTojCX44GA"
    ]
  },
  {
    videoId: "nTZpSnZN3U0",
    job_title: "Unknown",
    similar_videos: [
      "wvmspQ9INvQ",
      "d7TO_REYbvs",
      "R1Ha2KtMqT4",
      "n5d_MiGd4Jo",
      "UkRkUb6-xow"
    ]
  },
  {
    videoId: "aXOWBv7s9WA",
    job_title: "Payroll Specialist",
    similar_videos: [
      "KKxR-VLC5b4",
      "XfTBczNzRng",
      "XKBBWP4cHSE",
      "kjvFBWeR_2w",
      "Hnrg1w5AUoQ"
    ]
  },
  {
    videoId: "8nxBY2G6sgk",
    job_title: "Unknown",
    similar_videos: [
      "9QMA_H4y9Vc",
      "eTCusuJZoyw",
      "0M944FmlHxU",
      "TuZ9l1xAjv0",
      "8QTojCX44GA"
    ]
  },
  {
    videoId: "E85U_6m1hew",
    job_title: "Creator of High Cleaner",
    similar_videos: [
      "IYciek80uAU",
      "QbqtmDvVnXo",
      "J3UB26QBw4A",
      "_I3O-zE95RQ",
      "TVeKWeKCvkg"
    ]
  },
  {
    videoId: "FBDbR09xeiA",
    job_title: "House Parent / Pastoral Care at a Boarding School",
    similar_videos: [
      "l6w57uFyuME",
      "_pVkBToVXeI",
      "PJasOAvwaN8",
      "B7Ms7NWz914",
      "TVeKWeKCvkg"
    ]
  },
  {
    videoId: "yahJaYBx3kU",
    job_title: "Pilates teacher",
    similar_videos: [
      "_-O7fbJkbOQ",
      "XMhlNDGmn8A",
      "8nxBY2G6sgk",
      "8QTojCX44GA",
      "TuZ9l1xAjv0"
    ]
  },
  {
    videoId: "Mt01e0ssI24",
    job_title: "Voice Actor",
    similar_videos: [
      "-o4IAymDGzc",
      "cAjJ4fDTttA",
      "sWWgVWxAD5A",
      "RqqYjm0VkCQ",
      "lGfpph4I53w"
    ]
  },
  {
    videoId: "AExpaHHNmU0",
    job_title: "General Builder / Construction Tradesperson",
    similar_videos: [
      "G-PCLxb9lYs",
      "AT21j-v0tB0",
      "cQYnnlMvKMk",
      "MaBXVbwXfEE",
      "D6GUMpwlWDM"
    ]
  },
  {
    videoId: "hB_-G-QWxd8",
    job_title: "Waitress",
    similar_videos: [
      "6F9WHAky4Z4",
      "4bPLEQXzqmM",
      "aT9B1gEq5sY",
      "j8BUAmYqRVI",
      "qFsk9hwFauw"
    ]
  },
  {
    videoId: "IsCt76eyetI",
    job_title: "Co-working Space Specialist",
    similar_videos: [
      "3JOVlesZyUE",
      "CzT6IwiYzsM",
      "YVfbMuilL7o",
      "cgB4TtlyFP8",
      "zxhfhDTVsPw"
    ]
  },
  {
    videoId: "pwtdm1dxnqQ",
    job_title: "Unknown",
    similar_videos: [
      "iD-0PpgSNG4",
      "gLElvVfi0lk",
      "0C02kd_uO24",
      "7oA-C2Kyy4s",
      "zakrmuT9nds"
    ]
  },
  {
    videoId: "CzT6IwiYzsM",
    job_title: "Advertising Professional",
    similar_videos: [
      "YVfbMuilL7o",
      "IsCt76eyetI",
      "3JOVlesZyUE",
      "gGq1aZNPh1k",
      "N7SG4hFNObE"
    ]
  },
  {
    videoId: "pMZ75HdkjW8",
    job_title: "Roller Skater",
    similar_videos: [
      "5pKvzNxlt58",
      "-o4IAymDGzc",
      "DqVZ4C2uYVM",
      "klXHUbtgYCE",
      "y14K6s3F9P4"
    ]
  },
  {
    videoId: "AJ5Ur4eBk1E",
    job_title: "Ceramic Designer",
    similar_videos: [
      "vpv-ERcYFvQ",
      "sWWgVWxAD5A",
      "CMvPvrai5fk",
      "DqVZ4C2uYVM",
      "-o4IAymDGzc"
    ]
  },
  {
    videoId: "7ZNpPx1Wbk4",
    job_title: "solicitor",
    similar_videos: [
      "FeNU8GKI6kk",
      "WKG_8ZDO4QY",
      "XMhlNDGmn8A",
      "ZJHBO6GGTgw",
      "AiM9ehM0Ycw"
    ]
  },
  {
    videoId: "a83P0bnelpU",
    job_title: "High Commissioner for UN Human Rights",
    similar_videos: [
      "vlPkTYwHJ0U",
      "utlMfpIbSKM",
      "AbiySDhBcBc",
      "Tf2LUbofY5I",
      "RsL2Lg6PAUg"
    ]
  },
  {
    videoId: "geYThCosmho",
    job_title: "Unknown",
    similar_videos: [
      "dMe_cXUqJKU",
      "TWQDgV_pnUE",
      "jI6VaiiHQXA",
      "aL8HoOMX0pc",
      "wwqVXtneAkU"
    ]
  },
  {
    videoId: "b_xGL1QloZg",
    job_title: "Business Owner",
    similar_videos: [
      "_pVkBToVXeI",
      "TVeKWeKCvkg",
      "319jNSRJ5js",
      "8eSn6c2l1yo",
      "B7Ms7NWz914"
    ]
  },
  {
    videoId: "5tDwlflWikc",
    job_title: "President and CEO",
    similar_videos: [
      "YsWca8tSSkI",
      "wxvcXImME-8",
      "ra5Zp6uako4",
      "10KFRxFkNU8",
      "0Z4uL-YQmMU"
    ]
  },
  {
    videoId: "rWzqxjRK1IU",
    job_title: "Chief Executive Officer",
    similar_videos: [
      "JEbAI2tHSWw",
      "Tf2LUbofY5I",
      "vlPkTYwHJ0U",
      "8PeqVA9puTU",
      "RsL2Lg6PAUg"
    ]
  },
  {
    videoId: "9pEaE6Ptr3w",
    job_title: "Investment Advisor",
    similar_videos: [
      "XfTBczNzRng",
      "Hnrg1w5AUoQ",
      "XKBBWP4cHSE",
      "kjvFBWeR_2w",
      "ndD1UXmfgw0"
    ]
  },
  {
    videoId: "41c_AkhZeRk",
    job_title: "Custom Game Piece Creator",
    similar_videos: [
      "y14K6s3F9P4",
      "klXHUbtgYCE",
      "C_7rgCFh7qE",
      "Tt-945LdRxI",
      "lGfpph4I53w"
    ]
  },
  {
    videoId: "kEvyHCJWg6U",
    job_title: "Harpist",
    similar_videos: [
      "3Seyotp6hQc",
      "pPu54iJ1qOU",
      "RqqYjm0VkCQ",
      "-o4IAymDGzc",
      "sWWgVWxAD5A"
    ]
  },
  {
    videoId: "wxvcXImME-8",
    job_title: "Priest (in training)",
    similar_videos: [
      "5tDwlflWikc",
      "YsWca8tSSkI",
      "0Z4uL-YQmMU",
      "ra5Zp6uako4",
      "b1po2dxHfHE"
    ]
  },
  {
    videoId: "Po7L6yov1fs",
    job_title: "writer",
    similar_videos: [
      "Z-3HgCNhN0g",
      "8OFMGkgj1IU",
      "iD-0PpgSNG4",
      "7oA-C2Kyy4s",
      "5rjhMHn1Cqo"
    ]
  },
  {
    videoId: "RGjiTrZmxXc",
    job_title: "Clothes Maker",
    similar_videos: [
      "lGfpph4I53w",
      "9Y5zeXCT4kE",
      "y14K6s3F9P4",
      "WWYxv6huoOI",
      "l5eyr1B4pko"
    ]
  },
  {
    videoId: "8prb1sO2n_M",
    job_title: "Marketing/Advertising",
    similar_videos: [
      "5rjhMHn1Cqo",
      "iD-0PpgSNG4",
      "Z-3HgCNhN0g",
      "3PjjZUgSPu8",
      "qFsk9hwFauw"
    ]
  },
  {
    videoId: "QgOp2ovoOnc",
    job_title: "Aspiring Business Owner/Entrepreneur",
    similar_videos: [
      "dMe_cXUqJKU",
      "1aECPZVfdLs",
      "jI6VaiiHQXA",
      "qEwMcmu_h6M",
      "aT9B1gEq5sY"
    ]
  },
  {
    videoId: "9QMA_H4y9Vc",
    job_title: "Unknown",
    similar_videos: [
      "dxrPCZoUQPM",
      "TuZ9l1xAjv0",
      "8QTojCX44GA",
      "ZJHBO6GGTgw",
      "vRNq5dinY64"
    ]
  },
  {
    videoId: "qEwMcmu_h6M",
    job_title: "architect",
    similar_videos: [
      "gLElvVfi0lk",
      "dMe_cXUqJKU",
      "pqMCh5l7ryI",
      "rPNazYUtfd4",
      "1aECPZVfdLs"
    ]
  },
  {
    videoId: "iMYJCF5ALGM",
    job_title: "Software Engineer",
    similar_videos: [
      "Siq-cNW_UIY",
      "iEfwf4T-f-I",
      "yiQZccJKcNk",
      "v2FhVKXy7-w",
      "vQLAw1Lks-M"
    ]
  },
  {
    videoId: "uNOUt-JEXR8",
    job_title: "Olympic Athlete (Cyclist)",
    similar_videos: [
      "M4k8uYKwtQQ",
      "rn3dkp4GkYw",
      "oB0TF8_VuWk",
      "oeb0_GM2lXQ",
      "9uuq1QZBxN4"
    ]
  },
  {
    videoId: "_I3O-zE95RQ",
    job_title: "equality consultant",
    similar_videos: [
      "BbpsfrhVPE4",
      "QbqtmDvVnXo",
      "5zkF7R7dAvg",
      "J3UB26QBw4A",
      "IYciek80uAU"
    ]
  },
  {
    videoId: "dMe_cXUqJKU",
    job_title: "Fashion Brand Owner",
    similar_videos: [
      "jI6VaiiHQXA",
      "iD-0PpgSNG4",
      "1aECPZVfdLs",
      "5rjhMHn1Cqo",
      "QgOp2ovoOnc"
    ]
  },
  {
    videoId: "bKKC0rkpFNo",
    job_title: "Receptionist at a restaurant",
    similar_videos: [
      "cQYnnlMvKMk",
      "4bPLEQXzqmM",
      "6F9WHAky4Z4",
      "0C02kd_uO24",
      "aT9B1gEq5sY"
    ]
  },
  {
    videoId: "Zargb6S0oOM",
    job_title: "Double Bass Player",
    similar_videos: [
      "3Seyotp6hQc",
      "EFtvMRJ_kwM",
      "uNOUt-JEXR8",
      "cAjJ4fDTttA",
      "sWWgVWxAD5A"
    ]
  },
  {
    videoId: "ANWs569KVcs",
    job_title: "Hypnotherapist",
    similar_videos: [
      "eTCusuJZoyw",
      "hVY2S9SMvgs",
      "9QMA_H4y9Vc",
      "0M944FmlHxU",
      "IEso2O9BG40"
    ]
  },
  {
    videoId: "_pVkBToVXeI",
    job_title: "Teacher",
    similar_videos: [
      "319jNSRJ5js",
      "PJasOAvwaN8",
      "8eSn6c2l1yo",
      "TVeKWeKCvkg",
      "FBDbR09xeiA"
    ]
  },
  {
    videoId: "5yEtPLnNi-k",
    job_title: "Entrepreneur/Founder/Content Creator",
    similar_videos: [
      "YsWca8tSSkI",
      "wxvcXImME-8",
      "ra5Zp6uako4",
      "VljOrJ4-bjc",
      "Ziwd_aCYNM8"
    ]
  },
  {
    videoId: "1UnRI91Cq1E",
    job_title: "Retail Associate",
    similar_videos: [
      "VA8CL62t7Rk",
      "j8BUAmYqRVI",
      "7SudW9YN5m4",
      "-33l1q05uIM",
      "0C02kd_uO24"
    ]
  },
  {
    videoId: "ykp4q-oftrE",
    job_title: "Restaurant Manager",
    similar_videos: [
      "J1wFZfRwEcM",
      "1UnRI91Cq1E",
      "cQYnnlMvKMk",
      "VA8CL62t7Rk",
      "7SudW9YN5m4"
    ]
  },
  {
    videoId: "NJXdaGx4Kl0",
    job_title: "Entrepreneur",
    similar_videos: [
      "Hnrg1w5AUoQ",
      "KKxR-VLC5b4",
      "9pEaE6Ptr3w",
      "MEhdu2lTbWg",
      "XfTBczNzRng"
    ]
  },
  {
    videoId: "-dHNBBZ3h10",
    job_title: "Commercial Professional in the Beverage Industry",
    similar_videos: [
      "zqRGEkxwTo0",
      "kjvFBWeR_2w",
      "awFwWsh3esc",
      "q_zbnou9gGs",
      "XfTBczNzRng"
    ]
  },
  {
    videoId: "V2n5ls3gYRI",
    job_title: "bus driver",
    similar_videos: [
      "BC6ZxoKt0Lg",
      "4bPLEQXzqmM",
      "Xx-caBaVJJ4",
      "6F9WHAky4Z4",
      "Z-3HgCNhN0g"
    ]
  },
  {
    videoId: "-zkJlZ8xKj4",
    job_title: "Unidentified Emergency Services Professional",
    similar_videos: [
      "rPNazYUtfd4",
      "BC6ZxoKt0Lg",
      "V2n5ls3gYRI",
      "7_oGGAzJJ0k",
      "AT21j-v0tB0"
    ]
  },
  {
    videoId: "QbqtmDvVnXo",
    job_title: "Self-Employed Professional",
    similar_videos: [
      "BbpsfrhVPE4",
      "_I3O-zE95RQ",
      "5zkF7R7dAvg",
      "IYciek80uAU",
      "E85U_6m1hew"
    ]
  },
  {
    videoId: "XMhlNDGmn8A",
    job_title: "Director of R&D",
    similar_videos: [
      "dxrPCZoUQPM",
      "0M944FmlHxU",
      "pYQEQ49kqoE",
      "8QTojCX44GA",
      "vRNq5dinY64"
    ]
  },
  {
    videoId: "zqRGEkxwTo0",
    job_title: "Auditor",
    similar_videos: [
      "-dHNBBZ3h10",
      "kjvFBWeR_2w",
      "XKBBWP4cHSE",
      "q_zbnou9gGs",
      "awFwWsh3esc"
    ]
  },
  {
    videoId: "9Y5zeXCT4kE",
    job_title: "Artifact Handler",
    similar_videos: [
      "klXHUbtgYCE",
      "C_7rgCFh7qE",
      "F9Ftj3Xs6gc",
      "y14K6s3F9P4",
      "RqqYjm0VkCQ"
    ]
  },
  {
    videoId: "v2FhVKXy7-w",
    job_title: "Employee at Salesforce",
    similar_videos: [
      "iMYJCF5ALGM",
      "vQLAw1Lks-M",
      "iEfwf4T-f-I",
      "jNOb8Zoi0Gw",
      "cJQrrYih7jo"
    ]
  },
  {
    videoId: "Siq-cNW_UIY",
    job_title: "Dropshipper",
    similar_videos: [
      "iMYJCF5ALGM",
      "jNOb8Zoi0Gw",
      "1BzmYP4snag",
      "ob0IBBaeOWY",
      "q1P-Q8KzSxc"
    ]
  },
  {
    videoId: "wwqVXtneAkU",
    job_title: "Executive Assistant",
    similar_videos: [
      "Z1RWmvm5eLc",
      "0C02kd_uO24",
      "Xx-caBaVJJ4",
      "NlQq37r4158",
      "j8BUAmYqRVI"
    ]
  },
  {
    videoId: "X2LACSEusXs",
    job_title: "Sales",
    similar_videos: [
      "eB-_h-ExnsU",
      "5zkF7R7dAvg",
      "Af-m50-O0cs",
      "eDZD2NcNmtc",
      "kjvFBWeR_2w"
    ]
  },
  {
    videoId: "TVeKWeKCvkg",
    job_title: "driving instructor",
    similar_videos: [
      "8eSn6c2l1yo",
      "p6pUu4OauF8",
      "l6w57uFyuME",
      "PJasOAvwaN8",
      "_pVkBToVXeI"
    ]
  },
  {
    videoId: "2s5ftzZEu_w",
    job_title: "Producer",
    similar_videos: [
      "y14K6s3F9P4",
      "klXHUbtgYCE",
      "RqqYjm0VkCQ",
      "0yqRBOr_qyE",
      "C_7rgCFh7qE"
    ]
  },
  {
    videoId: "9uuq1QZBxN4",
    job_title: "DJ",
    similar_videos: [
      "RaoY9PQbwa0",
      "pPu54iJ1qOU",
      "oeb0_GM2lXQ",
      "CLK29ezb8-4",
      "MwTiWjwhemM"
    ]
  },
  {
    videoId: "y14K6s3F9P4",
    job_title: "Choreographer",
    similar_videos: [
      "klXHUbtgYCE",
      "C_7rgCFh7qE",
      "RqqYjm0VkCQ",
      "5pKvzNxlt58",
      "WWYxv6huoOI"
    ]
  },
  {
    videoId: "6F9WHAky4Z4",
    job_title: "barista",
    similar_videos: [
      "aT9B1gEq5sY",
      "qFsk9hwFauw",
      "HeXWtJUKINM",
      "4bPLEQXzqmM",
      "0C02kd_uO24"
    ]
  },
  {
    videoId: "ob0IBBaeOWY",
    job_title: "Gold Trader",
    similar_videos: [
      "Siq-cNW_UIY",
      "q1P-Q8KzSxc",
      "jNOb8Zoi0Gw",
      "yiQZccJKcNk",
      "iMYJCF5ALGM"
    ]
  },
  {
    videoId: "MwTiWjwhemM",
    job_title: "Flamenco Dancer",
    similar_videos: [
      "DqVZ4C2uYVM",
      "RqqYjm0VkCQ",
      "BHNA-eCmpAQ",
      "vpv-ERcYFvQ",
      "sWWgVWxAD5A"
    ]
  },
  {
    videoId: "v9E2BmEJREI",
    job_title: "Creative Professional / Self-employed Artist/Designer",
    similar_videos: [
      "3Seyotp6hQc",
      "LBy5Wdzp-rs",
      "sWWgVWxAD5A",
      "EFtvMRJ_kwM",
      "GW1eAsx_jKA"
    ]
  },
  {
    videoId: "rn3dkp4GkYw",
    job_title: "Horse Carriage Driver",
    similar_videos: [
      "uNOUt-JEXR8",
      "F9Ftj3Xs6gc",
      "C_7rgCFh7qE",
      "DqVZ4C2uYVM",
      "y14K6s3F9P4"
    ]
  },
  {
    videoId: "GHyqq9SULcs",
    job_title: "Politician",
    similar_videos: [
      "vlPkTYwHJ0U",
      "8PeqVA9puTU",
      "AbiySDhBcBc",
      "BOvKFHan4FY",
      "k8arecKqjIg"
    ]
  },
  {
    videoId: "W7qjm5S9JOw",
    job_title: "Unknown",
    similar_videos: [
      "4bPLEQXzqmM",
      "Xx-caBaVJJ4",
      "0C02kd_uO24",
      "NlQq37r4158",
      "aT9B1gEq5sY"
    ]
  },
  {
    videoId: "MaBXVbwXfEE",
    job_title: "Unknown",
    similar_videos: [
      "jI6VaiiHQXA",
      "pqMCh5l7ryI",
      "iD-0PpgSNG4",
      "5rjhMHn1Cqo",
      "XCwsG0O7ryc"
    ]
  },
  {
    videoId: "XRaiUQGhY6Q",
    job_title: "Furniture Maker",
    similar_videos: [
      "_vukBAl6Uxk",
      "wvmspQ9INvQ",
      "R1Ha2KtMqT4",
      "n5d_MiGd4Jo",
      "YLN6Hq1nAMY"
    ]
  },
  {
    videoId: "rJfJoCmpQTs",
    job_title: "Water Filter Maker",
    similar_videos: [
      "BC6ZxoKt0Lg",
      "rPNazYUtfd4",
      "CXEDobIjPEo",
      "WYuxOafORis",
      "V2n5ls3gYRI"
    ]
  },
  {
    videoId: "Tt-945LdRxI",
    job_title: "actor",
    similar_videos: [
      "y14K6s3F9P4",
      "i2F8mv06hhk",
      "sWWgVWxAD5A",
      "klXHUbtgYCE",
      "5pKvzNxlt58"
    ]
  },
  {
    videoId: "8PeqVA9puTU",
    job_title: "Logistics/Transportation (United Nations)",
    similar_videos: [
      "vlPkTYwHJ0U",
      "GHyqq9SULcs",
      "RsL2Lg6PAUg",
      "KKWx8PJzO2o",
      "utlMfpIbSKM"
    ]
  },
  {
    videoId: "5zkF7R7dAvg",
    job_title: "Architecture/Building Design Consultant",
    similar_videos: [
      "_I3O-zE95RQ",
      "IYciek80uAU",
      "QbqtmDvVnXo",
      "BbpsfrhVPE4",
      "JR0sMy-Ivic"
    ]
  },
  {
    videoId: "aT9B1gEq5sY",
    job_title: "bartender",
    similar_videos: [
      "6F9WHAky4Z4",
      "qFsk9hwFauw",
      "4bPLEQXzqmM",
      "HeXWtJUKINM",
      "VA8CL62t7Rk"
    ]
  },
  {
    videoId: "laLHRg6ZpvI",
    job_title: "sociology researcher",
    similar_videos: [
      "rPNazYUtfd4",
      "AiM9ehM0Ycw",
      "CXEDobIjPEo",
      "jI6VaiiHQXA",
      "0C02kd_uO24"
    ]
  },
  {
    videoId: "C_7rgCFh7qE",
    job_title: "pub owner",
    similar_videos: [
      "y14K6s3F9P4",
      "klXHUbtgYCE",
      "RqqYjm0VkCQ",
      "3Seyotp6hQc",
      "5pKvzNxlt58"
    ]
  },
  {
    videoId: "iEfwf4T-f-I",
    job_title: "Computer Consultant",
    similar_videos: [
      "iMYJCF5ALGM",
      "cJQrrYih7jo",
      "jNOb8Zoi0Gw",
      "Siq-cNW_UIY",
      "yiQZccJKcNk"
    ]
  },
  {
    videoId: "RsL2Lg6PAUg",
    job_title: "Director of the United Nations Office for Outer Space Affairs",
    similar_videos: [
      "Tf2LUbofY5I",
      "utlMfpIbSKM",
      "8PeqVA9puTU",
      "KKWx8PJzO2o",
      "GHyqq9SULcs"
    ]
  },
  {
    videoId: "rPNazYUtfd4",
    job_title: "Geologist",
    similar_videos: [
      "BC6ZxoKt0Lg",
      "laLHRg6ZpvI",
      "CXEDobIjPEo",
      "-zkJlZ8xKj4",
      "rJfJoCmpQTs"
    ]
  },
  {
    videoId: "7oA-C2Kyy4s",
    job_title: "Unknown",
    similar_videos: [
      "5rjhMHn1Cqo",
      "iD-0PpgSNG4",
      "3PjjZUgSPu8",
      "VA8CL62t7Rk",
      "0C02kd_uO24"
    ]
  },
  {
    videoId: "21NyNUuYgxI",
    job_title: "Business Development in Maintenance for Chemicals",
    similar_videos: [
      "BC6ZxoKt0Lg",
      "189ZC7ujLEI",
      "7SudW9YN5m4",
      "1UnRI91Cq1E",
      "W7qjm5S9JOw"
    ]
  },
  {
    videoId: "bfc5JXsWtks",
    job_title: "Operations/Retail Professional",
    similar_videos: [
      "CXEDobIjPEo",
      "cQYnnlMvKMk",
      "AiM9ehM0Ycw",
      "qFsk9hwFauw",
      "6F9WHAky4Z4"
    ]
  },
  {
    videoId: "yiQZccJKcNk",
    job_title: "unknown",
    similar_videos: [
      "vQLAw1Lks-M",
      "iMYJCF5ALGM",
      "jNOb8Zoi0Gw",
      "Siq-cNW_UIY",
      "iEfwf4T-f-I"
    ]
  },
  {
    videoId: "yNJ3if5TexY",
    job_title: "Special Effects Artist/Technician",
    similar_videos: [
      "GW1eAsx_jKA",
      "y14K6s3F9P4",
      "TuA04vGRkUs",
      "DqVZ4C2uYVM",
      "klXHUbtgYCE"
    ]
  },
  {
    videoId: "0M944FmlHxU",
    job_title: "Scientific Financial Communication Specialist",
    similar_videos: [
      "XMhlNDGmn8A",
      "dxrPCZoUQPM",
      "8nxBY2G6sgk",
      "9QMA_H4y9Vc",
      "pYQEQ49kqoE"
    ]
  },
  {
    videoId: "ETV0ZA9TLmM",
    job_title: "Manager (Mental Health)",
    similar_videos: [
      "dxrPCZoUQPM",
      "8QTojCX44GA",
      "XMhlNDGmn8A",
      "9QMA_H4y9Vc",
      "TuZ9l1xAjv0"
    ]
  },
  {
    videoId: "LzNvEe1IBwo",
    job_title: "Hair and makeup artist for filming TV",
    similar_videos: [
      "y14K6s3F9P4",
      "EFtvMRJ_kwM",
      "C_7rgCFh7qE",
      "3Seyotp6hQc",
      "klXHUbtgYCE"
    ]
  },
  {
    videoId: "oeb0_GM2lXQ",
    job_title: "Talent Scout",
    similar_videos: [
      "CLK29ezb8-4",
      "cAjJ4fDTttA",
      "vpv-ERcYFvQ",
      "LBy5Wdzp-rs",
      "TuA04vGRkUs"
    ]
  },
  {
    videoId: "4bPLEQXzqmM",
    job_title: "unknown",
    similar_videos: [
      "qFsk9hwFauw",
      "0C02kd_uO24",
      "HeXWtJUKINM",
      "Xx-caBaVJJ4",
      "6F9WHAky4Z4"
    ]
  },
  {
    videoId: "BC6ZxoKt0Lg",
    job_title: "Marine Restoration Specialist",
    similar_videos: [
      "CXEDobIjPEo",
      "rPNazYUtfd4",
      "rJfJoCmpQTs",
      "V2n5ls3gYRI",
      "4bPLEQXzqmM"
    ]
  },
  {
    videoId: "0yqRBOr_qyE",
    job_title: "Musician",
    similar_videos: [
      "klXHUbtgYCE",
      "sWWgVWxAD5A",
      "3Seyotp6hQc",
      "CMvPvrai5fk",
      "pMZ75HdkjW8"
    ]
  },
  {
    videoId: "awFwWsh3esc",
    job_title: "finance director for an IT MSP provider that specializes in serving the alternative investment space",
    similar_videos: [
      "kjvFBWeR_2w",
      "XKBBWP4cHSE",
      "XfTBczNzRng",
      "q_zbnou9gGs",
      "ndD1UXmfgw0"
    ]
  },
  {
    videoId: "319jNSRJ5js",
    job_title: "Lecturer/Teacher",
    similar_videos: [
      "_pVkBToVXeI",
      "8eSn6c2l1yo",
      "p6pUu4OauF8",
      "PJasOAvwaN8",
      "l6w57uFyuME"
    ]
  },
  {
    videoId: "UkRkUb6-xow",
    job_title: "Retired",
    similar_videos: [
      "R1Ha2KtMqT4",
      "wvmspQ9INvQ",
      "YLN6Hq1nAMY",
      "n5d_MiGd4Jo",
      "nTZpSnZN3U0"
    ]
  },
  {
    videoId: "fGKu96dofyw",
    job_title: "advertising",
    similar_videos: [
      "X9fKfuyCoxU",
      "QBs0Az3i6cI",
      "sWWgVWxAD5A",
      "IYciek80uAU",
      "AJ5Ur4eBk1E"
    ]
  },
  {
    videoId: "Z1RWmvm5eLc",
    job_title: "Dancer",
    similar_videos: [
      "Xx-caBaVJJ4",
      "1UnRI91Cq1E",
      "j8BUAmYqRVI",
      "-33l1q05uIM",
      "4bPLEQXzqmM"
    ]
  },
  {
    videoId: "TuA04vGRkUs",
    job_title: "Model",
    similar_videos: [
      "sWWgVWxAD5A",
      "GW1eAsx_jKA",
      "CMvPvrai5fk",
      "DqVZ4C2uYVM",
      "C_7rgCFh7qE"
    ]
  },
  {
    videoId: "q1P-Q8KzSxc",
    job_title: "climate portfolio director",
    similar_videos: [
      "jNOb8Zoi0Gw",
      "cJQrrYih7jo",
      "Siq-cNW_UIY",
      "ob0IBBaeOWY",
      "VljOrJ4-bjc"
    ]
  },
  {
    videoId: "klXHUbtgYCE",
    job_title: "Actor/Theatre Performer",
    similar_videos: [
      "y14K6s3F9P4",
      "C_7rgCFh7qE",
      "RqqYjm0VkCQ",
      "EFtvMRJ_kwM",
      "5pKvzNxlt58"
    ]
  },
  {
    videoId: "IEso2O9BG40",
    job_title: "Relationship Counselor",
    similar_videos: [
      "5GfFMNC14r8",
      "vRNq5dinY64",
      "dxrPCZoUQPM",
      "8QTojCX44GA",
      "OZjYkx_7th0"
    ]
  },
  {
    videoId: "l5eyr1B4pko",
    job_title: "Illustrator (main), Spoken Word Artist, Puppeteer",
    similar_videos: [
      "klXHUbtgYCE",
      "RGjiTrZmxXc",
      "EFtvMRJ_kwM",
      "y14K6s3F9P4",
      "lGfpph4I53w"
    ]
  },
  {
    videoId: "d7TO_REYbvs",
    job_title: "unknown",
    similar_videos: [
      "nTZpSnZN3U0",
      "wvmspQ9INvQ",
      "R1Ha2KtMqT4",
      "n5d_MiGd4Jo",
      "_vukBAl6Uxk"
    ]
  },
  {
    videoId: "eDZD2NcNmtc",
    job_title: "Lawyer",
    similar_videos: [
      "0M944FmlHxU",
      "kjvFBWeR_2w",
      "X2LACSEusXs",
      "vz1j7ltG8QU",
      "XMhlNDGmn8A"
    ]
  },
  {
    videoId: "hVY2S9SMvgs",
    job_title: "Therapist",
    similar_videos: [
      "8QTojCX44GA",
      "dxrPCZoUQPM",
      "XMhlNDGmn8A",
      "ANWs569KVcs",
      "vRNq5dinY64"
    ]
  },
  {
    videoId: "JR0sMy-Ivic",
    job_title: "Consultant",
    similar_videos: [
      "IYciek80uAU",
      "5zkF7R7dAvg",
      "_I3O-zE95RQ",
      "BbpsfrhVPE4",
      "QbqtmDvVnXo"
    ]
  },
  {
    videoId: "uwQ4-hUA64s",
    job_title: "producer and assessor/critic",
    similar_videos: [
      "WWYxv6huoOI",
      "y14K6s3F9P4",
      "Ij8ptgE1M84",
      "C_7rgCFh7qE",
      "RqqYjm0VkCQ"
    ]
  },
  {
    videoId: "Xx-caBaVJJ4",
    job_title: "private investigator",
    similar_videos: [
      "4bPLEQXzqmM",
      "j8BUAmYqRVI",
      "VA8CL62t7Rk",
      "0C02kd_uO24",
      "NlQq37r4158"
    ]
  },
  {
    videoId: "l6w57uFyuME",
    job_title: "School Teacher",
    similar_videos: [
      "8eSn6c2l1yo",
      "B7Ms7NWz914",
      "FBDbR09xeiA",
      "TVeKWeKCvkg",
      "PJasOAvwaN8"
    ]
  },
  {
    videoId: "BbpsfrhVPE4",
    job_title: "Consulting",
    similar_videos: [
      "QbqtmDvVnXo",
      "_I3O-zE95RQ",
      "5zkF7R7dAvg",
      "IYciek80uAU",
      "JR0sMy-Ivic"
    ]
  },
  {
    videoId: "IYciek80uAU",
    job_title: "Design Consultant",
    similar_videos: [
      "E85U_6m1hew",
      "5zkF7R7dAvg",
      "JR0sMy-Ivic",
      "J3UB26QBw4A",
      "_I3O-zE95RQ"
    ]
  },
  {
    videoId: "YLN6Hq1nAMY",
    job_title: "Artist",
    similar_videos: [
      "UkRkUb6-xow",
      "wvmspQ9INvQ",
      "R1Ha2KtMqT4",
      "XRaiUQGhY6Q",
      "n5d_MiGd4Jo"
    ]
  },
  {
    videoId: "wvmspQ9INvQ",
    job_title: "Stage Technician",
    similar_videos: [
      "R1Ha2KtMqT4",
      "UkRkUb6-xow",
      "_vukBAl6Uxk",
      "nTZpSnZN3U0",
      "n5d_MiGd4Jo"
    ]
  },
  {
    videoId: "Mb5NKaeOAd8",
    job_title: "Professional Hula Hooper",
    similar_videos: [
      "p94gXwj3wCY",
      "2kKC8Ym_Hzk",
      "-o4IAymDGzc",
      "cAjJ4fDTttA",
      "oeb0_GM2lXQ"
    ]
  },
  {
    videoId: "D6GUMpwlWDM",
    job_title: "Mindset Coach for UFC Fighters",
    similar_videos: [
      "7SudW9YN5m4",
      "189ZC7ujLEI",
      "syGpIjQf27c",
      "-zkJlZ8xKj4",
      "o3ESWJBwD3c"
    ]
  },
  {
    videoId: "b1po2dxHfHE",
    job_title: "volunteer",
    similar_videos: [
      "YsWca8tSSkI",
      "0Z4uL-YQmMU",
      "5tDwlflWikc",
      "ra5Zp6uako4",
      "10KFRxFkNU8"
    ]
  },
  {
    videoId: "sWWgVWxAD5A",
    job_title: "Actor",
    similar_videos: [
      "3Seyotp6hQc",
      "TuA04vGRkUs",
      "GW1eAsx_jKA",
      "DqVZ4C2uYVM",
      "LBy5Wdzp-rs"
    ]
  },
  {
    videoId: "TZWc0Iius0U",
    job_title: "Premium Private Chef",
    similar_videos: [
      "pqMCh5l7ryI",
      "dMe_cXUqJKU",
      "7oA-C2Kyy4s",
      "em443ppHH5o",
      "jI6VaiiHQXA"
    ]
  },
  {
    videoId: "n5d_MiGd4Jo",
    job_title: "Social Worker",
    similar_videos: [
      "R1Ha2KtMqT4",
      "wvmspQ9INvQ",
      "UkRkUb6-xow",
      "nTZpSnZN3U0",
      "d7TO_REYbvs"
    ]
  },
  {
    videoId: "EPtp8mye_Oo",
    job_title: "microartist",
    similar_videos: [
      "vpv-ERcYFvQ",
      "RqqYjm0VkCQ",
      "C_7rgCFh7qE",
      "y14K6s3F9P4",
      "DqVZ4C2uYVM"
    ]
  },
  {
    videoId: "Ij8ptgE1M84",
    job_title: "Clothing Designer",
    similar_videos: [
      "C_7rgCFh7qE",
      "klXHUbtgYCE",
      "RqqYjm0VkCQ",
      "y14K6s3F9P4",
      "uwQ4-hUA64s"
    ]
  },
  {
    videoId: "5rjhMHn1Cqo",
    job_title: "Food Photographer",
    similar_videos: [
      "iD-0PpgSNG4",
      "7oA-C2Kyy4s",
      "3PjjZUgSPu8",
      "qFsk9hwFauw",
      "VA8CL62t7Rk"
    ]
  },
  {
    videoId: "S9R3fkNMxEw",
    job_title: "Swimmer",
    similar_videos: [
      "Z-3HgCNhN0g",
      "cQYnnlMvKMk",
      "0C02kd_uO24",
      "VA8CL62t7Rk",
      "J1wFZfRwEcM"
    ]
  },
  {
    videoId: "syGpIjQf27c",
    job_title: "Sales",
    similar_videos: [
      "jI6VaiiHQXA",
      "o3ESWJBwD3c",
      "AiM9ehM0Ycw",
      "5rjhMHn1Cqo",
      "3PjjZUgSPu8"
    ]
  },
  {
    videoId: "gGq1aZNPh1k",
    job_title: "Art Director and Creative Agent",
    similar_videos: [
      "CzT6IwiYzsM",
      "N7SG4hFNObE",
      "zY0YGYgpRJs",
      "cgB4TtlyFP8",
      "nO8Css6x2z8"
    ]
  },
  {
    videoId: "gLElvVfi0lk",
    job_title: "Architect",
    similar_videos: [
      "Z-3HgCNhN0g",
      "5rjhMHn1Cqo",
      "qEwMcmu_h6M",
      "iD-0PpgSNG4",
      "8OFMGkgj1IU"
    ]
  },
  {
    videoId: "cAjJ4fDTttA",
    job_title: "music producer",
    similar_videos: [
      "3Seyotp6hQc",
      "sWWgVWxAD5A",
      "oeb0_GM2lXQ",
      "-o4IAymDGzc",
      "y14K6s3F9P4"
    ]
  },
  {
    videoId: "0C02kd_uO24",
    job_title: "waitress",
    similar_videos: [
      "VA8CL62t7Rk",
      "j8BUAmYqRVI",
      "4bPLEQXzqmM",
      "NlQq37r4158",
      "MXXyOMgs9Xk"
    ]
  },
  {
    videoId: "VFoQmNK6kC0",
    job_title: "Historical Character Performer",
    similar_videos: [
      "RqqYjm0VkCQ",
      "OhLhyJ73lts",
      "y14K6s3F9P4",
      "MwTiWjwhemM",
      "WWYxv6huoOI"
    ]
  },
  {
    videoId: "Nk0hRRdydr8",
    job_title: "Bus driver",
    similar_videos: [
      "o4htJIogg4w",
      "4bPLEQXzqmM",
      "V2n5ls3gYRI",
      "Z-3HgCNhN0g",
      "6F9WHAky4Z4"
    ]
  },
  {
    videoId: "X9fKfuyCoxU",
    job_title: "Advertising",
    similar_videos: [
      "fGKu96dofyw",
      "QBs0Az3i6cI",
      "CLK29ezb8-4",
      "1BzmYP4snag",
      "jwcAot5On1Y"
    ]
  },
  {
    videoId: "XKBBWP4cHSE",
    job_title: "Structured Finance Analyst",
    similar_videos: [
      "kjvFBWeR_2w",
      "XfTBczNzRng",
      "awFwWsh3esc",
      "Hnrg1w5AUoQ",
      "enSogaCRuzw"
    ]
  },
  {
    videoId: "WKG_8ZDO4QY",
    job_title: "Secret Service",
    similar_videos: [
      "FeNU8GKI6kk",
      "7ZNpPx1Wbk4",
      "BHNA-eCmpAQ",
      "JR0sMy-Ivic",
      "RaoY9PQbwa0"
    ]
  },
  {
    videoId: "RqqYjm0VkCQ",
    job_title: "model",
    similar_videos: [
      "C_7rgCFh7qE",
      "y14K6s3F9P4",
      "klXHUbtgYCE",
      "DqVZ4C2uYVM",
      "vpv-ERcYFvQ"
    ]
  },
  {
    videoId: "CLK29ezb8-4",
    job_title: "Swords Swallower",
    similar_videos: [
      "oeb0_GM2lXQ",
      "sWWgVWxAD5A",
      "OhLhyJ73lts",
      "DqVZ4C2uYVM",
      "5pKvzNxlt58"
    ]
  },
  {
    videoId: "F9etbDLWW9Y",
    job_title: "Filmmaker",
    similar_videos: [
      "nO8Css6x2z8",
      "zY0YGYgpRJs",
      "DF2cSbN-au4",
      "QRVxZ7nBt7Q",
      "i5uQojsraMM"
    ]
  },
  {
    videoId: "YsWca8tSSkI",
    job_title: "Director",
    similar_videos: [
      "0Z4uL-YQmMU",
      "5tDwlflWikc",
      "wxvcXImME-8",
      "b1po2dxHfHE",
      "ra5Zp6uako4"
    ]
  },
  {
    videoId: "VA8CL62t7Rk",
    job_title: "Luxury Car Salesperson",
    similar_videos: [
      "0C02kd_uO24",
      "j8BUAmYqRVI",
      "qFsk9hwFauw",
      "-33l1q05uIM",
      "NlQq37r4158"
    ]
  },
  {
    videoId: "2kKC8Ym_Hzk",
    job_title: "Magic Mike performer",
    similar_videos: [
      "vpv-ERcYFvQ",
      "CLK29ezb8-4",
      "sWWgVWxAD5A",
      "p94gXwj3wCY",
      "DqVZ4C2uYVM"
    ]
  },
  {
    videoId: "cQYnnlMvKMk",
    job_title: "Bungee Jumping Instructor",
    similar_videos: [
      "qFsk9hwFauw",
      "VA8CL62t7Rk",
      "aT9B1gEq5sY",
      "6F9WHAky4Z4",
      "4bPLEQXzqmM"
    ]
  },
  {
    videoId: "j8BUAmYqRVI",
    job_title: "Indoor Skydiving Instructor",
    similar_videos: [
      "VA8CL62t7Rk",
      "0C02kd_uO24",
      "-33l1q05uIM",
      "NlQq37r4158",
      "1UnRI91Cq1E"
    ]
  },
  {
    videoId: "3PjjZUgSPu8",
    job_title: "helicopter pilot",
    similar_videos: [
      "5rjhMHn1Cqo",
      "7oA-C2Kyy4s",
      "iD-0PpgSNG4",
      "0C02kd_uO24",
      "VA8CL62t7Rk"
    ]
  },
  {
    videoId: "EumbbNyGRMk",
    job_title: "Folk Practitioner",
    similar_videos: [
      "rPNazYUtfd4",
      "syGpIjQf27c",
      "AiM9ehM0Ycw",
      "TWQDgV_pnUE",
      "jI6VaiiHQXA"
    ]
  },
  {
    videoId: "0Z4uL-YQmMU",
    job_title: "Sanctuary Staff",
    similar_videos: [
      "YsWca8tSSkI",
      "wxvcXImME-8",
      "b1po2dxHfHE",
      "5tDwlflWikc",
      "ra5Zp6uako4"
    ]
  },
  {
    videoId: "zakrmuT9nds",
    job_title: "Founder",
    similar_videos: [
      "Z-3HgCNhN0g",
      "7oA-C2Kyy4s",
      "5rjhMHn1Cqo",
      "iD-0PpgSNG4",
      "jwcAot5On1Y"
    ]
  },
  {
    videoId: "p94gXwj3wCY",
    job_title: "Sand Artist",
    similar_videos: [
      "7Tv7wTwEtNA",
      "2kKC8Ym_Hzk",
      "Tt-945LdRxI",
      "vpv-ERcYFvQ",
      "OhLhyJ73lts"
    ]
  },
  {
    videoId: "7Tv7wTwEtNA",
    job_title: "Laugh Ambassador",
    similar_videos: [
      "p94gXwj3wCY",
      "OhLhyJ73lts",
      "vpv-ERcYFvQ",
      "Tt-945LdRxI",
      "2kKC8Ym_Hzk"
    ]
  },
  {
    videoId: "J3UB26QBw4A",
    job_title: "Water Consultant",
    similar_videos: [
      "_I3O-zE95RQ",
      "IYciek80uAU",
      "7Tv7wTwEtNA",
      "p94gXwj3wCY",
      "JR0sMy-Ivic"
    ]
  },
  {
    videoId: "OhLhyJ73lts",
    job_title: "professional mermaid",
    similar_videos: [
      "vpv-ERcYFvQ",
      "RqqYjm0VkCQ",
      "VFoQmNK6kC0",
      "7Tv7wTwEtNA",
      "y14K6s3F9P4"
    ]
  },
  {
    videoId: "em443ppHH5o",
    job_title: "Gemmologist and Jewelry Designer",
    similar_videos: [
      "TZWc0Iius0U",
      "7_oGGAzJJ0k",
      "rPNazYUtfd4",
      "jI6VaiiHQXA",
      "7FirdCcKRPI"
    ]
  },
  {
    videoId: "enSogaCRuzw",
    job_title: "CEO",
    similar_videos: [
      "XKBBWP4cHSE",
      "XfTBczNzRng",
      "KKxR-VLC5b4",
      "q_zbnou9gGs",
      "awFwWsh3esc"
    ]
  },
  {
    videoId: "vpv-ERcYFvQ",
    job_title: "Jewelry Designer",
    similar_videos: [
      "RqqYjm0VkCQ",
      "OhLhyJ73lts",
      "DqVZ4C2uYVM",
      "C_7rgCFh7qE",
      "EPtp8mye_Oo"
    ]
  },
  {
    videoId: "jwcAot5On1Y",
    job_title: "Wizard",
    similar_videos: [
      "7_oGGAzJJ0k",
      "rPNazYUtfd4",
      "5rjhMHn1Cqo",
      "Z-3HgCNhN0g",
      "zakrmuT9nds"
    ]
  }
];

// api.js
var ALLOWED_ORIGIN = "https://cloudflare.careerladder.pages.dev";
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
__name(randomItem, "randomItem");
function handleCors(request) {
  const origin = request.headers.get("Origin");
  if (origin === ALLOWED_ORIGIN) {
    return {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };
  }
  return {};
}
__name(handleCors, "handleCors");
var api_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const headers = handleCors(request);
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers
      });
    }
    const origin = request.headers.get("Origin");
    if (origin && origin !== ALLOWED_ORIGIN) {
      return new Response("Forbidden", { status: 403 });
    }
    if (url.pathname === "/video/random") {
      const randomVideo = randomItem(videos_default);
      return new Response(JSON.stringify({ videoId: randomVideo.videoId }), {
        status: 200,
        headers: {
          ...headers,
          "Content-Type": "application/json"
        }
      });
    }
    const match = url.pathname.match(/^\/video\/([^/]+)\/similar$/);
    if (match) {
      const videoId = match[1];
      const video = videos_default.find((v) => v.videoId === videoId);
      if (!video || !video.similar_videos?.length) {
        return new Response(JSON.stringify({ error: "Video not found or no similar videos available" }), {
          status: 404,
          headers: {
            ...headers,
            "Content-Type": "application/json"
          }
        });
      }
      const randomSimilar = randomItem(video.similar_videos);
      return new Response(JSON.stringify({ videoId: randomSimilar }), {
        status: 200,
        headers: {
          ...headers,
          "Content-Type": "application/json"
        }
      });
    }
    return new Response("Not found", { status: 404 });
  }
};

// ../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-PoFK9U/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = api_default;

// ../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-PoFK9U/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=api.js.map
