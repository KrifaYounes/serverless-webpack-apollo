import { injectGlobal } from 'styled-components'

injectGlobal `

@font-face {
	font-family: "718book";
	src: url(${require('./assets/fonts/718/sevenoneeight-medium.woff2')}) format("woff2"),
		url(${require('./assets/fonts/718/sevenoneeight-medium.woff')}}) format("woff");
}

@font-face {
	font-family: "OpenSansRegular";
	src: url(${require('./assets/fonts/opensans/opensans-regular-webfont.woff2')}) format("woff2"),
		url(${require('./assets/fonts/opensans/opensans-regular-webfont.woff')}) format("woff");
}

@font-face {
	font-family: "Bariol";
	src: url(${require('./assets/fonts/bariol/bariol_regular-webfont.woff2')}) format("woff2"),
		url(${require('./assets/fonts/bariol/bariol_regular-webfont.woff')}) format("woff");
}

@font-face {
	font-family: "FreightDispPro";
	src: url(${require('./assets/fonts/FreightDispPro/FreightDispPro-book.woff2')}) format("woff2"),
		url(${require('./assets/fonts/FreightDispPro/FreightDispPro-book.woff')}) format("woff");
}

body {
  margin: 0;
  padding: 0;
  font-family: '718book';
  font-size: 20px;
}

page-break {
  page-break-after: always;
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}



`;