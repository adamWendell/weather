import React, { PropTypes } from 'react'

class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {term: ''}
    this.onInputChange = this.onInputChange.bind(this)
  }
  
  onInputChange (e) {
    console.log(e.target.value);
    this.setState({term: event.target.value})
  }
  onFormSubmit (e) {
    e.preventDefault();
    console.log('hi');
  }
  render () {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input placeholder="Get a five-day forecast in your favorite cities"
           className='form-control'
           value={this.state.term}
           onChange={this.onInputChange} />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

export default SearchBar;