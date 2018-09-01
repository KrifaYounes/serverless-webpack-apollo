import styled from 'styled-components';

const StyledAddress = styled.div.attrs({
    className: 'clearfix',
})`
padding: 40px 40px;
background-color: #f3f3f3;
margin: 10px;
border-radius: 8px;
`;

export const StyledBlock = styled.div`
float: left;
text-align: left;
`;

export const StyledBlockName = styled.p`
margin: 0;
line-height: 1.7;
font-size: 18px;
font-weight: bold;
color: #333;
`;

export const StyledBlockAddess = styled.div`
margin: 0;
line-height: 1.7;
font-size: 18px;
font-weight: bold;
color: #333;
`;

export default StyledAddress;
