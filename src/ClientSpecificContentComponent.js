import React, { Component } from 'react';

class ClientSpecificContentComponent extends Component {
    constructor() {
        super();
        this.state = {
            current_account_shortcode: 'CR',
        }
    }
    render() {
        const { accounts, children } = this.props;
        const items = [];
        if (accounts.startsWith('array:')) {
            Object.assign(items, accounts.replace('array:', '').split(',').filter(item => item));
        }
        console.log(items);
        if (items.some(acc => acc.toUpperCase() === this.state.current_account_shortcode.toUpperCase())) {
            return (
                <React.Fragment>
                    {children}
                </React.Fragment>
            );
        } else {
            return <React.Fragment>There is something here that we cannot show you.</React.Fragment>
        }
    }
}

export default ClientSpecificContentComponent;
