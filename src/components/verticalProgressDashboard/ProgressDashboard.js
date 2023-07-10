import React from 'react';
import VerticalProgressBar from '../VerticalProgressBar/VerticalProgressBar';
import { BOX_SHADOW } from '../../utils/Constant';

function ProgressDashboard({ data, titleOne, titleTwo, widgetWidth, widgetHeight, max }) {
  const increment = max / 4;

  const yAxisTitles = [4, 3, 2, 1, 0].map((item) => item * increment);

  return (
    <div
      className="mt-2 ms-3 widget progress-dashboard"
      style={{
        width: widgetWidth,
        height: `${widgetHeight}px`,
        boxShadow: BOX_SHADOW
      }}>
      <div className="d-flex justify-content-between">
        <div>
          <h5>{titleOne}</h5>
        </div>
        <div>
          <h5>{titleTwo}</h5>
        </div>
      </div>
      <div className="data_map mx-2 d-flex" style={{}}>
        <div
          className="progress_dashboard_yAxisBar mx-2 d-flex flex-column justify-content-between"
          style={{
            height: `${widgetHeight - 140}px`
          }}>
          {yAxisTitles.map((item, index) => (
            <div key={`${item}_${index}`}>{item}</div>
          ))}
        </div>
        <div
          className="d-flex ms-2 justify-content-between"
          style={{ marginTop: '40px', width: '-webkit-fill-available' }}>
          {data.map((item, index) => (
            <div key={index} style={{ width: '35px' }}>
              <VerticalProgressBar
                {...{
                  borderRadius: '10px',
                  background:
                    'linear-gradient(356.64deg, rgba(13, 98, 255, 0.8) 48.49%, rgba(27, 89, 248, 0) 282.14%)',
                  barBorderRadius: '10px',
                  progressBarWidth: '20px',
                  progressBarHeight: widgetHeight - 140,
                  barProgress: (item.total / max) * 100
                }}
              />
              <p className="mt-3" style={{ fontSize: '10px' }}>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgressDashboard;
