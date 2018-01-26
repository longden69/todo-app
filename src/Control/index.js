import React from 'react'

import Search from './../Search/'
import Sort from './../Sort/'
import Add from './../Add/'

class Control extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}

		this.handleClickAdd = this.handleClickAdd.bind(this);
	}

	handleClickAdd() {
		this.props.onClickAdd();
	}

	handleSubmitSearch(strSearch) {
		this.props.handleSubmitSearch(strSearch);
	}

	render() {
		const isShowForm = this.props.isShowForm;
		return (
	          <div className="row">
	            <Search strSearch={this.props.strSearch} handleSubmitSearch={(value) => {
	            	this.handleSubmitSearch(value)
	            }} />
	            <Sort />
	            <Add isShowForm={isShowForm} handleClickAdd={this.handleClickAdd} />
	          </div>
			)
	}
}

export default Control
