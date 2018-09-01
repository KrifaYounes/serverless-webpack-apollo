import React from 'react';
import {FormattedMessage} from 'react-intl';
import Section from '../../Section/Section';

function Stay({ bookingComponentGroups }) {
    const titleLabel = <FormattedMessage id="hotel"/>;

    return (
        <Section title={titleLabel} />
    );

}

export default Stay;
