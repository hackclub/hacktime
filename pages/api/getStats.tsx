import axios from 'axios';
import btoa from 'btoa';

export default (req, res) => {
  axios.get(`https://wakatime.com/api/v1/users/${req.query.username}`, {
    headers: {
      Authorization: 'Basic ' + btoa(process.env.WAKATIME_API_KEY)
    }
  })
  .then(function (response) {
    res.send(JSON.stringify(response.data.data));
  })
  .catch(function (error) {
    console.log(error);
    res.status(400).send('Sorry, we can\'t find that user or we\'re not authorized to.');
  });
}
