<template>
  <div class="container">
    <section class="banner-area">

      <div class="banner-container">
        <div class="banner-content">
            <h1 class="g">2020’s TOP {{productList.length - 1}}</h1> 
            <h1 class="a">{{websiteName}}</h1>
        </div>
        <img src="@/assets/image/seal.png" :alt="websiteName" class="seal">
      </div>
    </section>
    <div class="main-container">

      <section class="website-desc-area">
        <h2 class="area-title">The Best {{websiteName}} In 2020</h2>
        <div class="content area-content">
          <p>With so many models and styles and so much tech on offer, it can make finding the best wireless earbuds for you a bit of a minefield. We tested many wireless earbuds on sound quality, build quality, comfort, battery life, device compatibility and much more. </p>
        </div>
      </section>

      <section class="product-area">
        <p class="desc">Here is our Top {{productList.length - 1}} List for best Wireless Earbuds 2020:</p>
        <div class="product-list-container">
          <div :class="{'product-item': true, 'first-item': index == 0, 'last-item': index == productList.length - 1}" v-for="(product,index) in productList" :key="index">
            <div class="circle" v-if="index != productList.length- 1">
                <span class="num">{{index + 1}}</span>
            </div>
            <div class="corner-box" v-if="index == 0">
                <span class="text">Editor's Choice</span>
            </div>
            <div class="big-title" v-if="index == productList.length - 1">The Most Popular {{websiteName}} In 2020</div>
            <div class="product-link-box" @click="jump(product.link)">
              <div class="product-container">
                  <div class="product-container-left">
                      <div class="picture-box">
                          <img :src="product.picture" :alt="product.name" class="picture">
                      </div>
                      <div class="desc-list-box">
                          <h2 class="product-name">{{product.name}}</h2>
                          <ul class="list-box" v-if="product.strengthList.length != 0">
                              <li v-for="(item,id) in product.strengthList" :key="id">
                                  <span class="icon"></span>
                                  <p class="text">{{item.text}}</p>
                              </li>
                          </ul>
                          <ul class="list-box weakness-list" v-if="product.weaknessList.length != 0">
                              <li v-for="(item,id) in product.weaknessList" :key="id">
                                  <span class="icon"></span>
                                  <p class="text">{{item.text}}</p>
                              </li>
                          </ul>
                          <p class="buys" v-if="index == 0 || index == productList.length - 1">50% Discount Now</p>
                      </div>
                  </div>
                  <div class="product-container-right">
                      <p class="good">
                          <span class="text">{{index == 0 || index == productList.length - 1 ? 'Excellent': index == 1 ? 'Very Good': 'Good'}}</span>
                          <span class="king-icon" v-if="index == 0 || index == productList.length - 1"></span>
                          <span class="good-icon" v-if="index == 1"></span>
                      </p>
                      <p class="rate-box"><span class="score">{{product.score}}</span><span>/10</span></p>
                      <a :href="product.link" target="_blank" class="btn">
                          <span class="text">Visit Site</span>
                          <span class="icon"></span>
                      </a>
                  </div>
              </div>
            </div>
        </div>
        </div>
      </section>
      <section class="why-use">
        <h2 class="area-title">Why choose wireless earbuds？</h2>
        <div class="content">
          <img src="/data/img/why-use.jpg" alt="" style="display:block;width: 100%;margin-top:30px;margin-bottom: 25px;">
          <h6 class="title">1. Be handsfree and cord-free</h6>
          <div class="area-content">
            <p>With wireless earbuds, you are able to do away with the multiple wired gadgets in your life. You can do your things handsfree, meaning that you will be able to pick your calls without the need to place your phone on your ears. The hands-free earbuds will do the work for you. It is also true that you will never have to unwind any knots formed by the wires of your headphones or earbuds. It also becomes easy to work out as you listen to music from your phones through the wireless earbuds. In short, it is convenient to use the wireless earbuds.</p>
          </div>
          <h6 class="title">2. High-quality sound</h6>
          <div class="area-content">
            <p>The fact that the earbuds are wireless does not mean that they will not give you the best quality sound. There are many types if earbuds that are wireless and produce the best quality sound. There are many varieties of quality earbuds that come with noise isolation and bass boosting technology. As such, all you need to do is do your homework and search for the best quality wireless earbuds.</p>
          </div>
          <h6 class="title">3. You can walk as you talk</h6>
          <div class="area-content">
            <p>Another advantage of the wireless earbuds is that you have the freedom to walk as you talk. In fact, with the wireless earbuds, you can work and even do chores at home without the need for you to hold the phone. You can listen to music and even receive calls and resume the playback as you wish. You could actually drive as you use the wireless earbuds. You will, however, need to make sure that you are careful enough not to cause an accident.</p>
          </div>
          <h6 class="title">4. They are affordable and stylish</h6>
          <div class="area-content">
            <p>Wireless earbuds look stylish and sophisticated. They are sporty in looks and design. They are made in such a way that they will remain firm when you are working out. You will love their looks even if you are a casual user of earbuds. They are also affordable despite their stylish looks and nature. There are many manufacturers that make these earbuds and as such, you can search online to ensure that you find what is affordable to your taste and preferences.</p>
          </div>
          <h6 class="title">5. You can do more than just listening</h6>
          <div class="area-content">
            <p>It is possible to pair your wireless earbuds with devices such as phones, tablets, computers, TV sets, MP3 Players and so on. This means that you can listen to your programs on TV or computer by pairing the Bluetooth earbuds with these devices. This way, you can enjoy your programs without the need of bothering other people in the room.</p>
          </div>
        </div>
      </section>
      <section class="special-offer-area">
        <h3 class="offer">Special Offer on Now!</h3>
        <p class="sub">Now there is a special offer, but such a low price, there may not be much left! </p>
        <p class="sub">So do it now!</p>

        <div class="posters-box">
          <img src="/data/img/poster.png" style="width:100%;" :alt="websiteName" class="picture">
          <a :href="mainLink" target="_blank" rel="noopener noreferrer nofollow" class="btn">
              <span>Get my earpod Today!</span>
              <span class="icon"></span>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, redirect }) {

    try {
      const res = await app.$axios.$get('/data/product.json');
      const baseScore = res.baseScore;
      // 如果数组为0
      if (res.data.length == 0) {
        redirect('/error');
      }
      res.data.forEach((item,index) => {
        if (baseScore[index] == undefined) {
          item.score = String(Number(baseScore[index - 1]) - 0.2);
        } else {
          item.score = baseScore[index];
        }
      })

      res.data.push(res.data[0]);
      return { 
        mainLink: res.data[0].link,
        websiteName: res.websiteName,
        productList: res.data
      }
    } catch (error) {
      redirect('error');
    }

    
  },
  data() {

  },
  methods: {
    jump(url) {
      window.open(url);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/index.scss';
</style>