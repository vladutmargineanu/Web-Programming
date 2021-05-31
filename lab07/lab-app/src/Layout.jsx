import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Counter from './Counter';

class Layout extends React.Component {
    render() {
        return (
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>

                <Header>
                    <h1 style={{ color: 'blue' }}>Header</h1>
                </Header>
                <Nav title='UPB' bodyText='ACS' />
                <Counter></Counter>
                <Footer>
                    <h1 style={{ color: 'blue' }}>Footer</h1>
                </Footer>
            </div>
        )
    }
}

export default Layout;
