const createAxiosUrl = (isDev, stage) => {
  if (stage === 'develop' || isDev) {
    return 'https://test-dev.com';
  }
  if (stage === 'staging') {
    return 'https://test-stage.com';
  }
  if (stage === 'prod') {
    return 'https://test.com';
  }
  return 'https://test-dev.com';
};

export default createAxiosUrl;
