export default ({ app }) => {
  app.router.afterEach((from, to) => {
    if (from.path !== to.path) {
      const elements = document.querySelectorAll('.navigation__item--wrapper > .dropdown');
      elements.forEach((el) => {
        el.setAttribute('style', 'display: none');
        setTimeout(() => {
          el.removeAttribute('style');
        }, 0);
      });
    }
  });
};
