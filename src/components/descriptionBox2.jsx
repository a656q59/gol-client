import React from 'react';

function descriptionBox2({title,text1,text2,text3,text4,text5}) {
    const style1={boxShadow: '0px 4px 25px rgba(141, 198, 211, 0.15)'}
    const style2 = {fontFamily:'Open Sans',fontStyle: 'normal',fontWeight:'600',fontSize: '16px',lineHeight: '22px'}
    const style3={fontFamily: 'Open Sans',fontStyle: 'normal',paddingTop:'2.5%',fontWeight: '400',fontSize: '16px',lineHeight: '22px',color:'#5A5A5A'}
    return (<>
        <div className="description-box-2 my-3 p-4" style={style1}>
            <div className='description-box-2-title mb-4' style={style2}>{title}</div>     
            <div className='description-box-2-bullet-points'>
                <ul >
                    <li style={style3}>{text1}</li>
                    <li style={style3} >{text2}</li>
                    <li style={style3}>{text3}</li>
                    <li style={style3}>{text4}</li>
                    <li style={style3}>{text5}</li>
                </ul>
                
            </div>         
        </div>
    </>
);
}

export default descriptionBox2;

