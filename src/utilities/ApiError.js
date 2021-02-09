class ApiError extends Error {
  constructor(status) {
    super();

    this.status = status;
  }
}

export default ApiError;
