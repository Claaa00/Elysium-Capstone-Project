function dateNow(date){
    var dt = new Date();
    let datetime = (dt.getMonth()+1) + "/" 
                + dt.getDate() + "/" 
                + dt.getFullYear()+  ":" 
                + dt.getHours()+ ":"
                + dt.getMinutes()+ ":"
                + dt.getSeconds()+ ":";
    return datetime;
}