import moment from "moment";
import { RecordModel } from "../model/records";

/**
 * This DbHelper function is query on Records collection with given query params
 * Then returns stream as output
 * @param startDate {Date}  search records greater than startDate
 * @param endDate {Date} search records lesser than endDate
 * @returns {object} stream object to retrieve rows in chunks
 */
export const queryDbforRecords = async (
  startDate,
  endDate,
  minCount,
  maxCount
) => {
  const records = await RecordModel.aggregate([
    {
      $match: {
        createdAt: {
          $gte: new Date(formatDate(startDate)),
          $lt: new Date(formatDate(endDate)),
        },
      },
    },
    {
      $project: {
        _id: 0,
        key: 1,
        createdAt: 1,
        totalCount: {
          $sum: "$counts",
        },
      },
    },
    {
      $match: {
        totalCount: {
          $gte: minCount,
          $lte: maxCount,
        },
      },
    },
  ]).sort({ createdAt: "desc" });
  return records;
};


const formatDate = (date) => {
  return moment(date).format("YYYY-MM-DD");
};
