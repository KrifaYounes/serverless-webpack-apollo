import * as styleCommon from "../assets/styles/COMMON/theme";
import * as styleAF from "../assets/styles/AF/theme";
import * as styleEK from "../assets/styles/EK/theme";
import * as styleLR from "../assets/styles/LR/theme";
import * as stylePS from "../assets/styles/PS/theme";
import * as styleSE from "../assets/styles/SE/theme";
import * as styleVP from "../assets/styles/VP/theme";

export default function getThemeByBrand(brandCode) {
    const theme = {
        color:'black',
        color_section: styleCommon.COLOR_WHITE,
        fontFamily: styleCommon.FONT,
        background_section: styleCommon.BACKGROUND_SECTION
    };

    if(brandCode === 'AF') {
        theme.color = styleAF.AIR_FRANCE_BLUE;
        theme.background_section = styleAF.AIR_FRANCE_BLUE;
        theme.fontFamily = styleAF.FONT;

    } else if(brandCode === 'VP') {
        theme.color = '#eb008c';
        theme.fontFamily = styleVP.FONT;

    } else if(brandCode === 'EK') {
        theme.color = 'red';
        theme.color_section = 'red';
        theme.fontFamily = styleEK.FONT;

    } else if(brandCode === 'LR') {
        theme.fontFamily = styleLR.FONT;
    }

    return theme;
}
