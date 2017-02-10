import React, { Component, PropTypes } from 'react'

class Inputs extends Component {
    static propTypes = {
        addValue: PropTypes.string,
        onAddValueChange: PropTypes.func,
        onAddValueKeyPress: PropTypes.func,
        onSort: PropTypes.func,
        filterValue: PropTypes.string,
        onFilterChange: PropTypes.func
    }

    render () {
        return (
            <div>
                <input
                    onChange={this.props.onAddValueChange}
                    onKeyPress={this.props.onAddValueKeyPress}
                    type="text"
                    value={this.props.addValue} />
                <br />
                <input type="button" value="Sort!" onClick={this.props.onSort} />
                <br />
                <input
                    onChange={this.props.onFilterChange}
                    type="text"
                    value={this.props.filterValue} />
            </div>
        )
    }
}

export default Inputs