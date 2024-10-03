const isObject = (val: any) => {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

export function cleanObject(obj: any, valueToClean: any[] = [null]) {
  if (!isObject(obj)) {
    throw new Error('"obj" argument must be of type "object"');
  }

  const cleanObj: any = {};
  let filter: any = valueToClean;

  for (let key in obj) {
    const objValue = obj[key];

    if (Array.isArray(valueToClean)) {
      filter = (val: any) => valueToClean.includes(val);
    } else if (typeof valueToClean !== 'function') {
      filter = (val: any) => val === valueToClean;
    }

    if (isObject(objValue)) {
      cleanObj[key] = cleanObject(objValue, filter);
    } else if (!filter(objValue)) {
      cleanObj[key] = objValue;
    }
  }
  return cleanObj;
}
