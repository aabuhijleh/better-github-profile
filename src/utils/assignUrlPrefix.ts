export const assignUrlPrefix = (url: string) =>
  url.match(/^.{3,5}:\/\//) ? url : `http://${url}`;
