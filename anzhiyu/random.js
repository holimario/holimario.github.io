var posts=["2025/02/07/undefined.html","2025/02/07/undefined.html","2025/02/08/undefined.html","2025/02/09/undefined.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };