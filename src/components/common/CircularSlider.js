import React from 'react';
import { View, Text, PanResponder } from 'react-native';
import Svg,{ Circle, Path, Rect } from 'react-native-svg';

class CircularSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endAngle: 180
    }
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // What is happening!

        // gestureState.d{x, y} will be set to zero now
        console.log("Pan responder clicked, gestureState.d{x, y} values are",gestureState.d);
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X, Y}

        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x, y}

        const radius = this.props.radius;
        const lineWidth = this.props.lineWidth;
        const btnRadius = this.props.btnRadius;

        const finalWidth = btnRadius > lineWidth/2 ? radius+btnRadius : radius+lineWidth/2;
        console.log("finalWidth is",finalWidth);
        console.log("this.state.endAngle is",this.state.endAngle);
        const circleX = radius*2+radius*Math.cos(this.state.endAngle*Math.PI/180)
        const circleY = radius*2+radius*Math.sin(this.state.endAngle*Math.PI/180)
        const adjustedX = circleX - gestureState.x0;
        const adjustedY = circleY - gestureState.y0;
        const originX = gestureState.x0;
        console.log("originX is",originX);
        const originY = gestureState.y0;
        console.log("originY is",originY);
        const moveX = gestureState.moveX;
        console.log("moveX is", moveX);
        const moveY = gestureState.moveY;
        console.log("moveY is",moveY);
        if (Math.abs(moveX - originX) > 0.001 || Math.abs(moveY - originY) > 0.001 ) {
          const changedAngle = Math.acos(
            ( 2*Math.pow(radius,2) - (Math.pow(originX-moveX,2) + Math.pow(originY-moveY,2)) ) / 
            (2*Math.pow(radius,2) )
          )
          console.log("Changed Angle is",changedAngle);
          newAngle = this.state.endAngle + changedAngle
          if (newAngle >= 360) {
            newAngle = newAngle - 360;
          }
          this.setState({
            endAngle: newAngle
          })
        }
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderReleast: (evt, gestureState) => {
        // Another component has become the responder. so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android
      }
    })
    const degToRad = (degree) => {
      degree*Math.PI/360
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
    
    // const describeArc = (x, y, radius, startAngle, endAngle,btnRadius) => {
    //     var start = polarToCartesian(x, y, radius, endAngle);
    //     var end = polarToCartesian(x, y, radius, startAngle);
    //     var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
    
    //     var d = [
    //         "M", start.x, start.y, 
    //         "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
    //         // "L", x,y,
    //         // "L", start.x, start.y
    //     ].join(" ");
    
    //     return d;       
    // }

    const degToRad = (degree) => {
      degree*Math.PI/360
    }

    const drawArc = (radius, startAngle, endAngle, lineWidth, btnRadius) => {
      const finalWidth = btnRadius > lineWidth/2 ? radius+btnRadius : radius+lineWidth/2;
      const start = polarToCartesian(finalWidth, finalWidth, radius, endAngle);
      const end = polarToCartesian(finalWidth, finalWidth, radius, startAngle);
      const arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

      const pathDirection = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
        // "L", x,y,
        // "L", start.x, start.y
    ].join(" ");

      return(
        <Svg
        width={(radius+btnRadius)*3}
        height={(radius+btnRadius)*2}
        >
        <Path
          d={pathDirection}
          stroke="black"
          strokeWidth={lineWidth}
          fill={this.props.lineColor}
          fillOpacity='0'
        />
        <Circle 
          cx={finalWidth-radius*Math.cos((endAngle+90)*Math.PI/180)} 
          cy={finalWidth-radius*Math.sin((endAngle+90)*Math.PI/180)} 
          r={btnRadius} 
          fill='yellow' 
          {...this._panResponder.panHandlers}
        />
        <Rect 
          width={(radius+btnRadius)*2}
          height={(radius+btnRadius)*2}
          fill='red'
          fillOpacity='0.2'
        />
        </Svg>
      )
    }

    return(
      <View>
        <Text>Circular slider should come here</Text>
        {this.state.endAngle >= 360 ? this.state.endAngle %= 360 : null}
        {drawArc(this.props.radius, 0, this.state.endAngle, this.props.lineWidth, this.props.btnRadius)}
      </View>
    )
  }
}

export default CircularSlider;