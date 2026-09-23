const API_BASE = "https://stars.cheap-smm.uz/api/v1";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ status: "error", message: "Faqat POST" }) };
  }
  const apiKey = process.env.STARS_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ status: "error", message: "STARS_API_KEY sozlanmagan" }) };
  }
  try {
    const body = { ...JSON.parse(event.body || "{}"), apikey: apiKey };
    const upstream = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await upstream.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (err) {
    return { statusCode: 502, body: JSON.stringify({ status: "error", message: "Ulanish xatosi: " + err.message }) };
  }
};
