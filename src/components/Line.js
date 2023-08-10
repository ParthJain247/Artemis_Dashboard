import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import {data} from '../data/sampleData'
function Line() {
  return (
    <ResponsiveLine
        data={data}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: 'category10' }}
        lineWidth={3}
        enablePoints={false}
        pointSize={9}
        pointColor="black"
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableArea={true}
        areaOpacity={0.6}
        enableCrosshair={false}
        useMesh={true}
        legends={[]}
        animate={false}
    />
  )
}

export default Line