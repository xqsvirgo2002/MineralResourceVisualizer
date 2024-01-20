<template>
    <nav>
      <ul>
        <li><a href="/">首页</a></li>
        <li><a href="/visualization">数据可视化</a></li>
        <li><a href="/about">关于我们</a></li>
        <li><a href="/contact">联系方式</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style>
  nav {
  background-color: #333;
  overflow: hidden;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-start;
}

nav ul li {
  float: left;
}

nav ul li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

nav ul li a:hover {
  background-color: #ddd;
  color: black;
}

  </style>
  