const redis = require("redis");

exports.main = async (args) => {
  const client = await redis
    .createClient({
      url: process.env.REDIS_URL,
    })
    .on("error", (err) => console.log("Redis Client Error", err))
    .on("connect", () => console.log("Connected to Redis"))
    .connect();

  const lowerCaseQuery = args.query.toLowerCase();
  const pagePaths = await client.get(lowerCaseQuery);

  return {
    headers: { "content-type": "text/html; charset=UTF-8" },
    body: JSON.stringify(pagePaths),
  };
};
