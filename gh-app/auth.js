!function(e){function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}var t={};o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="",o(o.s=1275)}({1275:function(e,o,t){!function(){if("?"===location.search[0]){var e=location.search.slice(1).split("&"),o={},t=sessionStorage.redirectUrl||"index.html";if(e.forEach(function(e){var t=e.split("=");o[t[0]]=t[1]}),o.code){var r=new XMLHttpRequest;r.onload=function(){if(200===r.status){var e=JSON.parse(r.responseText);e.error?console.error("oops",e.error):e.token&&(localStorage.appToken=e.token,sessionStorage.removeItem("redirectUrl"),location.replace(t))}},r.open("POST","https://3dxybrpy57.execute-api.us-east-1.amazonaws.com/dev/api/login"),r.setRequestHeader("Content-Type","application/json"),r.send(JSON.stringify({code:o.code}))}}}()}});