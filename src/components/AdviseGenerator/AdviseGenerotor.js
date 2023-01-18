import styles from './AdviseGenerator.module.css';
import AdviseApi from '../../api/AdviseApi';
import React, { useEffect, useState } from 'react'
import dice from '../../images/dice.png'
import line from '../../images/line.png'


function AdviseGenerator(){
    
    const [adviceData, setAdviceData] = useState({
        Setid:'',
        Setadvice:'',
        SetAdvisorClr:'',
        SetBgClr:''
    });
    

    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var AdviserColor = "rgb(" + x + "," + y + "," + z + ")";
    var BgColor = "rgb(" + x+2 + "," + y+1 + "," + z + ")";

    
    async function ButtonClick(){
        const ApiData = await AdviseApi();
        const id = ApiData.data.slip.id
        const advice = ApiData.data.slip.advice
        setAdviceData({
            ...adviceData, 
            Setid:id, 
            Setadvice:advice,
            SetAdvisorClr:AdviserColor,
            SetBgClr: BgColor
        });
        document.body.style.background = adviceData.SetBgClr;
    } 

    useEffect(()=>{
        ButtonClick();
    },[])
    

    return(
        <div>
            <div >
                <div style={{backgroundColor:adviceData.SetAdvisorClr}} className={styles.adviser}>
                    <p className={styles.adviseId}>ADVICE # {adviceData.Setid}</p>
                    <p className={styles.advise}> "{adviceData.Setadvice}" </p>
                    <div className={styles.bottom}>
                        <div className={styles.line}></div>
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



