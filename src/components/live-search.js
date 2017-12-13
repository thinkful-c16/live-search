import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        keyword: ''
      }
      
    }
    
    render() {
      const characters = this.props.characters.filter( character => character.name.toLowerCase().includes(
      this.state.keyword.toLowerCase()
      ))
    
    
      return (
          <div className="live-search">
              <SearchForm onChange={keyword => this.setState({keyword}) } />
              // <CharacterCount count={this.props.characters.length} />
              <CharacterList characters={characters} />
          </div>
      );
    }
  }
  