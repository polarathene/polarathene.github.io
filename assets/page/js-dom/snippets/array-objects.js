let book_of_animals = {
  chapters: [
    {
      title: 'Lions, tigers, and bears, oh my!',
      page: 0,
    },
    {
      title: 'Zootopia',
      page: 4,
    },
    {
      title: 'The farm',
      page: 6,
    },
  ],

  pages: [
    // chapter 1 pages:
    'lion',
    'tiger',
    'panda',
    // chapter 2 pages:
    'hippo',
    'giraffe',
    'penguin',
    // chapter 3 pages:
    'pig',
    'sheep',
    'cow',
    'horse',
  ],
}

function readChapter(book, chapter) {
  let from_page = book.chapters[chapter].page

  // Do we still have another chapter to read up to?
  let nextChapter = book.chapters[chapter + 1]
  let until_page = nextChapter?.page || book.pages.length

  readPages(from_page, until_page)
}

function readPages(from_page, until_page) {
  for (let i = from_page; i < until_page; i++) {
    console.log(book_of_animals.pages[i])
  }
}

// Read pages from chapter two!:
readChapter(book_of_animals, 1)
// Outputs:
// 'hippo'
// 'giraffe'
// 'penguin'
