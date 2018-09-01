import React from 'react';
import PropTypes from 'prop-types';
import {IntlProvider} from 'react-intl';
import Convocation from './containers/CustomerDoc/Convocation';
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_fr from 'react-intl/locale-data/fr';
import messages_fr from "./intl/common/fr.json";
import messages_en from "./intl/common/en.json";
import messages_fr_AF from "./intl/brand/AF/fr.json";
import messages_en_AF from "./intl/brand/AF/fr.json";
import messages_fr_VP from "./intl/brand/VP/fr.json";
import messages_en_VP from "./intl/brand/VP/fr.json";

addLocaleData([...locale_en, ...locale_fr]);

const messages = {
    'fr': messages_fr,
    'en': messages_en,
    'fr_AF': messages_fr_AF,
    'en_AF': messages_en_AF,
    'fr_VP': messages_fr_VP,
    'en_VP': messages_en_VP
};

const booking = {
    reference: '234324',
    day: '2019/01/01',
    brand : {
        code: 'PS'
    },
    passengers: [{
        lastName: 'Krifa',
        dateOfBirth: '01/01/2019',
        firstName: 'Younes'
    },{
        lastName: 'Krifa1',
        dateOfBirth: '01/01/2019',
        firstName: 'Younes'
    },{
        lastName: 'Krifa2',
        dateOfBirth: '01/01/2019',
        firstName: 'Younes'
    },{
        lastName: 'Krifa3',
        dateOfBirth: '01/01/2019',
        firstName: 'Younes'
    },{
        lastName: 'Krifa4',
        dateOfBirth: '01/01/2019',
        firstName: 'Younes'
    },{
        lastName: 'Krifa5',
        dateOfBirth: '01/01/2019',
        firstName: 'Younes'
    },{
        lastName: 'Krifa6',
        dateOfBirth: '01/01/2019',
        firstName: 'Younes'
    }],
    customer :{
        civility: 'MR',
        firstName: 'KRIFA',
        lastName: 'YOUNES',
        address1: 'ADDRESS 1',
        address2: 'ADDRES 2',
        city: 'AUBAGNE',
        postCode: '13400'
    },
    bookingComponentGroups: [{
        day: '2019/01/01',
        status: 'CONFIRMED',
        bookingComponents: [{
            day: '2019/01/01',
            componentType: 'TRANSPORTATION',
            reference: 'RERE',
            bookingTransportations: [{
                direction: 'OUTBOUN',
                bookingTransportationItems: [{
                    flightNumber: 'ZEZEZ',
                    departureDate: '2019/01/01',
                    arrivalDate: '2019/01/01',
                    arrivalPlace: {
                        name: 'PARIS'
                    },
                    departurePlace: {
                        name: 'MOSCOU'
                    },
                    cabin: 'ECONOMY',
                    flightCarrier: {

                        name: 'LKLKE'
                    },
                    passengers: [{
                        status: 'CONFIRMED',
                        passenger: {
                            id: 'LKRLE'
                        }
                    }]
                }]
            }]
        }]
    }]
};

const messageMerged = Object.assign( messages["fr"], messages["fr_AF"]);

const Booking = ({ id }) => (
    <IntlProvider locale="en" messages={messageMerged}>
        <Convocation booking={booking} />
    </IntlProvider>
);

/*const Booking = ({ id }) => (
    <Query query={QUERY} variables={{ id }}>
        {({ data, error, loading }) => {
            if (error) return '💩 Oops!';
            if (loading) return 'Patience young grasshopper...';
            return (
                <Convocation booking={data.booking} />
            );
        }}
    </Query>
);*/


Booking.propTypes = { episode: PropTypes.string };
Booking.defaultProps = { id: 20301 };

const App = () => <Booking id='51353' />;

//53907

export default App;
