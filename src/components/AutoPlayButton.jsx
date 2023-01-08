const AutoPlayButton = ({autoPlay, handleAutoPlay}) => {


  return (
    <button className={autoPlay ? 'autoPlayButton clicked' : 'autoPlayButton' } onClick={handleAutoPlay}>AutoPlay</button>
  );
};

export default AutoPlayButton;
