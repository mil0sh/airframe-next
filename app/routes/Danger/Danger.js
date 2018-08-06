import React from 'react';
import { Link } from 'react-router-dom';
import {
    EmptyLayout
} from './../../components';

import {
    HeaderAuth
} from "../components/HeaderAuth";

import {
    FooterAuth
} from "../components/FooterAuth";

const Danger = () => (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth 
                title="An Error has Occurred"
                icon="close"
                iconClassName="text-danger"
            />
            { /* END Header */}
            { /* START Bottom Links */}
            <div className="text-center mb-5">
                <a href="/">
                    <i className="fa fa-angle-left mr-2"></i>Correct Errors
                </a>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default Danger;
