// Generated by https://pagedraw.io/pages/9526
import Navbar from './navbar';
import Sidebar from './sidebar';
import Content_pane from './content_pane';
import React from 'react';
import './container.css';

function render() {
    return <div className="container-container-3">
        <div className="container-0">
            <div className="container-navbar_instance-0">
                <Navbar /> 
            </div>
        </div>
        <div className="container-1">
            <div className="container-sidebar_instance-8">
                <Sidebar onChangeRoute={this.props.onChangeRoute} /> 
            </div>
            <div className="container-1-1">
                <div className="container-1-1-0">
                    <div className="container-rectangle_4">
                        <div className="container-1-1-0-0-0">
                            <div className="container-1-1-0-0-0-0">
                                <div className="container-1-1-0-0-0-0-0" /> 
                                <div className="container-content_pane_instance-5">
                                    <Content_pane posts={this.props.posts} /> 
                                </div>
                                <div className="container-1-1-0-0-0-0-2" /> 
                            </div>
                            <div className="container-1-1-0-0-0-1" /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}