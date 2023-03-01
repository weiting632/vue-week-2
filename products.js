







// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';





// const app = createApp({
//     data(){
//         return{
//             products: [],
//             // tempProduct:{}
//         };
//     },
//     methods:{
//         // checkLogin(){
//         //     console.log(`${site}api/user/check`);
//         //     const url = `${site}api/user/check`;
//         //     axios.post(url).then(res => {
//         //         console.log(res);
//         //         this.getProducts();
//         //     }).catch(err=>{
//         //         window.location = './login.html';
//         //     })
//         // },
//         // getProducts(){
//         //     //console.log(`${site}api/${api_path}/admin/products/all`);
//         //     const url = `${site}api/${api_path}/admin/products/all`;
//         //     axios.get(url,).then(res => {
//         //         console.log(res);
//         //         this.products = res.data.products;
//         //     });
//         // }
//     },
//     mounted() {
//         const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
//     axios.defaults.headers.common.Authorization = token;
//         // const cookieValue = document.cookie.split('; ')
//         // .find((row) => row.startsWith('allenToken'))
//         // ?.split('=')[1];
//         // console.log(cookieValue);
//         // axios.defaults.headers.common['Aurhorization'] = cookieValue;
//         // this.checkLogin();
//     }
// }).mount('#app');


import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const site ='https://vue3-course-api.hexschool.io/v2/';
const api_path = 'tomyalan978';

createApp({
  data() {
    return {
    
    products: [],
    tempProduct:{

    },
      
      
    }
  },
  methods: {
   checkLogin(){
      const url = `${site}api/user/check`;
      axios.post(url).then((res) =>{
        this.getProducts();
      })
      .catch((err) => {
        window.location = './login.html'; //登入失敗跳轉回登入頁面
      })
   },
   getProducts(){
      const  url = `${site}api/${api_path}/admin/products`;
      axios.get(url).then((res) => {
        console.log(res.data);
        this.products = res.data.products;
      })
   },
   openProduct(item) {
    this.tempProduct = item;
  }
    
  },
  mounted() {
    // 取出 Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)allenToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common['Authorization'] = token;
    
    this.checkLogin();
    
    
  }
}).mount('#app');