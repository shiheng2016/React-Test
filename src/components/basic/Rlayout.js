import React, { Component } from 'react';
import { Layout } from 'element-react';

export default class Rlayout extends React.Component{
    render(){
        return(
            <Layout.Row gutter="20">
                <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
                <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
            </Layout.Row>
        )
    }
}