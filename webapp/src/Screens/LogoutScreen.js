import React from 'react';

class LogoutScreen extends React.Component {

    constructor(props) {
        window.localStorage.removeItem('u_code')
        window.location.href = "/"
    }

    render() {
        return (
            <div></div>
        )
    
    }
}
export default LogoutScreen;
