import React,{useState} from 'react';
import './TestComponent.css';

function TestComponent(props) {
    const [click,setClick] = useState(false);
    const[click2,setClick2] = useState(false);
    const handleClick=()=>{
        setClick(!click);
    }
    const handleClick2=()=>{
        setClick2(!click2);
    }

    return (
        <div className='container-test-component'>
            <h1>chk <div className="btn" onClick={handleClick}>{click?'-':'+'}</div></h1>
            < h4 className={click?"d-block":'d-none'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum. Maiores hic earum voluptates corporis itaque deleniti facilis atque excepturi fuga, voluptas vel quos, odit architecto? Omnis quibusdam consequuntur nobis?</h4>

            <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"  onClick={handleClick2}>{click2?'Collapse':'Toggle first element'}</a>
            <div class="collapse multi-collapse" id="multiCollapseExample1">
                <div class="card card-body">
                    Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>

        </div>
    );
}

export default TestComponent;

// aria-expanded="false" aria-controls="multiCollapseExample1"