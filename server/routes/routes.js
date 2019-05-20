const {
  getSummoner,
  fetchSummonerHistory
} = require("../controllers/leagueApi/leagueApi");

module.exports = app => {
  app.get("/api/summonerDetails", getSummoner);
  app.get("/api/summonerHistory", fetchSummonerHistory);
};
