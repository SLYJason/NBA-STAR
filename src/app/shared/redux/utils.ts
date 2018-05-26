export const updateObject = <T>(state: T, payload: any): T => {
  return Object.assign({}, state, payload);
}
