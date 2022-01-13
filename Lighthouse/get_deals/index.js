const axios = require("axios");
const config = require("../../lighthouse.config");

exports.get_deals = async (content_id) => {
  const response = await axios.get(
    config.URL + `/api/lighthouse/get_deals?content_id=${content_id}`
  );
  return response.data;
};
