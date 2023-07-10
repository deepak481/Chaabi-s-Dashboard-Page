import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import WeeklyCard from '../components/WeeklyCard/WeeklyCard';
import DoughnutChart from '../components/DoughnutChart/DoughnutChart';
import { relative } from 'path';
import ProgressDashboard from '../components/verticalProgressDashboard/ProgressDashboard';
import { FADE_GREEN, FADE_RED, GREEN, RED } from '../utils/Constant';

const fourteenDaysData = [
  { title: '3 Jun', total: 100 },
  { title: '4 Jun', total: 120 },
  { title: '5 Jun', total: 120 },
  { title: '6 Jun', total: 230 },
  { title: '7 Jun', total: 250 },
  { title: '8 Jun', total: 180 },
  { title: '9 Jun', total: 200 },
  { title: '10 Jun', total: 100 },
  { title: '11 Jun', total: 230 },
  { title: '12 Jun', total: 250 },
  { title: '13 Jun', total: 380 },
  { title: '14 Jun', total: 400 }
];

const sevenDaysData = [
  { title: 'S', total: 30 },
  { title: 'M', total: 50 },
  { title: 'T', total: 40 },
  { title: 'W', total: 60 },
  { title: 'T', total: 40 },
  { title: 'F', total: 70 },
  { title: 'S', total: 40 },
  { title: 'M', total: 30 },
  { title: 'T', total: 50 },
  { title: 'W', total: 40 }
];

const doughnutData = [
  { label: 'passed', value: '1423 workers', dotColor: '#018E42' },
  { label: 'failed', value: '134 workers', dotColor: '#ED1C24' }
];

const cards = [
  {
    index: 0,
    cardHeader: 'In Training Workers',
    data: { amount: '3354', difference: '234', per: '20%' },
    color: { bright: GREEN, fade: FADE_GREEN }
  },
  {
    index: 1,
    cardHeader: 'Video Watch-Time (Hrs)',
    data: { amount: '2433', difference: '234', per: '20%' },
    color: { bright: RED, fade: FADE_RED }
  },
  {
    index: 2,
    cardHeader: '% Workers Passing Quiz',
    data: { amount: '95%', difference: '24%', per: '20%' },
    color: { bright: GREEN, fade: FADE_GREEN }
  },
  {
    index: 3,
    cardHeader: 'Avg. Days Taken',
    data: { amount: '6', difference: '3', per: '20%' },
    color: { bright: GREEN, fade: FADE_GREEN }
  }
];

function Dashboard() {
  return (
    <div className="d-flex">
      <div style={{ minWidth: '20vw', position: relative }}>
        <Sidebar />
      </div>
      <div className="pb-3 d-flex flex-wrap" style={{ position: 'absolute', marginLeft: '307px' }}>
        <Header />

        {/* Weekly cards starts here */}

        <div className="d-flex mx-3 justify-content-between">
          {cards.map((card, index) => (
            <WeeklyCard key={index} card={card} />
          ))}
        </div>

        <ProgressDashboard
          id="progress-dashboard-active-workers"
          data={fourteenDaysData}
          titleOne="Last 14 Days Active Workers In Training"
          titleTwo="Last 14 Days"
          widgetWidth={'58vw'}
          widgetHeight={400}
          max={400}
        />
        <ProgressDashboard
          id="progress-dashboard-competitions"
          data={sevenDaysData}
          titleOne="Daily Training Competitions"
          titleTwo="Last 7 Days"
          widgetWidth={'33vw'}
          widgetHeight={300}
          max={160}
        />
        <DoughnutChart
          widgetWidth={'24.5vw'}
          widgetHeight={'300px'}
          widgetHeading="Quiz Passing %"
          data={doughnutData}
        />
      </div>
    </div>
  );
}

export default Dashboard;
