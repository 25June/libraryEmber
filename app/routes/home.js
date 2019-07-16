import Route from '@ember/routing/route';

export default Route.extend({
  // columns = [{
  //   name: `Name`
  // }, {
  //   name: `Author`
  // }, {
  //   name: `Image`
  // }, {
  //   name: `Youtube`
  // }],
  model() {
    // return this.get('store').findAll('music');
    return [{
      name: 'Có chàng trai viết lên cây',
      author: 'Phan Mạnh Quỳnh',
      image: 'https://pbs.twimg.com/media/DTLsgvSUQAALJJh.jpg',
      youtube: 'https://www.youtube.com/watch?v=EUEUZDV-in0,'
    }, {
      name: 'I dont care',
      author: 'Ed Sheeran',
      image: 'https://m.media-amazon.com/images/I/81DaQbXM6vL._SS500_.jpg',
      youtube: 'https://www.youtube.com/watch?v=CCSGelSCPGE'
    }, {
      name: 'Birds',
      author: 'Imagine Dragon',
      image: 'https://i0.wp.com/images.genius.com/10acb196a240ef1d986b8ab286ff26e8.905x905x1.png?ssl=1',
      youtube: 'https://www.youtube.com/watch?v=fQ-BPdkoSMw'
    }, {
      name: 'Yêu anh',
      author: 'Uyên',
      image: 'https://i.ytimg.com/vi/aCyj4w8GY1M/maxresdefault.jpg',
      youtube: 'https://www.youtube.com/watch?v=aCyj4w8GY1M'
    }, {
      name: 'Bài này chill phết',
      author: 'Đen',
      image: 'https://znews-photo.zadn.vn/w660/Uploaded/ohunuai/2019_05_21/RDEN35.jpg',
      youtube: 'https://www.youtube.com/watch?v=ddaEtFOsFeM'
    }];
  },

});
