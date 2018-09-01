import React from 'react';
import {FormattedMessage} from 'react-intl';
import Section from '../../Section/Section';
import {StyledTable,
    StyledTableContent,
    StyledTableContentTh,
    StyledTableContentTr,
    StyledTableContentTd,
    StyledTableDiv} from '../../Table/TableStyle';
import {StyledTransportationInfos} from './TransportationStyle';
import format from 'date-fns/format';


function Transportation({ bookingComponentGroups }) {

    /*const bookingTransportationItems = bookingComponentGroups
        .filter(bookingComponentGroup => bookingComponentGroup.status === 'CONFIRMED' || bookingComponentGroup.status === 'PENDIN')
        .map(bookingComponentGroup => ( bookingComponentGroup.bookingComponents
            .map(bookingComponent => (bookingComponent.bookingTransportations
                .map(bookingTransportation => (bookingTransportation.bookingTransportationItems))))));


    console.log(bookingTransportationItems);*/
    //TODO CHECK STATUS
    const content = <StyledTable>
        {bookingComponentGroups
            .filter(bookingComponentGroup => bookingComponentGroup.status === 'CONFIRMED' || bookingComponentGroup.status === 'PENDIN')
            .map(bookingComponentGroup => (
                bookingComponentGroup.bookingComponents.map( bookingComponent => (
                    bookingComponent.bookingTransportations.map (bookingTransportation => (
                        bookingTransportation.bookingTransportationItems.map ( bookingTransportationItem => (
                            <React.Fragment key={bookingTransportationItem.flightNumber}>
                                <StyledTableDiv>
                                    {bookingTransportationItem.departurePlace.name} -> {bookingTransportationItem.arrivalPlace.name}
                                </StyledTableDiv>
                                <StyledTableContent>
                                    <thead>
                                    <StyledTableContentTr>
                                        <StyledTableContentTh><FormattedMessage id="transportation.departure.date"/></StyledTableContentTh>
                                        <StyledTableContentTh><FormattedMessage id="transportation.arrival.date"/></StyledTableContentTh>
                                        <StyledTableContentTh><FormattedMessage id="transportation.flight.number"/></StyledTableContentTh>
                                        <StyledTableContentTh><FormattedMessage id="transportation.flight.carrier"/></StyledTableContentTh>
                                        <StyledTableContentTh><FormattedMessage id="transportation.flight.class"/></StyledTableContentTh>
                                        <StyledTableContentTh><FormattedMessage id="passengers"/></StyledTableContentTh>
                                        <StyledTableContentTh><FormattedMessage id="transportation.flight.luggage"/></StyledTableContentTh>
                                    </StyledTableContentTr>
                                    </thead>
                                    <tbody>
                                        <StyledTableContentTr key={bookingTransportationItem.id}>
                                        <StyledTableContentTd>{format(new Date(bookingTransportationItem.departureDate),'DD/MM/YYYY à hh:mm')}</StyledTableContentTd>
                                        <StyledTableContentTd>{format(new Date(bookingTransportationItem.arrivalDate),'DD/MM/YYYY à hh:mm')}</StyledTableContentTd>
                                        <StyledTableContentTd>{bookingTransportationItem.flightNumber}</StyledTableContentTd>
                                        <StyledTableContentTd>{bookingTransportationItem.flightCarrier.name}</StyledTableContentTd>
                                        <StyledTableContentTd>{bookingTransportationItem.cabin}</StyledTableContentTd>
                                        <StyledTableContentTd>{bookingTransportationItem.passengers.length}</StyledTableContentTd>
                                        <StyledTableContentTd>0</StyledTableContentTd>
                                        </StyledTableContentTr>
                                    </tbody>
                                </StyledTableContent>
                            </React.Fragment>
                    ))))))))}
        <StyledTransportationInfos>
            <FormattedMessage id="transportation.flight.infos"/>
        </StyledTransportationInfos>
    </StyledTable>;

    const titleLabel = <FormattedMessage id="transportation.flight"/>;

    return (
        <Section title={titleLabel} content={content} />
    );

}

export default Transportation;
