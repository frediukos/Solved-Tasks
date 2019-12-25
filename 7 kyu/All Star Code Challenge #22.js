//All Star Code Challenge #22

function toTime(seconds) {
    let hour = Math.trunc(seconds / 3600);
    let minutes = Math.trunc((seconds  - hour * 3600) / 60);
    return `${hour} hour(s) and ${minutes} minute(s)`
}

//or

function toTime(seconds) {
    let hour = Math.trunc(seconds / 3600);
    let minutes = Math.trunc(seconds % 3600 / 60);
    return `${hour} hour(s) and ${minutes} minute(s)`
}