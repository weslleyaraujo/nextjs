import { NowRequest, NowResponse } from "@vercel/node";
import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE
);

export default async (req: NowRequest, res: NowResponse) => {
  res.statusCode = 200;
  res.setHeader("Cache-Control", "s-maxage=60");
  const now = new Date();
  try {
    const records = await base("Hustlers 2.0").select().all();
    res.json({
      date: Intl.DateTimeFormat("en-gb", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format(now),
      items: records.map((item) => item.fields),
    });
  } catch (e) {}
};
