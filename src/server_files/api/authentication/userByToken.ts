export const GET = async (req, res, next) => {
  next(req.tokenInfo ? req.tokenInfo.user : null);
};
