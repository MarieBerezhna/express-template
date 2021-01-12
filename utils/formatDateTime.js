module.exports = function (datetime) {

    if (datetime.indexOf('T') !== -1) {
        let timeArr = datetime.split('T');
        let date = timeArr[0].split('-').reverse().join('/').replace('"', '');
        let time = timeArr[1].slice(0, 5);
        return `${date} ${time}`;
    } 
    return datetime;
};