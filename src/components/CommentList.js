import React, { Component } from 'react'

function Comment({data}) {
  return (
    <div>
      <p>{data.body}</p>
      <p>{data.author}</p>
    </div>
  )
}

export default class CommentList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: []
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        comments: [
          {body: 'react is very good', author: 'facebook'},
          {body: 'vue is very good', author: 'you'}
        ]
      })
    }, 1000)
  }
  render () {
    return (
      <div>
        {this.state.comments.map((c, i) => (
          <Comment key={i} data={c}></Comment>
        ))}
      </div>
    )
  }
}