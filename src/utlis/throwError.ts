const throwError = (statusCode: number, message: string): never => {
  const error = new Error(message);
  let status = statusCode;
  if (isNaN(status)) status = 500;

  (error as any).status = status;
  throw error;
};

export default throwError;
