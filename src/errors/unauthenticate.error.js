import { StatusCodes } from "http-status-codes";
import { CustomAPIError } from "./custom.error.js";

class UnauthenticateError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnauthenticateError;
