import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

export const Root = ({ children, route }) => (
    <Fragment>
        {children}
        {renderRoutes(route.routes)}
    </Fragment>
);

Root.propTypes = {
    children: PropTypes.element,
    route: PropTypes.object.isRequired
};

export default Root;