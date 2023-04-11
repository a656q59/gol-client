import React,{useState} from 'react';

import ExpanderIcon from '../assets/Vector (8).png';
import CollapseIcon from '../assets/Vector 4 (Stroke).png';

function TemplateBox({id, title,text=''}) 
{
    const id1='multiCollapseExample'+id;
    const id2 = '#'+id1;
    const [click,setClick] = useState(false);
    const handleClick=()=>{
        setClick(!click);
    }
    const style1={fontFamily: 'Inter',fontStyle:'normal',fontWeight:'600',fontSize:'16px',lineHeight: '19px',color: '#3A3A3A'}
    const style2={fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '400',fontSize: '16px',lineHeight: '22px',color:'#5A5A5A'}
    return (
        <div className='template-box border border-dark-subtle px-3 py-3 mt-3 d-flex flex-row justify-content-between '>
            <div  className="template-box-header" style={style1}>{title}  <div className="template-box-text collapse multi-collapse mt-3" id={id1} style={style2}>{text}</div> </div> 
           
            <img className="mt-1 collapse-icon"  data-bs-toggle="collapse" onClick={handleClick} data-bs-target={id2 }src={!click?ExpanderIcon:CollapseIcon} alt='expander'style={{marginRight:'2%',height:'40%', width:'16px'  }}/>
            
        </div>
    );
}

export default TemplateBox;




