<template>
    <div class="search-bar">
      <input type="text" placeholder="搜索矿区数据...">
      <button>搜索</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBar'
  }
  </script>
  
  <style>
.search-bar {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.search-bar input[type="text"] {
  width: 60%;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-bar button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #0056b3;
}

  </style>
  