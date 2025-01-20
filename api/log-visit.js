export default async function handler(req, res) {
  if (req.method === "POST") {
    const { timestamp } = req.body;

    // 방문 로그 기록
    console.log(`Visit logged at: ${timestamp}`);

    res.status(200).json({ message: "Visit logged successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
