import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

  state = { images: [] }

  onSearchSubmit = async (term) => {
    try {
      const res = await fetch(`https://api.unsplash.com/search/photos?query=${term}`,
        {
          headers: {
            Authorization: `Client-ID ViO13wtKgqKBcWI_0cYVrxG4U7pd2WlW9NHoc3etM6E`
          }
        })
      if (!res.ok) throw res;
      const data = await res.json();
      this.setState({ images: data.results });
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
