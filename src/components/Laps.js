import React, { memo, useEffect } from 'react'
import styles from './Laps.module.css'
import $ from 'jquery'

function Laps({laps,setLaps}) {        
    useEffect(() => {
        $("#list").scrollTop($("#list")[0].scrollHeight);
        if(laps!==[]){            
            localStorage.setItem('laps',JSON.stringify(laps))
        }
        else{            
            localStorage.removeItem('laps')
        }
    }, [laps])    
        
    console.log(laps);
    return (
        <div className={styles.container}>
            <span className={styles.title} >LAPS</span>
            <div id='list' className={styles.list}>
                {
                    laps.map(lap=>{
                        return  <div key={lap.lapCount}>  {lap.lapTime}  </div>
                    })
                }
            </div>
        </div>
    )
}

export default memo(Laps)