export const isUmkmOpen = (rangeHours) => {
    if(rangeHours === 24){
        return true;
    } 
    const now = new Date();
    const [start, end] = rangeHours.replace(/[^0-9.-]+/g,"").split('-').map(time => {
        const [hours, minutes] = time.split('.');
        return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
    });

    if (now < start || now > end) {
        return false;
    } else {
        return true;
    }
};