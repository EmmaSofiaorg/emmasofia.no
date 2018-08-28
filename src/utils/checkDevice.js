function isMobileDevice() {
  if (navigator.userAgent.match(/Android/i)) {
    return "Android";
  }
  if (navigator.userAgent.match(/iPhone/i)) {
    return "iPhone";
  } else {
    return false;
  }
}

export { isMobileDevice };
