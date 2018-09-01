import React from 'react';
import Section from '../Section/Section';
import {StyledBooking, StyledBlockBooking, StyledBlockBookingRight}  from './BookingStyle';
import {FormattedMessage} from 'react-intl';
import format from 'date-fns/format';

function Booking({ reference, bookingDay }) {
    const titleLabel = <FormattedMessage id="booking"/>;

    const content =
        <StyledBooking>
            <StyledBlockBooking>
                <FormattedMessage id="booking.reference"/>:
                <StyledBlockBookingRight>
                    {reference}
                </StyledBlockBookingRight>
            </StyledBlockBooking>

            <StyledBlockBooking>
                <FormattedMessage id="booking.day"/>:
                <StyledBlockBookingRight>
                    {format(new Date(bookingDay),'DD/MM/YYYY')}
                </StyledBlockBookingRight>
            </StyledBlockBooking>
        </StyledBooking>;

    return (
        <Section title={titleLabel} content={content} />
    );
}

export default Booking;

