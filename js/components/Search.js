import React from 'react';
import Autocomplete from './Autocomplete';

var Search = React.createClass({
  hide: function() {
      this.props.onInteraction('showSearch', false);
  },

  render: function() {
    return (
      <div className={this.props.data.showSearch ? 'visible attr-container' : 'attr-container'}>
        <div className='autocomplete-wrapper'>
          <div className='close-autocomplete' onClick={this.hide}>x</div>
          <Autocomplete
            updateView={this.props.updateView}
            broadcast={this.props.onInteraction}
            minLength='2'
          />
        </div>
      </div>
    );
  }
});

export default Search;
