import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title} </h2>
                <p>
                    {this.props.bodyText}
                </p>
            </div>
        );
    }
}

export default Nav;