import React, { PropTypes } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const chart = ({data, color, units}) => {
  if (units === 'K') {  
    var avg = Math.round(data.reduce((pre, curr) => pre + curr) / data.length) - 273
  } else {
    var avg = Math.round(data.reduce((pre, curr) => pre + curr) / data.length)
  }
  return (
      <div>
        <Sparklines data={data} height={120} width={180}>
          <SparklinesLine color={color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{avg + (units === 'K' ? unescape('\xB0')+ 'C' : units)}</div>
      </div>  
  )
}

export default chart
