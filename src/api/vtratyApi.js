const axios = require('axios').default;

const getStatisticsLatest = async () => {
  try {
    const data = await axios.get(`https://russianwarship.rip/api/v1/statistics/latest`)
    return data.data.data
  } catch (err) {
    console.error(`Error: ${err}`)
  }
}

module.exports = {
  getStatisticsLatest,
}
