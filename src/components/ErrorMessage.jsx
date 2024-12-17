import React from 'react';

const ErrorMessage = ({message}) => {
  if (!message) return null;
  return <p className="mt-4 text-red-500">{message}</p>;
};

export default ErrorMessage;
