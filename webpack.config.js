// config파일은 항상 root 위치에 있어야 한다.
// commonJS 방식으로 '모듈'을 만들었다.
export default  {
  entry: "./index.js",
  output: {
    filename: './index.bundle.js',
  },
};

