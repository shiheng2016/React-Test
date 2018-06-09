import React, {Component} from 'react'

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [1, 2.3, 4],
            activeIndex: -1
        }
    }

    active(index) {
        this.setState({activeIndex: index});
    }

    render() {
        const {list, activeIndex} = this.state;
        const lis = list.map(
            (item, index) => {
                const cls = index === activeIndex ? 'active' : '';
                return (
                    <li
                        key={index}
                        className={cls}
                        onClick={() => this.active(index)}></li>
                )
            });
        return (
            <div>
                <ul>{lis}</ul>
            </div>
        )
    }
}


