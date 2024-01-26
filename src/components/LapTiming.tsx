import { time } from 'console';
import React from 'react'
import "./LapTiming.css";


export default function LapTiming ({
    index,
    lapTime,
}: {
    index:number;
    lapTime:number;
}) {
    const timer = (lapTime: number) => {
        const hour = Math.floor(lapTime / 360000);
        const minute = Math.floor((lapTime % 360000) / 6000);
        const second = Math.floor((lapTime % 6000) / 100);
        const milisecond = lapTime % 100 ;
        
        return (
            <div className='timer-container'>
                <div className='timer-digits'>{hour} :&nbsp;</div>
                <div className='timer-digits'>{minute} : &nbsp;</div>
                <div className='timer-digits'>{second} :&nbsp;</div>
                <div className='timer-digits'>{milisecond} </div>
            </div>
        );

    }

  return (
    <section className='timer-list'>
        <div>{index+1}. Lap</div>
        <div>{timer(lapTime)}</div>
    </section>
  )
}