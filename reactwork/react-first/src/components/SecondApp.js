import { Component } from "react";
import './mystyle.css';
import img1 from '../img/K-034.png';

// 전역변수
let helloElement = <h1>Hello Element!!!</h1>

// export default class SecondApp extends React.Component
export default class SecondApp extends Component
{
  // 생성자
  constructor(){
    super();
    console.log("생성자 호출");
  }

  render(){
    const imgStyle={
      border:'3px solid pink',
      borderRadius: '100px',
      width: '130px'
    }
    return (
      <div>
        <h1 style={{fontFamily:'Dongle', fontSize:'3em'}}>SecondApp 입니다</h1>
        <img alt="" src={img1} style={imgStyle}/>
        {helloElement}
        {helloElement}
        {helloElement}
      </div>
    )
  }
}