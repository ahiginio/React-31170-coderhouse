import React from "react"

export default class Footer extends React.Component {

  render() {
    console.log(this.props)
    return (
      <footer>
        <div>
          <p>Este es nuestro saludo {this.props.greeting}</p>
        </div>
        
      </footer>
    )
  }
}

