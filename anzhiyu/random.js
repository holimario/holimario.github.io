var posts=["2025/02/07/hello-world/","2025/02/08/missing-semester-2-shell-gong-ju-he-jiao-ben/","2025/02/07/missing-semester-1-shell/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };