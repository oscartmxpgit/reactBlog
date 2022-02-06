export const advanceFilter = (items: any[], omit: string[]) => {
  const data = items.map((i) => {
    const item = { ...i };
    omit.forEach((o) => {
      delete item[o];
    });
    const _string = Object.values(item).join(' ').toLowerCase();
    return {
      ...i,
      _string,
    };
  });
  return data;
};

export function sort<Type>(array: Type[], prop: keyof Type): Type[] {
  function compare(a: any, b: any) {
    if (a[prop] < b[prop]) {
      return -1;
    }
    if (a[prop] > b[prop]) {
      return 1;
    }
    return 0;
  }
  return array.sort(compare);
}
