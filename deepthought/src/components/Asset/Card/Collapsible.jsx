import React, { useRef } from 'react'
import './Collapsible.css'
import { AiFillBulb } from 'react-icons/ai'
import { BsChatRightTextFill } from 'react-icons/bs'
import { RiQuestionnaireFill } from 'react-icons/ri'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'


function Collapsible() {

    let Inref = useRef()
    let arrowUp = useRef()
    let arrowDown = useRef()
    let handleFunc = () => {

        Inref.current.classList.toggle("active");
        var content = Inref.current.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            arrowUp.current.style.display = "block"
            arrowDown.current.style.display = "none"
        }
        else {
            content.style.maxHeight = "0px";
            arrowUp.current.style.display = "none"
            arrowDown.current.style.display = "block"
        }
    }
    return (
        <div >

            <button className="collapsible " onClick={handleFunc} ref={Inref}>
                <div style={{ display: "flex", alignItems: 'center' }}>
                    <span ref={arrowUp}><IoIosArrowDown fontWeight={700} fontSize={25} /></span>
                    <span ref={arrowDown} style={{ display: "none" }} ><IoIosArrowUp fontWeight={700} fontSize={25} /></span>
                    Thread A  </div>
            </button>
            <div className="content">
                <div className='parent_box1'>
                    <div className='sub_container'>
                        <p>Sub Thread 1</p>
                        <input type="text" placeholder='Enter Text Here' />
                    </div>
                    <div className='sub_container'>
                        <p>Sub Interpretation 1</p>
                        <input type="text" placeholder='Enter Text Here' />
                    </div>
                </div>
                <div className='second_child_div'>
                    <div className='icon_div'><AiFillBulb /> <BsChatRightTextFill /> <RiQuestionnaireFill /></div>
                    <div className='third_child_div'>
                        <select name="" id="">
                            <option value="Select Category">Select Category</option>
                            <option value="Sub-orgument">Sub-orgument</option>
                            <option value="Sub-explaination">Sub-explaination</option>
                            <option value="Remark">Remark</option>
                            <option value="Core-principle">Core-principle</option>
                        </select>
                        <select name="" id="">
                            <option value="">Select Process</option>
                            <option value="Question">Question</option>
                            <option value="Analogy">Analogy</option>
                            <option value="Insights">Insights</option>
                            <option value="Sarcasm">Sarcasm</option>
                            <option value="Counter Example">Counter Example</option>
                        </select>
                    </div>
                </div>
                <div className='btn_div'><button><span>+</span> Sub thread</button></div>
                <div className='last_child_div'  >
                    <div >Summay for Thread A</div>
                    <input type="text" placeholder='Enter Text Here' />
                </div>
            </div>
        </div>
    )
}

export default Collapsible