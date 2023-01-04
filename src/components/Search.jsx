import searchYouTube from '../lib/searchYouTube.js';

const { useState, useEffect } = React;

const Search = ({handleGet}) => {
  const [query, setQuery] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(query);
    handleGet(query);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    handleGet(query);
  }, [query]);



  return (
    <form className="search-bar form-inline" onSubmit={handleSubmit}>
      <input className="form-control" type="text" value={query} onChange={(event) => { setQuery(event.target.value); }}/>
      <button className="btn hidden-sm-down" type='submit'>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </form>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
