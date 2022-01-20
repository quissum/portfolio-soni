// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@font-face{font-family:fontello;font-style:normal;font-weight:400;src:url(../font/fontello.eot?93830344);src:url(../font/fontello.eot?93830344#iefix) format(\"embedded-opentype\"),url(../font/fontello.woff2?93830344) format(\"woff2\"),url(../font/fontello.woff?93830344) format(\"woff\"),url(../font/fontello.ttf?93830344) format(\"truetype\"),url(../font/fontello.svg?93830344#fontello) format(\"svg\")}[class*=\" icon-\"]:before,[class^=icon-]:before{speak:never;font-feature-settings:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fontello;font-style:normal;font-variant:normal;font-weight:400;line-height:1em;margin-left:.2em;margin-right:.2em;text-align:center;text-decoration:inherit;text-transform:none;width:1em}.icon-up-open:before{content:\"\\e800\"}.icon-twitter:before{content:\"\\f099\"}.icon-github-circled:before{content:\"\\f09b\"}.icon-linkedin:before{content:\"\\f0e1\"}.icon-codeopen:before{content:\"\\f1cb\"}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}