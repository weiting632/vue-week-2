import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';






const site ='https://vue3-course-api.hexschool.io';


const app = createApp({
    data(){
        return{
            user: {
                username:'',
                password:'',
            }
        }
    },
    methods:{
       login(){
        const url =  `${site}/v2/admin/signin`;
        axios.post(url, this.user).then((res) => {
        //    const expired = res.data.expired;
        //    const token = res.data.token;
        const {expired,token} = res.data;  // 利用展開語法取得token ,expired
        document.cookie = `allenToken=${token}; expires=${new Date(expired)}; `;
        window.location = './products.html'; // 登入成功跳轉到產品頁面
        }).catch(err=>{
            console.log(err);
        })
       }
         
    }
})

app.mount('#app');
   
    
