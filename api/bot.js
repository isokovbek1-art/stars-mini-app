exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 200, body: "OK" };

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const appUrl = process.env.MINI_APP_URL;
  const update = JSON.parse(event.body || "{}");
  const msg = update.message;

  if (msg && msg.text === "/start") {
    await fetch(https://api.telegram.org/bot${token}/sendMessage, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: msg.chat.id,
        text: "STARS BAZA — Telegram Stars va Premium xarid qilish uchun tugmani bosing 👇",
        reply_markup: { inline_keyboard: [[{ text: "⭐ Ochish", web_app: { url: appUrl } }]] },
      }),
    });
  }
  return { statusCode: 200, body: "OK" };
};
