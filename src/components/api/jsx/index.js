import React from 'react'

const user = {
    firstName: 'shi',
    lastName: 'weiping'
};
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
export default class index extends React.Component {

    render(){
        return(
            <h1>Hello, {formatName(user)}!</h1>
        )
    }
}