import Mock from 'mockjs';
Mock.setup({
  timeout: '200-1500'
})

Mock.mock('/list.json', 'get', {
  'data|10': [
    {
      sentence: '@sentence',
      title: '@title',
      date: '@datetime("yyyy-MM-dd HH:mm:ss")',
      image: '@image("100x100")'
    },
  ]
});
