export class ActiveRoute {
  static get path() {
    const hash = window.location.hash;
    return hash.slice(1);
  }

  static get param() {
    return ActiveRoute.path.split('/')[1];
  }

  static navigate(path) {
    window.location.hash = path;
  }
}