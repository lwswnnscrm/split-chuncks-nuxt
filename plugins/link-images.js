const imageLink = (link = '', w = 0, h = 0) => {
  if (String(link).indexOf('https:') !== -1) {
    return link;
  }
  return `https://static.ssyii.com/insecure/fill/${w}/${h}/ce/0/plain/s3:/${link}`;
};

export default (context, inject) => {
  inject('il', imageLink);
};
