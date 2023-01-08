import styles from './AdviseGenerator.module.css';
import AdviseApi from '../../api/AdviseApi';
import React, { useEffect, useState } from 'react'
import dice from '../../images/dice.png'
import line from '../../images/line.png'


function AdviseGenerator(){
    
    function ColorPicker(){
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var AdviserColor = "rgb(" + x + "," + y + "," + z + ")";
        var BgColor = "rgb(" + x+1 + "," + y+1 + "," + z + ")";

        document.getElementById('adviser').style.backgroundColor = AdviserColor;
        document.body.style.background = BgColor;
    }


    const [id, setId] = useState('')
    const [advice, setAdvice] = useState('')

    async function ButtonClick(){
        const ApiData = await AdviseApi();
        const id = ApiData.data.slip.id
        const advice = ApiData.data.slip.advice
        setId(id);
        setAdvice(advice);
        ColorPicker();
    }
    

    useEffect(()=>{
        ButtonClick();
    },[])

    return(
        <div>
            <div >
                <div id='adviser' className={styles.adviser}>
                    <p className={styles.adviseId}>ADVICE # {id}</p>
                    <p className={styles.advise}> "{advice}" </p>
                    <div className={styles.bottom}>
                        <div className={styles.line}></div>
                        {/* <div style={{display:"inline-block"}}>*</div> */}
                        <div style={{display:"inline-block"}}> <img src={line} width="20" height="16"  alt="Italian Trulli" /> </div>
                        <div className={styles.line}></div>
                    </div>
                    <button onClick={ButtonClick} className={styles.link}><img src={dice} width="30" height="30"  alt="Italian Trulli" /></button>   
                </div>
            </div>
        </div>
    )
}

export default AdviseGenerator;