export const NotNull = true;
export const AllowNull = false;

/**
 * Checks if a string is in the valid date
 * some of valid date formats are
 *    2021-04-06T07:15:33.095Z
 *    2021-04-06T07:15:33.095
 *    2021-04-06T07:15:33
 *    2021-04-06T07:15:33Z
 * @param dateStr {string} date to check
 */
export const validateDate = (field, dateStr, errors) => {
  try {
    if (dateStr == null) {
      errors.push({
        field,
        error: "value was null or empty",
      });
      return undefined;
    }
    if (typeof dateStr !== "string") {
      errors.push({
        field,
        error: "value was not string",
      });
      return undefined;
    }
    const result = Date.parse(dateStr);
    if (Number.isNaN(result)) {
      throw new Error(`Date.parse(${field}) returned NaN`);
    }
    return result;
  } catch (err) {
    errors.push({
      field,
      error: err.message,
    });
  }
  return undefined;
};

/**
 * Checks if a int is with in the range of given min and max values
 */
export const validateIntWithinRange = (
  field,
  value,
  min,
  max,
  allowNull,
  errors
) => {
  validateIntOrNull(field, value, allowNull, errors);
  if (errors.length < 1) {
    if (value < min) {
      errors.push({
        field,
        error: `must not be less than minimum value of ${min}`,
      });
    } else if (value > max) {
      errors.push({
        field,
        error: `must not be more than maximum value of ${max}`,
      });
    }
  }
};

/**
 * Checks if a int is valid integer
 * Note: It will also consider int of type string
 */
export const validateIntOrNull = (field, value, allowNull, errors) => {
  const tmpVal = typeof value == "string" ? value.trim() : value;
  if (allowNull == NotNull && (tmpVal == null || tmpVal.length < 1)) {
    errors.push({
      field,
      error: "must not be null, undefined or empty",
    });
    return;
  }
  if (allowNull == AllowNull && (tmpVal == null || tmpVal === "")) {
    return;
  }
  try {
    const intValue = parseInt(tmpVal, 10);
    if (Number.isNaN(intValue)) {
      throw new Error("Error NaN");
    }
  } catch (err) {
    errors.push({
      field,
      error: err.message,
    });
  }
};

/**
 * Checks if a start date is lesser than or equal to end date
 */
export const validateDateWindow = (start, end, errors) => {
  if (!start || !end) {
    return;
  }
  const dbStart = new Date(start);
  const dbEnd = new Date(end);

  if (dbEnd < dbStart) {
    errors.push({
      fields: "startDate, endDate",
      error: "endDate must be after startDate",
    });
  }
};
