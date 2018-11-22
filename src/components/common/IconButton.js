import React, { PureComponent } from 'react';
import { IconButton as MaterialIconButton } from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/';

const styles = {
    Button: {

    }
};

class IconButton extends PureComponent {
    render() {
        return <MaterialIconButton></MaterialIconButton>;
    }
}

export default withStyles(styles)(IconButton);