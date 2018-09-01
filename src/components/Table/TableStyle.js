import styled from 'styled-components';

export const StyledTable = styled.div`
padding: 0 40px;
color: #333;
margin-top: 20px;
text-align: center;
`;


export const StyledTableContent = styled.table`
width: 100%;
border-collapse: collapse;
margin-bottom:20px;
text-align: center;
`;

export const StyledTableContentTh = styled.th`
text-align: left;
padding: 0 10px 5px 0px;
text-transform: uppercase;
color: #333;
border-collapse: collapse;
text-align: center;

`;

export const StyledTableDiv = styled.div`
color: ${props => props.theme.color ? props.theme.color : 'black'};
font-weight:bold;
text-align: center;

`;

export const StyledTableContentTd = styled.td`
padding: 10px 10px 20px 0px;
line-height: 1.5;
border-collapse: collapse;
text-align: center;

`;

export const StyledTableContentTr = styled.tr`
padding: 10px;
line-height: 1.5;
text-align: center;

`;