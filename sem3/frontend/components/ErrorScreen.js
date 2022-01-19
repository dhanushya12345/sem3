import React from "react";
import AppText from '../components/AppText';

const ErrorScreen = ({ error }) => {
  return (
    <>
      <AppText >{error}</AppText>
    </>
  );
};

export default ErrorScreen;