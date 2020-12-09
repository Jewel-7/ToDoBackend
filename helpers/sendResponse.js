const sendResponse = (statusCode, status, data, res, req) => {
  res.status(
    statusCode.json({
      status: status,
      data: data,
    })
  );
};
