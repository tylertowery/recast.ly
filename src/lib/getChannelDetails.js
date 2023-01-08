import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var url = 'https://www.googleapis.com/youtube/v3/channels';

const getChannelDetails = (channelID, callback) => {
  $.ajax({
    url: url,
    method: 'GET',
    dataType: 'JSON',
    data: {
      'part': 'snippet,contentDetails,statistics',
      'key': YOUTUBE_API_KEY,
      'id': channelID
    },
    success: function(data) {
      callback(data);
    },
    error: function(err) {
      console.log('error:' + err);
    }
  });

};


export default getChannelDetails;
