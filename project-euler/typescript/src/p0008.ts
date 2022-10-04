import { productReducer } from './utils/reducers';

export function p0008(series: bigint, window: number): number {
  let productOfWindow = 0;
  for (let index = window - 1; index < series.toString().length; index++) {
    const currWindow = series.toString().slice(index - window + 1, index + 1);
    const productOfCurrentWindow = Array.from(currWindow)
      .map((r) => Number(r))
      .reduce(productReducer);
    productOfWindow = productOfCurrentWindow > productOfWindow ? productOfCurrentWindow : productOfWindow;
  }
  return productOfWindow;
}
