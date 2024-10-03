export type ParamObject = {
  [key: string]: any;
};

export default function setUrlParams(params: ParamObject, url?: string) {
  return `${url}?${Object.entries(params)
    .map((x) => `${x[0]}=${encodeURIComponent(x[1])}`)
    .join('&')}`;
}
