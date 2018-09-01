import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Address from '../../components/Address/Address';
import Passengers from '../../components/Passengers/Passengers';
import Booking from '../../components/Booking/Booking';
import Transportation from '../../components/Prestation/Transportation/Transportation';
import Stay from '../../components/Prestation/Stay/Stay';
import Extra from '../../components/Prestation/Extra/Extra';
import {ThemeProvider} from 'styled-components';
import getThemeByBrand from '../../utils/theme';

import '../../vendor/normalizeStyle';
import '../../globalStyle';

const StyledDiv = styled.div`
width: 1180px;
overflow: hidden;
page-break-after: always;
page-break-inside: avoid;
clear:both;
font-family: ${props => props.theme.fontFamily ? props.theme.fontFamily : 'Arial'}
`;

function Convocation({ booking }) {

    return (
        <div>
            <ThemeProvider theme={themeAF}>
                <StyledDiv>
                    <Header number={booking.reference} brandCode='AF' />
                    <Address customer={booking.customer} />
                    <Booking reference={booking.reference} bookingDay={booking.day} />
                    <Passengers passengers={booking.passengers} />
                    <Transportation bookingComponentGroups={booking.bookingComponentGroups} />
                    <Stay bookingComponentGroups={booking.bookingComponentGroups} />
                    <Extra bookingComponentGroups={booking.bookingComponentGroups} />
                </StyledDiv>
            </ThemeProvider>
        </div>
    );
}

const themeAF = getThemeByBrand('AF');


/*const themePS = getThemeByBrand('PS');
const themeSE = getThemeByBrand('SE');
const themeSS = getThemeByBrand('SS');
*/



export default Convocation;
