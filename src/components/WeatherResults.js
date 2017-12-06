import React from 'react'

const styles={
  container:{
    textAlign:'center'
  },
  description:{

  },
  forecasts:{
    display:'inline-flex'
  }
}

class WeatherResults extends React.Component {
  render(){
    const forecasts=this.props.forecast.map((weather)=>(
      <div key={weather.date} style={forecasts}>
        {weather.date}
        {weather.high}
        {weather.low}
        {weather.text}
        <br/>
      </div>
    ))
    return(
      <div style={styles.container}>
        <h1 style={styles.description}>{this.props.description}</h1>
        {forecasts}
      </div>
    )
  }
}

export default WeatherResults
