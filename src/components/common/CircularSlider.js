import React from 'react';
import { View, Text } from 'react-native';
import Svg,{ Circle, Path } from 'react-native-svg';

class CircularSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }


  render() {

    const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
      var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
    
      return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
      };
    }
    
    const describeArc = (x, y, radius, startAngle, endAngle) => {
        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, startAngle);
        var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
    
        var d = [
            "M", start.x, start.y, 
            "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
            // "L", x,y,
            // "L", start.x, start.y
        ].join(" ");
    
        return d;       
    }

    const degToRad = (degree) => {
      degree*Math.PI/360
    }

    const drawArc = (x, y, radius, startAngle, endAngle, lineWidth, circleRadius) => {
      return(
        <Svg
        height="300"
        width="300"
        >
        <Path
          d={describeArc(x, y, radius, startAngle, endAngle)}
          stroke="black"
          strokeWidth={lineWidth}
          fill='black'
          fillOpacity='0'
        />
        <Circle cx={x-radius*Math.cos((endAngle+90)*Math.PI/180)} cy={y-radius*Math.sin((endAngle+90)*Math.PI/180)} r={circleRadius} fill="yellow" />
        {console.log("Cos is", Math.cos(endAngle*Math.PI/180))}
        </Svg>
      )
    }

    return(
      <View>
        <Text>Circular slider should come here</Text>
        {drawArc(100, 100, 50, 0, 270, 10, 15)}
      </View>
    )
  }
}

export default CircularSlider;