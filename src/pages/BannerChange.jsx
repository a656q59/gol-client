import React from 'react';
import'./BannerChange.css';

function BannerChange(props) {
    return (
        <div className='container'>
            <h1>Banner Change page</h1>
            <form>
                <div className="mb-3 w-50">
                <label htmlFor="data" className="form-label">Paste Url</label>
                <input type="name" className="form-control" id="data"/>
                </div>
        
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default BannerChange;