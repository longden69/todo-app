import React from 'react'

class Add extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}

		this.handleClickAdd = this.handleClickAdd.bind(this);
	}

	handleClickAdd() {
		this.props.handleClickAdd();
	}

	render() {
		const isShowForm = this.props.isShowForm;
		return (
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button onClick={this.handleClickAdd} type="button" className="btn btn-info btn-block">{(isShowForm) ? 'Close' : 'Add task'}</button>
          </div>
			)
	}
}

export default Add
