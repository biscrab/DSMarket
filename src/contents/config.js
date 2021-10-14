function getCookie(cName) {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if(start != -1){
    start += cName.length;
    var end = cookieData.indexOf(';', start);
    if(end == -1)end = cookieData.length;
    cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
    }

const config = {
    headers: {
        'Authorization': `Bearer ${getCookie("X-AUTH-TOKEN")}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
    }
}

export default config