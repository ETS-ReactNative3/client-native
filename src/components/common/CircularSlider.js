import React from 'react';
import { View, PanResponder } from 'react-native';
import Svg,{ Circle, Path, Rect, Text } from 'react-native-svg';

class CircularSlider extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.state.endAngle !== nextProps.startValue && nextProps.stopSlider === false) {
      console.log("Component will receive props activated");
      if (nextProps.startValue >=360) {
        this.setState({
          endAngle: 359.99,
          enableSlider: nextProps.enableSlider
        })
      }
      else {
        this.setState({
          endAngle: nextProps.startValue,
          enableSlider: nextProps.enableSlider
        });
      }
    } 
    // else if (Math.round(nextProps.startValue*100/360>99)) {
    //   console.log("Componentwillreceiveprops set in alternate space")
    //   this.setState({
    //     endAngle: 359.99
    //   })
    // }
   }
  constructor(props) {
    super(props);
    this.state = {
      endAngle: this.props.startValue,
      absoluteStartX:0,
      absoluteStartY:0,
      enableSlider: true
    }
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // this.props.onChangeAngle(this.state.endAngle);
        // The gesture has started. Show visual feedback so the user knows
        // What is happening!

        // gestureState.d{x, y} will be set to zero now
        // console.log("Pan responder clicked, gestureState.d{x, y} values are",gestureState.d);
      },
      onPanResponderMove: (evt, gestureState) => {
        // this.props.onChangeAngle(this.state.endAngle);
        // The most recent move distance is gestureState.move{X, Y}

        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x, y}

        const radius = this.props.radius;
        const lineWidth = this.props.lineWidth;
        const btnRadius = this.props.btnRadius;
        const centerX = radius + btnRadius;
        const centerY = radius + btnRadius;

        const finalWidth = btnRadius > lineWidth/2 ? radius+btnRadius : radius+lineWidth/2;
        // console.log("finalWidth is",finalWidth);
        // console.log("this.state.endAngle is",this.state.endAngle);
        const circleX = radius*2+radius*Math.cos(this.state.endAngle*Math.PI/180)
        const circleY = radius*2+radius*Math.sin(this.state.endAngle*Math.PI/180)
        const originX = gestureState.x0;
        // console.log("originX is",originX);
        const originY = gestureState.y0;
        // console.log("originY is",originY);
        const moveX = gestureState.moveX - this.state.absoluteStartX;
        // console.log("moveX is", moveX);
        const moveY = gestureState.moveY - this.state.absoluteStartY;
        // console.log("moveY is",moveY);
        // console.log("this.state.absoluteStartX, absoluteStartY", this.state.absoluteStartX, this.state.absoluteStartY);

        const closestX = centerX + radius * (moveX - centerX) / Math.pow(
          Math.pow(moveX-centerX,2) + Math.pow(moveY-centerY,2)
          ,1/2)
        const closestY = centerY + radius * (moveY - centerY) / Math.pow(
          Math.pow(moveX-centerX,2) + Math.pow(moveY-centerY,2)
        ,1/2)
        let currentAngle = Math.acos(
          ( 2*Math.pow(radius, 2) - 
          (Math.pow(centerX - closestX,2) + Math.pow(centerY-radius-closestY, 2)) ) / (2*Math.pow(radius,2))
        )
        currentAngle = currentAngle * 180 / Math.PI;
        if (moveX < centerX) {
          // console.log("Original current angle is",currentAngle);
          currentAngle = 360-currentAngle;
        }
        // console.log("centerX, center Y is",centerX, centerY);
        // console.log("absolue clidked is",gestureState.moveX, gestureState.moveY);
        // console.log("moveX, moveY is",moveX, moveY);
        // console.log("ClosestX, closestY, currentAngle is",closestX, closestY, currentAngle)
        // console.log("currentAngle: ",currentAngle,"this.state.endAngle: ",this.state.endAngle)
        if (this.props.stopSlider == false || this.state.endAngle > currentAngle) {
          if (Math.abs(this.state.endAngle - currentAngle) < 90) {
            this.setState({
              endAngle: currentAngle < this.props.maxAngle ? currentAngle : this.props.maxAngle
            })
          } else if (this.state.endAngle < 10 && currentAngle > 350) {
            this.setState({
              endAngle: 0
            })
          } else if (this.state.endAngle > 350 && currentAngle < 10) {
            this.setState({
              endAngle: 359.99
            })
          }
          this.props.onChangeAngle(this.state.endAngle);
        }
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        this.props.onSlidingComplete();
        // Another component has become the responder. so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android
      }
    })

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


    const drawArc = (radius, startAngle, endAngle, lineWidth, btnRadius) => {
      // if (endAngle < 0) {
      //   this.setState({endAngle: 0})
      //   endAngle = 0
      // } else if (endAngle>360) {
      //   this.setState({endAngle: 359.99})
      //   endAngle=359.9
      // }
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
          fill={this.props.circleColor} 
          {...this._panResponder.panHandlers}
        />
        <Rect 
          width={(radius+btnRadius)*2}
          height={(radius+btnRadius)*2}
          fill='red'
          fillOpacity='0.2'
        />
        <Text
          x='35%'
          y='50%'
          textAnchor='middle'
          alignmentBaseline='middle'
          fontSize='20'
        >{Math.round(this.state.endAngle*100/360)}</Text>
        </Svg>
      )
    }

    return(
      <View
        ref="Marker"
        onLayout={({nativeEvent}) => {
          this.refs.Marker.measure((x, y, width, height, pageX, pageY) => {
            // console.log(x, y, width, height, pageX, pageY);
            this.setState({
              absoluteStartX: pageX,
              absoluteStartY: pageY
            })
          })
        }}
      >
        {/* {console.log("Circular slider changed with angle",this.state.endAngle)} */}
        {/* {this.state.endAngle >= 360 ? this.state.endAngle %= 360 : null} */}
        {drawArc(this.props.radius, 0, this.state.endAngle, this.props.lineWidth, this.props.btnRadius)}
      </View>
    )
  }
}

export default CircularSlider;