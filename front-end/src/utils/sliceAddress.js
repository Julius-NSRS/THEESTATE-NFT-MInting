export default (address, chars = 4) =>
  address ? `${address.slice(0, chars)}...${address.slice(-chars)}` : null;
