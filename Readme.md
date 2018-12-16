
# MYBF

[![API](https://img.shields.io/badge/API-MYBF-blue.svg)](https://mybf.herokuapp.com/)

MYBF stands for MY Brain Fucks... no that's not true, it stands for the Chinese phrase "没有办法" (méi yǒu bàn fǎ), which means "no way".

## Introduction

MYBF is a project inspired by the "没有办法"-image used widely as an emoticon in Chinese instant messaging apps, and its major task is to provide a way to generate more "no way"s.

The mentioned original image looks like this:

![mybf](https://mybf.herokuapp.com/%E6%B2%A1%E6%9C%89%E5%8A%9E%E6%B3%95.png)

(NOTE: this picture is not the original image, but a generated result of this project.)

### So what is it, exactly?

**MYBF is a very very limited image generating API provider.**

### Can you show more of the works?

Of course!

![ybfl](https://mybf.herokuapp.com/%E6%9C%89%E5%8A%9E%E6%B3%95%E4%BA%86.png)
![qtmybfm](https://mybf.herokuapp.com/%E5%85%B6%E4%BB%96%E7%8C%AB%E6%9C%89%E5%8A%9E%E6%B3%95%E5%90%97.png?fontSize=11&y=2)
![qtmmybf](https://mybf.herokuapp.com/%E5%85%B6%E4%BB%96%E7%8C%AB%E6%B2%A1%E6%9C%89%E5%8A%9E%E6%B3%95.png?fontSize=11&y=2)
![no way](https://mybf.herokuapp.com/No%20Way.png)
![it is hopeless](https://mybf.herokuapp.com/It%20is%20hopeless.png?fontSize=10&y=2)

### Great, so how to use it?

Simple, currently MYBF is hosted on [Heroku](https://heroku.com/). You just need to request with the desired text in the API endpoint:

```
https://mybf.herokuapp.com/<TEXT>.png
```

By now only `png` format is supported, but the extname can not be omitted.

With params, it is possible to customize the details:

```
https://mybf.herokuapp.com/It%20is%20hopeless.png?fontSize=10&y=2
```

Have fun!

## License

This project is licensed under [MIT License](https://github.com/esphas/mybf/blob/master/LICENSE).

Vendor stuffs are under the `vendor` directory, along with their own licenses.
