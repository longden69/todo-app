import React from 'react'

class Item extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		const item = this.props.item;
		
		return (
            <tr>
              <td className="text-center">{item.id}</td>
              <td>{item.name}</td>
              {this._setLevelElement(item.level)}
              <td>
                <button type="button" className="btn btn-warning">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
			)
	}
	_setLevelElement(level) {
		let levelBadge = <td className="text-center"><span className="label label-default">Low</span></td>;
		if (level === 2) {
			levelBadge = <td className="text-center"><span className="label label-danger">High</span></td>;
		} else if (level === 1) {
			levelBadge = <td className="text-center"><span className="label label-info">Medium</span></td>;
		}

		return levelBadge;
	}
}

export default Item
