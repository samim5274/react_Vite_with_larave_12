import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

export default function HelloReact() {
    return (
        <div>
            <h3>Welcome to React JS with Laravel 12</h3>
            <table>
                <thead>
                    <td>No</td>
                    <td>Name</td>
                    <td>Phone</td>
                    <td>Date of Birth</td>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Shamim Hossain</td>
                        <td>+8801762164746</td>
                        <td>31-12-2001</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Robiul Hossain</td>
                        <td>+8801762168451</td>
                        <td>31-12-1995</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>Fakir Hossain</td>
                        <td>+8801762166549</td>
                        <td>31-12-1985</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const container = document.getElementById('hello-react');
const root = ReactDOM.createRoot(container);
root.render(<HelloReact />)