import VideoDetails from './VideoDetails.js';

const VideoPlayer = ({autoPlay, video, channel}) => {
  console.log('this is from VideoPlayer');

  if (!video) {
    return <div className="video-player"></div>;
  }

  if (autoPlay) {
    var url = 'https://www.youtube.com/embed/' + video.id.videoId + '?autoplay=1';
  } else {
    var url = 'https://www.youtube.com/embed/' + video.id.videoId;
  }

  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
      </div>

      <VideoDetails video={video} channel={channel}/>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
