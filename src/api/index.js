const _baseurl = '';

export default {
  getPlayListByWhere(cat, order, offset, total, limit) {
    return _baseurl + '?type=topPlayList&cat=' + cat + '&offset=' + offset + '&limit=' + limit;
  },
  getLrc(id) {
    return _baseurl + '?type=lyric&id=' + id;
  },
  getSong(id) {
    return _baseurl+ '?type=url&id=' + id;
  },
  getPlayListDetail(id) {
    return _baseurl + '?type=playlist&id=' + id;
  },
  getMv(id) {
    return _baseurl + '?type=mv&id=' + id;
  },
  // search接口
  search(words) {
    return _baseurl + '?type=search&s=' + words;
  },
};
