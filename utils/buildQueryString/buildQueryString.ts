export const buildQueryString = (params?: Record<string, any>, prefix = ''): string => {
  if (!params) return '';

  const query = new URLSearchParams();

  const serialize = (obj: any, parentKey = '') => {
    for (const key in obj) {
      const value = obj[key];
      if (value === undefined || value === null) continue;

      const fullKey = parentKey ? `${parentKey}[${key}]` : key;

      if (typeof value === 'object' && !Array.isArray(value)) {
        serialize(value, fullKey);
      } else {
        query.append(fullKey, String(value));
      }
    }
  };

  serialize(params);

  const queryString = query.toString();
  return queryString ? `?${queryString}` : '';
};
