import React from 'react'
import './Weather.css'
import {ftc} from '../utils/helpers.js'
import axios from 'axios'
import Async from 'react-promise'

const styles={
  container:{
    textAlign:'center'
  },
  description:{

  },
  forecastsContainer:{
    display:'inline-flex',
    width:'100%',
    overflowX:'scroll',
    scrollbar:'hidden'
  },
  date:{
    fontSize:'12px',
    width:'200px'
  }
}

class WeatherResults extends React.Component {
  findImage=(keyword)=>{
    return axios({
      method:'get',
      url:`https://pixabay.com/api/?key=7302135-4b0f8520a550f8763051a4efd&q=${keyword+' weather'}`,
    }).then((response)=>{
      console.log(response)
      return response.data.hits[0].webformatURL
    })
  }
  render(){
    const forecasts=this.props.forecast.map((weather)=>(
      <Async key={weather.date} promise={this.findImage(weather.text)} then={(response)=>
        <div style={{backgroundImage:`url(${response})`}} className='forecast'>
          <div className='text-content'>
            <div style={styles.date}>{weather.date}</div><br/>
            <div className='high'>{ftc(weather.high)}</div><br/>
            <div className='low'>{ftc(weather.low)}</div><br/>
            <div>{weather.text}</div>
          </div>
        </div>
      }/>
    ))
    return(
      <div style={styles.container}>
        <h1 style={styles.description}>{this.props.description}</h1>
        <div style={styles.forecastsContainer}>
          {forecasts}
        </div>
      </div>
    )
  }
}

export default WeatherResults
