import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

/**
 * 按照给定格式格式化时间
 *
 * @export
 * @param {*} dDate
 * @param {*} strFmt
 * @param {*} isUTC
 * @returns
 */
export function fmtDate (dDate, strFmt, isUTC) {
  try {
    const date = new Date(dDate)
    if (isUTC) {
      dayjs.extend(utc)
      return dayjs.utc(date, strFmt)
    } else {
      return dayjs(date).format(strFmt)
    }
  } catch (error) {
    return dDate
  }
}
