import os from 'os';

const GO_128 = 13743895347; /* octets */

export const BytesToGo = (bytes) => (bytes / 1073741824); /* = bytes / 1024 / 1024 / 1024 */

export const GoToBytes = (go) => (go * 1073741824); /* = go * 1024 * 1024 * 1024 */

export const getComputerMaxMemory = () => {
  const totalmem = os.totalmem();
  if (totalmem > GO_128) {
    return GoToBytes(navigator.deviceMemory);
  }
  return totalmem;
};

export const getComputerFreeMemory = () => {
  const freemem = os.freemem();
  if (freemem > GO_128 || freemem > getComputerMaxMemory()) {
    return -1;
  }
  return freemem;
};
