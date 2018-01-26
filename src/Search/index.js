import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }

    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  handleSubmitSearch() {
    this.props.handleSubmitSearch(this.state.value);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

	render() {
		return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className="input-group">
                <input 
                  type="text" 
                  value={this.state.value} 
                  className="form-control" 
                  onChange={(e) => {
                    this.handleChange(e)
                  }}
                  placeholder="Search for..." />

                <span className="input-group-btn">
                  <button onClick={this.handleSubmitSearch} className="btn btn-info" type="button">Go!</button>
                </span>
              </div>
            </div>
			)
	}
}

export default Search
