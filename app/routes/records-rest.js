var express = require("express");
var router = express.Router();
import * as handler from "./records-rest-impl";


/**
* @swagger
* definitions:
*   RecordLookupObject:
*     type: object
*     properties:
*       startDate:
*         type: string
*         description: String Date of format YYYY-MM-DD
*       endDate:
*         type: string
*         description: String Date of format YYYY-MM-DD
*       minCount:
*         type: number
*         description: Any Positive Integer lesser than maxCount
*       maxCount:
*         type: number
*         description: Any Positive Integer
*     required:
*        - startDate
*        - endDate
*        - assetId
*        - minCount
*        - maxCount
*/


/**
* @swagger
*'/v1/records/lookup':
*    post:
*      tags:
*        - Public API
*      summary: gets all the records for the supplied filters
*      description: gets all the records for the supplied filters
*      produces:
*        - application/json
*      parameters:
*        - in: body
*          name: body
*          description: json
*          required: true
*          schema:
*            $ref: "#/definitions/RecordLookupObject"
*      responses:
*        200:
*          description: success
*        400:
*          description: Invalid input
*        401:
*          description: Unauthorized
*        500:
*          description: Something went wrong, try again later
*/
router.post("/lookup", handler.handleRecordsRequest);

export default router;
