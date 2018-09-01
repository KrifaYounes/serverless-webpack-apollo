import React from 'react';

import Block from './Block';

import StyledAddress from './AddressStyle';

function Address({ customer }) {
  return (
    <StyledAddress>
      <Block recipient {...customer} />
    </StyledAddress>
  );
}

export default Address;

