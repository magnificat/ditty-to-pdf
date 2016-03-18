[![Travis – build status
](https://img.shields.io/travis/magnificat/ditty-to-pdf/master.svg?style=flat-square
)](https://travis-ci.org/magnificat/ditty-to-pdf
) [![David – status of dependencies
](https://img.shields.io/david/magnificat/ditty-to-pdf.svg?style=flat-square
)](https://david-dm.org/magnificat/ditty-to-pdf
) [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square
)](https://github.com/airbnb/javascript
)




# ditty-to-pdf

**Convert one or more [ditty](https://git.io/ditty) files to a lyrics PDF**







<a id="/installation"></a>&nbsp;

## INSTALLATION

```sh
npm install --global ditty-to-pdf
```

Note that you need *node 4.0+* to run the tool natively. But if you’re stuck on an older version, don’t worry! [Rumour has it](https://github.com/tomekwi/elm-live/issues/2#issuecomment-156698732) that you can transpile the code to ES5!




<a id="/synopsis"></a>&nbsp;

## SYNOPSIS

```sh
ditty-to-pdf ...<file> <destination>
```




<a id="/description"></a>&nbsp;

## DESCRIPTION

We’ll render an A5-sized PDF with lyrics to the ditty songs. No fancy, just that.




<a id="/options"></a>&nbsp;

## OPTIONS

#### `<file>`
Pass one or more [ditty](https://git.io/ditty) files to land in the PDF.

#### `<destination>`
Pass a relative or absolute path the rendered PDF should be written to.




<a id="/license"></a>&nbsp;

## LICENSE

[MIT](./License.md) © [Tomek Wiszniewski](https://github.com/tomekwi)
