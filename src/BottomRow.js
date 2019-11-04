import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {

  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(50);
  const [quarter, setQuarter] = useState(1);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
      <div className="downButtons">
        <button className="downAdvance" onClick={() => setDown(down + 1)}>Next Down</button>
        <button className="downReset" onClick={() => setDown(1)}>Reset Downs</button>
      </div>
      <div className="toGoButtons">
        <button className="toGoSubOne" onClick={() => setToGo(toGo - 1)}>-1 Yard</button>
        <button className="toGoSubFive" onClick={() => setToGo(toGo - 5)}>-5 Yards</button>
        <button className="toGoAddOne" onClick={() => setToGo(toGo + 1)}>+1 Yards</button>
        <button className="toGoAddFive" onClick={() => setToGo(toGo + 5)}>+5 Yards</button>
        <button className="toGoReset" onClick={() => setToGo(10)}>Reset</button>
      </div>
      <div className="ballOnButtons">
        <button className="ballOnSubOne" onClick={() => setBallOn(ballOn - 1)}>Ball -1 Yard</button>
        <button className="ballOnSubFive" onClick={() => setBallOn(ballOn - 5)}>Ball -5 Yards</button>
        <button className="ballOnAddOne" onClick={() => setBallOn(ballOn + 1)}>Ball +1 Yard</button>
        <button className="ballOnAddFive" onClick={() => setBallOn(ballOn + 5)}>Ball +5 Yards</button>
        <button className="ballOnReset" onClick={() => setBallOn(50)}>Reset BallOn</button>
      </div>
      <div className="quarterButtons">
        <button className="quarterAdvance" onClick={() => setQuarter(quarter + 1)}>Next Quarter</button>
        <button className="quarterReset" onClick={() => setQuarter(1)}>Reset Quarter</button>
      </div>
    </div>

    
  );
};

export default BottomRow;
