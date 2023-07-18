import { utcToZonedTime } from 'date-fns-tz';
import { format } from 'date-fns';
export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
export const utcNow = (formatType = 0) => {
    const now = new Date();
    const timeZone = 'UTC';
    const nowUtc = utcToZonedTime(now, timeZone);
    const formatOptions = [
        'yyyy-MM-dd-HH:mm:ss',
        'yyyy-MM-dd',
        'yyyy-MM-dd-HH-mm-ss',
        'yyyy-MM-dd-HH:00',
    ];
    const formattedDate = format(nowUtc, formatOptions[formatType]);
    return formattedDate;
};
//# sourceMappingURL=time.js.map