# general-version-compare

[![build status](https://secure.travis-ci.org/wd4blue/general-version-compare.png)](http://travis-ci.org/wd4blue/general-version-compare)
[![download/month](https://img.shields.io/npm/dm/general-version-compare.svg)](https://img.shields.io/npm/dm/general-version-compare.svg)
[![license](https://img.shields.io/npm/l/general-version-compare.svg)](https://img.shields.io/npm/l/general-version-compare.svg)

在开发 [360静态资源库](https://cdn.baomitu.com) 时需要进行版本排序，但是[compare-versions](https://github.com/omichelsen/compare-versions) 不能满足要求，因为有的版本不符合 [semver规范](http://semver.org/#spec-item-9) (如 angular.js 的版本 1.0.0rc9)，所以写了一个通用的版本比较，测试使用了[compare-versions](https://github.com/omichelsen/compare-versions)的测试用例 (具体测试情况，请查看test/compare.js中注解)。

## Install

Install with `npm`:

```bash
$ npm install general-version-compare --save
```


## &lt;script />

You can simply include general-version-compare like this:
```html
<script src='[path of index.js]'></script>
```

## Usage

```javascript
var compareVersion = require('general-version-compare');
compareVersion('10.1.8', '10.0.4');              // -1
compareVersion('1.0.0rc10', '1.0.0rc12');        //  1
compareVersion('1.3.0-beta.17', '1.3.0-beta.1'); //-1

```

Can also be used for sorting:

```javascript
var versions = [
    '1.5.19'
    '1.2.3',
    '1.5.5',
];
console.log(versions.sort(compareVersion));
```

Outputs:

```javascript
[
    '1.5.19',
    '1.5.5',
    '1.2.3'
]
```

## License

MIT

