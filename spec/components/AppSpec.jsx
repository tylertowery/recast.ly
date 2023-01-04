import App from '../../src/components/App.js';

describe('App', function() {
  var {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass
  } = ReactTestUtils;

  var app;

  beforeEach(function() {
    app = renderIntoDocument(
      <Wrapper><App/></Wrapper>
    );
  });

  it('should render a single VideoPlayer component', function() {
    var videoPlayer = findRenderedDOMComponentWithClass(app, 'video-player');
    expect(videoPlayer).to.exist;
  });

  it('should render a single VideoList component', function() {
    var videoList = findRenderedDOMComponentWithClass(app, 'video-list');
    expect(videoList).to.exist;
  });

  it('should update the video player when a video entry\'s title is clicked', function() {
    var videoEntryTitleElements = scryRenderedDOMComponentsWithClass(app, 'video-list-entry-title');

    videoEntryTitleElements.forEach((videoEntryTitle) => {
      Simulate.click(videoEntryTitle);
      var player = findRenderedDOMComponentWithClass(app, 'video-player');
      var playerTitle = player.querySelector('.video-player-details h3');

      // This test assumes that if you can successfully update the video player's title,
      // you can also update the video and description
      expect(playerTitle.innerHTML).to.equal(videoEntryTitle.innerHTML);
    });
  });

  describe('when rendering live data from YouTube', function() {
    beforeEach(function() {
      app = renderIntoDocument(
        <App />
      );
    });

    it('should load live data when app is initialized', function() {
      var videoEntryTitleElements = scryRenderedDOMComponentsWithClass(app, 'video-list-entry-title');

      videoEntryTitleElements.forEach((videoEntryTitle, i) =>
        expect(videoEntryTitle.innerHTML).to.equal(fakeVideoData[i].snippet.title)
      );
    });

  });
});
