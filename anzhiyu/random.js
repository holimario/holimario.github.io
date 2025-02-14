var posts=["2025/02/07/fa4b86b9.html","2025/02/07/4a17b156.html","2025/02/09/86d7b9fc.html","2025/02/12/aa9eecf8.html","2025/02/08/8d29a533.html","2025/02/14/89184582.html","2025/02/12/81b3bf3b.html","2025/02/11/4cc7c60c.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };