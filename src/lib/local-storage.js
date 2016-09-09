export function supportsLocalStorage() {
  try {
    return 'localStorage' in self && self['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
