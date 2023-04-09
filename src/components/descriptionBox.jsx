import React from 'react';

function descriptionBox({title,text}) {
    const style1={boxShadow: '0px 4px 25px rgba(141, 198, 211, 0.15)'}
    const style2 = {fontFamily:'Open Sans',fontStyle: 'normal',fontWeight:'600',fontSize: '16px',lineHeight: '22px'}
    const style3={fontFamily: 'Open Sans',fontStyle: 'normal',fontWeight: '400',fontSize: '16px',lineHeight: '26px'}
    return (<>
            <div className="description-box my-3 p-4" style={style1}>
                <div className='description-box-title mb-4' style={style2}>{title}</div>     
                <hr />       
                <div className='description-box-text' style={style3}>{text}</div>         
            </div>
        </>
    );
}

export default descriptionBox;

