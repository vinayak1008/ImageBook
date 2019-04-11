import React from 'react';
import SearchBar from './searchbar';
import youtube from './api/youtube';
import VideosList from './videolist';
import VideoDetails from './videodetail';

class Video extends React.Component {
    state = { videos: [], selectedVideo: null  };

    componentDidMount() {
        this.onTermSubmit('song');
    }

    onTermSubmit = async msg => {
        const response = await youtube.get('/search',{
            params:{
                q: msg
            }
        });
        this.setState({ 
            videos: response.data.items, 
            selectedVideo: response.data.items[0] 
        });
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideosList 
                            videos={this.state.videos}
                            onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Video;