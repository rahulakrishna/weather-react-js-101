import React from 'react'

const styles={
  search:{
    width:'90%',
    border:'0px',
    borderBottom:'1px solid grey',
    fontSize:'24px',
    padding:'10px',
    margin:'10px'
  }
}

class Searchbar extends React.Component {
  render(){
    return(
      <div>
        <input
          type="text"
          placeholder="Search for a Place or City"
          style={styles.search}
          onChange={(e)=>{this.props.onPlaceChange(e.target.value)}}
        />
      </div>
    )
  }
}

export default Searchbar
