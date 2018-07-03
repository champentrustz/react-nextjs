import React from 'react'


const ModalUpdate = (props) => {


    if(props.update == 'updating') {

        return (
            <div className="modal fade show" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display: 'block'}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <i className="fa fa-circle-o-notch fa-spin" style={{'fontSize':'30px'}}/><span className="h6">  กำลังอัพเดทข้อมูล</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return false;
    }
}

export default ModalUpdate
