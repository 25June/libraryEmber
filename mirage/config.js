export default function() {
  this.namespace = '/api';
  let musics = [{
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
  
  this.get('/musics', (db, request) => {
    if(request.author !== undefined) {
      let filteredMusics = musics.filter((i) => {
        return i.author.toLocaleLowerCase().indexOf(request.author.toLocaleLowerCase()) !== -1;
      });
      return {data: filteredMusics};
    } else {
      return {data: musics};
    }
  })

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */
}
