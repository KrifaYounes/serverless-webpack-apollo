import React from 'react';
import {StyledBlock,StyledBlockName,StyledBlockAddess} from './AddressStyle'
import getIdLabelByCivility from '../../utils/utils';
import {FormattedMessage} from 'react-intl';

function Block({civility,firstName,lastName,address1,address2,city,postCode}) {
    return (
        <StyledBlock>
            <StyledBlockName>
                <FormattedMessage id={getIdLabelByCivility(civility)} />&nbsp;
                {firstName} {lastName}
                </StyledBlockName>
            <StyledBlockAddess>
                {address1} {address2} <br/>
                {postCode} {city}
            </StyledBlockAddess>
        </StyledBlock>
    );
}

export default Block;

