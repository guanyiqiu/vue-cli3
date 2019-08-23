// https://eslint.org/docs/rules/     eslint官方文档
module.exports = {
	//此项是用来告诉eslint找当前配置文件不能往父级查找
	root: true,
	//此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
	parser: 'babel-eslint',
	//此项指定环境的全局变量，下面的配置指定为node环境
	env: {
		node: true
	},
	// 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
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
		// "indent": [2, 4],	//缩进风格2-4个空格
		"indent": 0,	//缩进风格（关闭、不检查）
		"semi": 0,  // 不检查分号这一项, 如果我们希望要使用分号：'semi': ["error", "always"]
		"new-parens": 2,  //new时必须加小括号
		"newline-after-var": 2,	//变量声明后是否需要空一行
	}
}
