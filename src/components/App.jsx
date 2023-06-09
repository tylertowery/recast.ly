import data from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import AutoPlayButton from './AutoPlayButton.js';
import getChannelDetails from '../lib/getChannelDetails.js';
import searchYouTube from '../lib/searchYouTube.js';


const { useState, useEffect } = React;

const App = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState();
  const [autoPlay, setAutoPlay] = useState(false);
  const [channel, setChannel] = useState();

  const handleClick = (videoid) => {
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].id.videoId === videoid) {
        setCurrentVideo(videos[i]);
        getChannelDetails(videos[i].snippet.channelId, (data) => {
          setChannel(data);
        });
        break;
      }
    }
  };

  const handleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };


  // var timeout = null;

  const handleGet = (query) => {
    var callback = (data) => {
      // console.log('get the data', data);
      setVideos([...data]);
    };

    searchYouTube(query, callback);
  };

  // useEffect(() => {
  //   handleGet('cutecatvideo');
  //   console.log('hello use effect');
  // }, [currentVideo]);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><Search handleGet={handleGet}/></div>
        </div>
        <div>
          <AutoPlayButton handleAutoPlay={handleAutoPlay} autoPlay={autoPlay} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video={currentVideo} channel={channel} autoPlay={autoPlay} /></div>
        </div>
        <div className="col-md-5">
          <div><VideoList videos={videos} handleClick={handleClick}/></div>

        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
