import React, {Component} from 'react-native';

import Svg, {Path,G,Circle,Text} from 'react-native-art-svg';

import Pie from './paths-js/pie.js';
    let somePalette = ['red', 'blue', 'green', 'lightblue', 'yellow', 'pink', 'orange'];
    let pie = Pie({
      data: [
        {
          name: 'Italy',
          population: 59859996
        },
        {
          name: 'Mexico',
          population: 118395054
        },
        {
          name: 'France',
          population: 65806000
        },
        {
          name: 'Argentina',
          population: 540117096
        },
        {
          name: 'Japan',
          population: 127290000
        },
        {
          name: 'Sweden',
          population: 107290000
        }
      ],
      accessor: function(x) {
        return x.population;
      },
      compute: {
        color: function(i) {
          return somePalette[i];
        }
      },
      center: [20, 15],
      r: 30,
      R: 100
    });

export default class PieChart extends Component{
    static title = 'Path';
    renderPie(){
        return pie.curves.map((curve, index)=>{
                let str =  (<Path key={index} d={curve.sector.path.print()} fill={curve.color}/>);
                console.log(str);
                return str;
              })
    }
    render2() {
        return (<Svg height="400" width="500" fill="black">
    <G x="100" y="100">
    <Path d="M60 60
           A 45 45, 0, 0, 0, 105 105
           L 105 60 Z" fill="blue"/>
    <Path d="M60 60
           A 45 45, 0, 1, 1, 105 105
           L 105 60 Z" fill="red"/>
           <Path d="M 20 -35 A 50 50 0 0 1 59.599813 -15.526297 L 43.759888 -3.315778 A 30 30 0 0 0 20 -15 Z " fill="red"/>
               {this.renderPie()}         
        </G>
            </Svg>);

    }
        render() {
        return (<Svg height="400" width="500" fill="black">
    <G x="230" y="100">
               {this.renderPie()}         
        </G>
            </Svg>);

    }

}