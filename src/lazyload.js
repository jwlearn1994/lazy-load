/*!
 * @johnnywang/lazyload.js v1.0.0
 * (c) 2019 Johnny Wang
 * Released under the MIT License.
 */
(function (global, factory){
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.LazyLoad = factory());
}(this, function() { 'use strict';

  /*  */

  const setStyle = function(ea) {
    var e = "@keyframes lazyloadFadeIn{0%{opacity:0}100%{opacity:1}}.lazyloadFadeIn{animation:lazyloadFadeIn 1s;}",
        t = document.createElement("style");
    e += ea;
    t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t);
  }

  /*  */

  const LazyLoad = function(target, advance = 200) {
    // Initiate with Ratio(避免 reflow)
    // 在 img 標籤上設置 data-ratio="16/9"，就會根據比例放透明 svg 
    const initRatio = () => {
      let images = document.querySelectorAll(target);
      const placeholderSrc = (width, height) => `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;

      images.forEach(image => {
        if (image.dataset.ratio) {
          let ratio = image.dataset.ratio.split('/');
          image.src = placeholderSrc(ratio[0], ratio[1]);
        }
      });
    }
    
    // Load Event
    // 設置 data-src，給需要lazy-load 的 img 標籤
    const load = function() {
      let images = document.querySelectorAll(target);
      
      if (images.length > 0) {
        images.forEach(image => {
          const isDownToImage = (image.offsetTop < window.innerHeight + window.pageYOffset + advance);
          if (isDownToImage) {
            image.src = image.dataset.src;
            image.addEventListener('load', function() {
              this.classList.add('lazyloadFadeIn');
              this.classList.remove(target.replace('.', ''));
            })
          }
        })
      } else {
        window.removeEventListener('scroll', lazy);
        window.removeEventListener('resize', lazy);
      }
    }

    // 包裝事件
    const lazy = function() {
      return load(advance);
    }

    // 執行
    setStyle(`${target}{opacity:0;}`);
    initRatio();
    lazy();


    window.addEventListener('scroll', lazy);
    window.addEventListener('resize', lazy);
  }

  return LazyLoad;

}));
