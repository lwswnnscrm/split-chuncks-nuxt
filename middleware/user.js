export default async ({
  app, req, route, redirect,
}) => {
  if (req) {
    const token = app.$cookies.get('token');
    if (token) {
      console.log('gooog');
    } else if (route.fullPath.indexOf('account') !== -1) {
      redirect('/');
    }
  }
};
