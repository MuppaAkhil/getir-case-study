import { processRecordsLookup } from "../controller/records-controller";
import * as validator from "../utils/validation";
import {log} from '../utils/logger';
import SuccessResponse from '../utils/successResponse'
import ErrorResponse from '../utils/errorResponse'
/**
 * This function isto process the api request
 * Then returns records as array which match the given filters
 * @param req {object} request object
 * @param res {object} response object
 */
export const handleRecordsRequest = async (req, res) => {
  const { startDate, endDate, minCount, maxCount } = req.body;
  try {
    const errors = [];
    validateRecordRequest(startDate, endDate, minCount, maxCount, errors);
    if (errors.length > 0) {
      log.info("Invalid parameters", errors);
      return new ErrorResponse("1",400,"Invalid parameters",errors).send(res)
    }
    const response = await processRecordsLookup(
      startDate,
      endDate,
      minCount,
      maxCount
    );
    return new SuccessResponse("0",200,"Success",response).send(res);
    // res.status(200).json({ code: "0", msg: "Success", records: response });
    //prepare response
  } catch (e) {
    log.error("[handleRecordsRequest] ERROR :", e);
    return new ErrorResponse("1",500,"[handleRecordsRequest] ERROR :",e).send(res)
  }
};

/**
 * This function isto validate api request body params
 * Then update errors array if their are any.
 * @param startDate {string}  valid date string in any format
 * @param endDate {string} valid date string in any format
 * @param minCount {number}  number should be a positve number > 0
 * @param maxCount {number}  number should be greater than minCount and lesser than < Number.MAX_SAFE_INTEGER
 * @param   errors {array} capture validation errors if any
 */
export const validateRecordRequest = (
  startDate,
  endDate,
  minCount,
  maxCount,
  errors
) => {
  validator.validateDate("startDate", startDate, errors);
  validator.validateDate("endDate", endDate, errors);
  validator.validateDateWindow(startDate, endDate, errors);
  validator.validateIntWithinRange(
    "minCount",
    minCount,
    0,
    maxCount,
    true,
    errors
  );
  validator.validateIntWithinRange(
    "maxCount",
    maxCount,
    1,
    Number.MAX_SAFE_INTEGER,
    true,
    errors
  );
};
