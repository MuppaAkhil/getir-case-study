export const config = {
  MONGODBURI:
    process.env.MongoDBUri ||
    `mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true`,
  LOG_LEVEL : process.env.LOG_LEVEL || "info",
  NODE_ENV : process.env.NODE_ENV || "development"
};
