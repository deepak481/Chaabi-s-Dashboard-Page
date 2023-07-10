import React from 'react';
import { GREY } from '../../utils/Constant';

function VerticalProgressBar({
  background,
  barBorderRadius,
  progressBarWidth,
  progressBarHeight,
  barProgress
}) {
  return (
    <div
      className="d-flex align-items-end progress_bar_container"
      style={{
        width: progressBarWidth,
        height: `${progressBarHeight}px`,
        borderRadius: barBorderRadius,
        backgroundColor: GREY
      }}>
      <div
        className="progress_bar_filler"
        style={{
          width: progressBarWidth,
          height: (parseInt(barProgress) / 100) * progressBarHeight,
          background: background,
          borderRadius: barBorderRadius
        }}></div>
    </div>
  );
}

export default VerticalProgressBar;
