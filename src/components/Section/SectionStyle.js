import styled from 'styled-components';

export const StyledSectionGlobal = styled.div`
margin: 10px;
border: 1px solid #e4e4e4;
border-radius: 8px
`;

export const StyledSectionHeader = styled.div`
padding: 10px;
margin-bottom: 10px;
text-align: center;
background-color: ${props => props.theme.background_section ? props.theme.background_section : 'white'};
border-top-left-radius: 8px 8px;
border-top-right-radius: 8px 8px;
`;

export const StyledSectionHeaderSpan = styled.span`
color: ${props => props.theme.color_section ? props.theme.color_section : 'white'};
text-transform: uppercase;
`;

export const StyledSectionContent = styled.div`
margin-bottom: 20px;
`;
