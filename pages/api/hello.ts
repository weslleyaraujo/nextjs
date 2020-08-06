import { NowRequest, NowResponse } from "@vercel/node";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req: NowRequest, res: NowResponse) => {
  res.statusCode = 200;
  res.setHeader("Cache-Control", "s-maxage=86400");
  const now = new Date();
  res.json({
    date: Intl.DateTimeFormat("en-gb", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(now),
  });
};
