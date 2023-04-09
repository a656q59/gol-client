import React,{useState} from 'react';

function CustomButton(props) {
    const [count,setCount] = useState(0);

    const handleDecrement=(e)=>{
         e.preventDefault();
         setCount(count-1);
    }
    const handleIncrement=(e)=>{
        e.preventDefault();
        setCount(count+1);
    } 

    return (
        <div className='container d-flex mt-2 px-1' style={{border:'1px solid black',borderRadius:'4px', width:'100%'}}>
             <div className="btn btn-outline-dark me-1"style={{backgroundColor:'white', color:'#3A3A3A',marginRight:'3%' }} onClick={(e)=>handleDecrement(e)} disabled={count<=0?true:false}>-</div>
             <div className='value-display px-2 d-flex align-items-center'>{count}</div> 
             <div className="btn btn-outline-dark " style={{backgroundColor:'white', color:'#3A3A3A',marginLeft:'5%'}}  onClick={(e)=>handleIncrement(e)}>+</div>
        </div>
    );
}

export default CustomButton;