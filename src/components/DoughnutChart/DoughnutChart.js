import React from 'react';
import { BOX_SHADOW } from '../../utils/Constant';

function DoughnutChart({ widgetWidth, widgetHeight, widgetHeading, data }) {
  return (
    <div
      className="widget mt-2 ms-2 p-3 justify-content-center align-items-center"
      style={{
        width: widgetWidth,
        height: widgetHeight,
        boxShadow: BOX_SHADOW
      }}>
      <h5>{widgetHeading}</h5>
      <div className="d-flex mt-4">
        <div className="donut" />
        <div className="ms-4 mt-4">
          {data.map((_, index) => (
            <div>
              <div className="d-flex   justify-content-center">
                <div
                  className="ms-1 mt-2 dot"
                  style={{
                    backgroundColor: data[index].dotColor
                  }}
                />
                <div className="ms-1" style={{ fontSize: '13px' }}>
                  <div>
                    <b>{data[index].label}</b>
                  </div>
                  <div>{data[index].value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
