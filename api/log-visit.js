import { Client } from "pg";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { timestamp } = req.body;

    // 데이터베이스 클라이언트 설정
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    });

    try {
      await client.connect();
      // 로그 테이블에 데이터 삽입
      await client.query("INSERT INTO logs (timestamp) VALUES ($1)", [
        timestamp,
      ]);
      res.status(200).json({ message: "Visit logged successfully" });
    } catch (error) {
      console.error("Error logging visit:", error);
      res.status(500).json({ message: "Internal server error" });
    } finally {
      await client.end();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
