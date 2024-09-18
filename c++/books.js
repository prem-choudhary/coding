  
    
     const books =[

        {title: 'book one', genre: 'Fiction'  , publish: 1981,
          edition: 2005  },
        {title: 'book Two', genre: 'Non Fiction'  , publish: 1982,
          edition: 2000 },
        {title: 'book Three', genre: 'History'  , publish: 1999,
          edition: 2004  },
        {title: 'book Four', genre: 'Non Fiction'  , publish: 1955,
          edition: 2003  },
        {title: 'book Five', genre: 'science'  , publish: 2000,
          edition: 2001  },
        {title: 'book Six', genre: 'History'  , publish: 2002,
          edition: 2006  },
        {title: 'book Seveen', genre: 'science'  , publish: 2005,
          edition: 2007  },
        {title: 'book Eight', genre: 'Fiction'  , publish: 1998,
          edition: 1999  },
        {title: 'book Nine', genre: ' Non Fiction'  , publish: 2006,
          edition: 2008  },

     ];
let userBooks = books.filter((bk)=> bk.genre==='History')   
 userBooks= books.filter ((bk) => {  
    return bk.publish >= 1995 && bk.genre === 'History'})
     console.log(userBooks);

     