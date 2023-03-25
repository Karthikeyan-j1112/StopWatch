import React, { useRef, useState } from 'react'
import styles from './Timer.module.css'
function Timer(props) {

    const { second , setSecond , minute, setMinute , hour ,setHour , setLaps } = props

    const interval = useRef()    
    const [isRunning,setIsRunning] = useState(false)
    
    const start = () =>{
        interval.current = setInterval(()=>{
            setSecond(prev=>prev+1)
        } , 1000 ) 
        setIsRunning(true)        
    }
    const stop = () =>{
        clearInterval(interval.current)
        setIsRunning(false)        
    }

    const reset = () =>{
        setSecond(0)
        setMinute(0)
        setHour(0)        
        setLaps([])
        stop()
    }

    const addLap =()=>{
        if(!(second===0 && minute===0 && hour===0))
            setLaps(prev =>{
                return ([...prev,{
                lapCount : prev.length+1,
                lapTime  : `${String(hour).padStart(2,'0')} : ${String(minute).padStart(2,'0')} : ${String(second).padStart(2,'0')}`
            }])});            
    }

    return (
        <div className={styles.all}>
            <div className={styles.Timer}>
                {String(hour).padStart(2,'0')} : {String(minute).padStart(2,'0')} : {String(second).padStart(2,'0')}
            </div>                
            <div className={styles.btnContainer}>
                <div className={styles.startStop} >
                    {   
                        isRunning ? 
                        <button 
                            className={styles.buttons} 
                            onClick={stop} 
                        > Stop </button> :
                        <button 
                            className={styles.buttons} 
                            onClick={start}
                        > Start </button>
                    }
                </div>
                <div className={styles.resetLap}>
                    <button 
                        className={styles.buttons}                             
                        onClick={reset} 
                    > Reset </button>
                    <button 
                        className={styles.buttons}                            
                        onClick={addLap} 
                    > Lap </button>
                </div>
            </div>
        </div>
    )
}

export default Timer