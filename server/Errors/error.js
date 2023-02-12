class Error {
  constructor(message) {
    this.status = 500;
    this.message = message;
    this.title = "Error";
    // this.stack = <call stack>;
  }
}

class BadRequestError extends Error {
  constructor(message = "Bad request") {
    super(message);
    this.status = 400;
    this.title = "Bad Request Error";
  }
}

class ValidationError extends Error {
  constructor(message = "All fields are required") {
    super(message);
    this.status = 422;
    this.title = "Validation Error";
  }
}

class UnAuthorizedError extends Error {
  constructor(message = "Unauthorized user") {
    super(message);
    this.status = 401;
    this.title = "Unauthorized Error";
  }
}

class ForbiddenError extends Error {
  constructor(message = "You can't access it") {
    super(message);
    this.status = 403;
    this.title = "Forbidden Error";
  }
}

class NotFoundError extends Error {
  constructor(message = "Page not found !") {
    super(message);
    this.status = 404;
    this.title = "Not Found Error";
  }
}

module.exports = {
  Error,
  BadRequestError,
  ValidationError,
  UnAuthorizedError,
  ForbiddenError,
  NotFoundError,
};
