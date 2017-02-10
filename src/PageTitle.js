import React, { Component } from 'react'

class PageTitle extends Component {
    static propTypes = {
        title: React.PropTypes.string,
        count: React.PropTypes.number
    }

    render () {
        const title = this.props.title || 'Judul'
        const count = this.props.count || 1

        return (<h2>{ title } ke { count }</h2>)
    }
}

export default PageTitle