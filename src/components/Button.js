import React from 'react'

const styles={
  buttonContainer:{
    textAlign:'center'
  },
  button:{
    border:'0px',
    boxShadow:'0px 0px 1px 0px',
    fontSize:'24px',
    backgroundColor:'lightblue',
    color:'white',
    padding:'10px'
  }
}

class Button extends React.Component{
  render(){
    return(
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={this.props.onPress}
          >
          Results!
        </button>
      </div>
    )
  }
}

export default Button
