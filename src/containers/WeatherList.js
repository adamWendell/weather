import React, { PropTypes } from 'react'
import {connect} from 'react-redux'


class WeatherList extends React.Component {
  render () {
        if(this.props.weather)  this.props.weather.map(i => console.log(i.list))
    return (
      <table className='table table-hover' >
        <thead>
          <tr>
            <th>City</th>
            <th>Temprature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    )
  }
}
function mapStateToProps ({weather}) {
  return {weather}
}
export default connect(mapStateToProps)(WeatherList);