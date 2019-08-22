module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 0,
    'no-debugger': 0,
    "no-extra-parens": 2,   // 禁止非必要的括号
    "no-extra-semi": 2,		//禁止多余的冒号
    "no-const-assign": 2,	//禁止修改const声明的变量
    "no-multi-spaces": 1,	//不能用多余的空格
    "no-multiple-empty-lines": [1, {"max": 2}], //空行最多不能超过2行
    "no-redeclare": 2,	//禁止重复声明变量
    "no-undef": 1,	//不能有未定义的变量
    "comma-dangle": [2, "never"],	//对象字面量项尾不能有逗号
    "indent": [2, 4],	//缩进风格
    'semi': 0, // 不检查分号这一项, 如果我们希望要使用分号：'semi': ["error", "always"]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
