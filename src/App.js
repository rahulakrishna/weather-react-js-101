import React, { Component } from 'react'

import Searchbar from './components/SearchBar'
import WeatherResults from './components/WeatherResults'
import Button from './components/Button'

import axios from 'axios'

class App extends Component {
  state={
    place:'',
    description:'',
    forecasts:[]
  }
  setPlace=(place)=>{
    this.setState({
      place
    })
  }
  fetchWeather=()=>{
    axios({
      method:'get',
      url:`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${this.state.place}%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
    }).then((data)=>{
      console.log(data)
      this.setState({
        description:data.data.query.results.channel.description,
        forecasts:data.data.query.results.channel.item.forecast
      })
    })
  }
  render() {
    return (
      <div>
          {/* The Top Portion with Searchbar */}
          <Searchbar
            onPlaceChange={this.setPlace}
          />
          <Button
            onPress={this.fetchWeather}
          />
          {/* Weather Results */}
          <WeatherResults
            description={this.state.description}
            forecast={this.state.forecasts}
          />
      </div>
    );
  }
}

export default App;
