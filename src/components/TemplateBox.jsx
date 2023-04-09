import React from 'react';
import ExpanderIcon from '../assets/Vector (8).png';

function TemplateBox({title,text=''}) {
    const style1={fontFamily: 'Inter',fontStyle:'normal',fontWeight:'600',fontSize:'16px',lineHeight: '19px',color: '#3A3A3A'}
    const style2={fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '400',fontSize: '16px',lineHeight: '22px',color:'#5A5A5A'}
    return (
        <div className='template-box border border-dark-subtle px-3 py-3 mt-3'>
            <div className="template-box-header" style={style1}>{title}<img src={ExpanderIcon} alt='expander'style={{marginLeft:'5cm',height:'11%', width:'10px'  }}/></div>
            <div className="template-box-text" style={style2}>{text}</div>
        </div>
    );
}

export default TemplateBox;


