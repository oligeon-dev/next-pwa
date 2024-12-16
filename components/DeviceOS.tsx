'use client';

function DeviceOS() {
  const isIOS = (): boolean => {
    const userAgent = navigator.userAgent;
    return /iPad|iPhone|iPod/.test(userAgent);
  };
  return <div>{isIOS() ? 'iOS' : 'not iOS'}</div>;
}

export default DeviceOS;
