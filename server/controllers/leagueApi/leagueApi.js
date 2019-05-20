const axios = require("axios");
let { API } = process.env;

let getSummoner = async (req, res) => {
  const results = await axios.get(
    `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/bloodstrive?api_key=${API}`
  );

  const info = results.data.id;

  const res2 = await axios.get(
    `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${info}?api_key=${API}`
  );

  if (res2.data) {
    res.status(200).json(res2.data);
  }
};

let fetchSummonerHistory = async (req, res) => {
  const results = await axios.get(
    `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/bloodstrive?api_key=${API}`
  );

  const info = results.data.accountId;

  const res2 = await axios.get(
    `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${info}?api_key=${API}`
  );

  if (res2.data) {
    res.status(200).json(res2.data);
  }
};

module.exports = {
  getSummoner,
  fetchSummonerHistory
};
