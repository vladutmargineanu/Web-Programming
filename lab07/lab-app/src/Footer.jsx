import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer role="label">
                {this.props.children}
            </footer>
        );
    }
};

export default Footer;