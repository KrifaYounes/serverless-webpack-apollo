import React from 'react';
import format from 'date-fns/format';
import {StyledTable,StyledTableContent,StyledTableContentTh,StyledTableContentTr,StyledTableContentTd} from '../Table/TableStyle'
import Section from '../Section/Section';
import {FormattedMessage} from 'react-intl';
import getIdLabelByCivility from '../../utils/utils';

function Passengers({ passengers }) {

    const titleLabel = <FormattedMessage id="passengers"/>;

    const content = <StyledTable>
        <StyledTableContent>
            <thead>
                <StyledTableContentTr>
                <StyledTableContentTh><FormattedMessage id="passengers.civility"/></StyledTableContentTh>
                <StyledTableContentTh><FormattedMessage id="passengers.lastname"/></StyledTableContentTh>
                <StyledTableContentTh><FormattedMessage id="passengers.firstname"/></StyledTableContentTh>
                <StyledTableContentTh><FormattedMessage id="passengers.birthdate"/></StyledTableContentTh>
                </StyledTableContentTr>
            </thead>
            <tbody>
                {passengers.map(item => (
                <StyledTableContentTr key={item.lastName+item.firstName}>
                <StyledTableContentTd><
                    FormattedMessage id={getIdLabelByCivility(item.civility)}/>
                </StyledTableContentTd>
                <StyledTableContentTd>{item.lastName}</StyledTableContentTd>
                <StyledTableContentTd>{item.firstName}</StyledTableContentTd>
                {item.dateOfBirth &&
                <StyledTableContentTd>
                {format(new Date(item.dateOfBirth),'DD/MM/YYYY')}
                </StyledTableContentTd>
                }
                </StyledTableContentTr>
                ))}
            </tbody>
        </StyledTableContent>
        </StyledTable>;
    return (
        <Section title={titleLabel} content={content} />
    );
}

export default Passengers;

