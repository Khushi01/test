import React from 'react';
import { Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';


export const ContactDetailUtils = props => {
    const { type } = props;
    console.log(type)
    switch (type) {
        case "customField":
            return (
                <Tooltip title="Add">
                    <Fab size="small" color="primary">
                        <AddIcon />
                    </Fab>
                </Tooltip>
            )

        default:
            return null



    }


}
// export default ContactDetailUtils;
