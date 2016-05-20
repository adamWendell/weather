import React, { PropTypes } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

const chart = ({data, color}) => {
  console.log(data);
  console.log(color);
  return (
      <Sparklines data={data} height={120} width={180}>
        <SparklinesLine color={color} />
      </Sparklines>
  )
}

export default chart
