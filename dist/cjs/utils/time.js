"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utcNow = exports.sleep = void 0;
const date_fns_tz_1 = require("date-fns-tz");
const date_fns_1 = require("date-fns");
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
exports.sleep = sleep;
const utcNow = (formatType = 0) => {
    const now = new Date();
    const timeZone = 'UTC';
    const nowUtc = (0, date_fns_tz_1.utcToZonedTime)(now, timeZone);
    const formatOptions = [
        'yyyy-MM-dd-HH:mm:ss',
        'yyyy-MM-dd',
        'yyyy-MM-dd-HH-mm-ss',
        'yyyy-MM-dd-HH:00',
    ];
    const formattedDate = (0, date_fns_1.format)(nowUtc, formatOptions[formatType]);
    return formattedDate;
};
exports.utcNow = utcNow;
//# sourceMappingURL=time.js.map