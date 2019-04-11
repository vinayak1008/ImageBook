import React, { Component } from 'react';

class SearchBar extends Component {
    
state = { msg: ' ' };

onValueChange = (e) => {
    this.setState({msg: e.target.value})
};

onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.msg);
};

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" 
                        value={this.state.msg} 
                        onChange={this.onValueChange}
                        />
                    </div>
                </form> 
            </div>
        )
    }
}

export default SearchBar;
