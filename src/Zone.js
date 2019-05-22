import React, { Component } from 'react';

class Zone extends Component {
    render() {
        const { only_for, use } = this.props;
        if (only_for !== 'eu') {
            return (
                <React.Fragment >
                    {this.props.children}
                </React.Fragment>
            );
        } else {
            return <React.Fragment />
        }
    }
}

export default Zone;
