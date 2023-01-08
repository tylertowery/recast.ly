const VideoDetails = ({ channel, video }) => {

  console.log('this is channel: ', channel);
  if (!channel) {
    return <div></div>;
  }

  var channelName = channel.items[0].snippet.title;
  var channelThumbnail = channel.items[0].snippet.thumbnails.default.url;

  return (
    <div className="video-player-details">
      <h3>{video.snippet.title}</h3>
      <img height="50px" src={channelThumbnail}/>
      <h6>{channelName}</h6>
      <div>{video.snippet.description}</div>
    </div>
  );
};

export default VideoDetails;