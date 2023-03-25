import React, { useEffect, useState } from 'react'
import Laps from './Laps'
import styles from './StopWatch.module.css'
import Timer from './Timer'

function StopWatch() {
    const [second,setSecond] = useState(localStorage.getItem('second')?parseInt(localStorage.getItem('second')):0)
    const [minute, setMinute] = useState(localStorage.getItem('minute')?parseInt(localStorage.getItem('minute')):0)
    const [hour, setHour] = useState(localStorage.getItem('hour')?parseInt(localStorage.getItem('hour')):0)
    const [laps, setLaps] = useState(
        localStorage.getItem('laps')?
        JSON.parse(localStorage.getItem('laps')):
        [])
    useEffect(()=>{
        if(second>59){
            setMinute(prev=>prev+1)
            setSecond(0)
        }
        if(second!==0){
            localStorage.setItem('second',second)
        }
        else{
            localStorage.removeItem('second')
        }        
    },[second])
    
    useEffect(()=>{
        if(minute>59){
            setHour(prev=>prev+1)
            setMinute(0)
        }
        if(minute!==0){
            localStorage.setItem('minute',minute)
        }
        else{
            localStorage.removeItem('minute')
        }
    },[minute])

    useEffect(()=>{
        if(hour!==0){
            localStorage.setItem('hour',hour)
        }
        else{
            localStorage.removeItem('hour')
        }
    },[hour])

    return (
        <div className={styles.container}>
            <Laps laps={laps} setLaps={setLaps} />
            <Timer 
                second={second} setSecond={setSecond}
                minute={minute} setMinute={setMinute}
                hour={hour} setHour={setHour}
                setLaps={setLaps}
            />
        </div>
    )
}

export default StopWatch