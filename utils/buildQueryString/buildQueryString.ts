export const buildQueryString = (params?: Record<string, any>): string => {
  if (!params) return '';

  const query = new URLSearchParams();

  for (const key in params) {
    const value = params[key];
    if (value !== undefined && value !== null) {
      query.append(key, String(value));
    }
  }

  const queryString = query.toString();
  return queryString ? `?${queryString}` : '';
};