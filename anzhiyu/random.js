var posts=["2024/10/26/这是一篇新的博文-1/","2024/10/26/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };