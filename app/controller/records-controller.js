import { queryDbforRecords } from "../db/mongoHelper";
import {log} from '../utils/logger';

/**
 * takes filters and return matched records as array
 * @param startDate {string} filter param
 * @param endDate {string}  filter param
 * @param minCount {number}  filter param
 * @param maxCount {number}  filter param
 */
export const processRecordsLookup = async (
  startDate,
  endDate,
  minCount,
  maxCount
) => {
  try {
    log.info(">>>>>> Query Start with params >>>>>>", {
      startDate,
      endDate,
      minCount,
      maxCount,
    });
    const dbResponse = await queryDbforRecords(
      startDate,
      endDate,
      minCount,
      maxCount
    );
    log.info(">>>>>> Query End Successfully >>>>>>");
    return dbResponse;
  } catch (e) {
    log.error("[processRecordsLookup] error is", error);
    throw new Error(e);
  }
};
