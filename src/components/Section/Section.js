import React from 'react';
import {StyledSectionGlobal, StyledSectionHeader, StyledSectionHeaderSpan, StyledSectionContent} from './SectionStyle'

function Section({ title, content }) {
    return (
        <StyledSectionGlobal>
            <StyledSectionHeader>
                <StyledSectionHeaderSpan>
                    {title}
                </StyledSectionHeaderSpan>
            </StyledSectionHeader>
            <StyledSectionContent>
                {content}
            </StyledSectionContent>
        </StyledSectionGlobal>
    );
}

export default Section;
