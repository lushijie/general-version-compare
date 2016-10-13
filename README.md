# general-version-compare


在开发 [360静态资源库](https://cdn.baomitu.com) 时需要进行版本排序，但是[compare-versions](https://github.com/omichelsen/compare-versions) 不能满足要求，因为有的版本不符合[semver规范]（http://semver.org/#spec-item-9），如 angular.js 的版本 1.0.0rc9，所以写一个通用的版本比较。


## Install

Install with `npm`:

```bash
$ npm install general-version-compare --save
```

## Usage

```javascript
var compareVersions = require('general-version-compare');
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
console.log(versions.sort(compareVersions));
```

Outputs:

```javascript
[
    '1.5.19',
    '1.5.5',
    '1.2.3'
]
```
