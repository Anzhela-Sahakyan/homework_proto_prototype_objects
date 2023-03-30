const pagination = {
  currentPageIndex: 0,
  book: [],

  init(array, pageSize) {
    let page = [];
    for (let i = 0; i <= array.length; i++) {
      if (page.length === pageSize || i === array.length) {
        this.book.push(page);
        page = [];
      }
      page.push(array[i]);
    }
    console.log(this.book);
    return this;
  },

  _getValidPageIndex(pageNumber) {
    if (pageNumber <= 1) {
      return 0;
    }

    if (pageNumber >= this.book.length) {
      return this.book.length - 1;
    }

    return pageNumber - 1;
  },

  _goToPageByIndex(index) {
    this.currentPageIndex = this._getValidPageIndex(index + 1);
  },

  goToPage(pageNumber) {
    this.currentPageIndex = this._getValidPageIndex(pageNumber);
    return this;
  },

  prevPage() {
    this._goToPageByIndex(this.currentPageIndex - 1);
    return this;
  },

  nextPage() {
    this._goToPageByIndex(this.currentPageIndex + 1);
    return this;
  },

  firstPage() {
    this._goToPageByIndex(0);
    return this;
  },

  lastPage() {
    this._goToPageByIndex(this.book.length - 1);
    return this;
  },

  getPageItems() {
    return this.book[this.currentPageIndex];
  },
};
const pageItems = pagination
  .init([1, 2, 3, 4, 5, 6, 7], 3)
  .goToPage(1)
  .nextPage()
  .getPageItems();
console.log(pageItems);
