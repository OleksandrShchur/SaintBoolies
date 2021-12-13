import React from 'react'

const FormExit = ({show}) => {
    show=true;

    if(!show){
        return<></>;
    }
    return (
        <div class="frmxt">
            <form>
                <label>
                    Do you really want to exit?
                </label><br/>
                <input type="submit" value="Yes" class="extbtn" />
                <input type="submit" value="No" class="extbtn" />
            </form>
        </div>
    )
}

export default FormExit
