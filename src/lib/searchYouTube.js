import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var url = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';

const searchYouTube = (query, callback) => {
  $.ajax({
    url: url,
    method: 'GET',
    dataType: 'JSON',
    data: {
      'api-key': YOUTUBE_API_KEY,
      'q': query
    },
    success: function(data) {
      // console.log(data);
      callback(data);
    },
    error: function(err) {
      console.log('error:' + err);
    }
  });

};


export default searchYouTube;
