import React from "react";
import api from "./api.jsx";
import SearchBar from "./search";
import ImageList from "./imagelist";

class Figure extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await api.get("/search/photos", {
      params: { query: term }
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />

        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default Figure;
