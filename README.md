# LazyLoad.js

一個基礎 lazyload 套件，讓圖片在滾動接近指定距離時動態載入。



## Usage

設置 data-src 給圖片位置，並可以設置 data-ratio 指定該圖片比例並提供svg占位，避免圖片載入後造成畫面重繪。

```html
<img class="lazy" data-src="./test.jpg" data-ratio="500/355" alt="#">
```

指定設置 lazy-load 的 className，並可選擇性設置 advance，距離圖片多少距離時進行加載圖片。(預設 200)

```js
new LazyLoad('.lazy', 100);
```



## Tech

1. 當圖片加載完成後，會自動移除該 img 指定 lazyload 的 className，故請勿將重要 UI 設定於該 className 上。

2. 當畫面上所有指定的 lazyload 的 className 不存在時，會自動移除此套件針對 window 物件所添加的所有事件監聽。

3. Have Fun!~
