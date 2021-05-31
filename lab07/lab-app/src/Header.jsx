import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header role="banner">
                {this.props.children}
            </header>
        );
    }
}

export default Header;