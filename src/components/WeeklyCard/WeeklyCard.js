import React from 'react';
import { TrendUp } from '../../assets/images/trend-up';
import { Chart } from '../../assets/images/Chart';
import { BOX_SHADOW, FADE_RED, RED } from '../../utils/Constant';
import ChartRed from '../../assets/images/Chart.png';
function WeeklyCard({ card }) {
  return (
    <div
      className="weeklyCard mx-2 widget"
      style={{
        float: 'left',
        width: '23%',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 0px 20px 16px',
        boxShadow: BOX_SHADOW,
        margin: '10px 0px 0 0px',
        minWidth: '280px'
      }}>
      <h6>{card.cardHeader}</h6>
      <div className="weeklyCard_content d-flex align-items-end">
        <div className="weeklyCard_content_values">
          <h3 style={{ fontWeight: '700', fontWeight: '700' }}>{card.data.amount}</h3>
          <div className="d-flex">
            <div
              className="d-flex align-items-center p-1 "
              style={{
                backgroundColor: card.color.fade,
                borderRadius: '10%',
                marginRight: '10px'
              }}>
              <TrendUp color={card.color.bright} />
              <span style={{ fontSize: '12px', marginLeft: '5px' }}>{card.data.per}</span>
            </div>
            <div>{card.data.difference}</div>
          </div>
        </div>
        <div className="weeklyCard_content_chart ms-3">
          {card.index === 1 ? <img src={ChartRed} /> : <Chart color={card.color} />}
        </div>
      </div>
    </div>
  );
}

export default WeeklyCard;
