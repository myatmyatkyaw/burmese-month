import React from 'react'
import Baganone from './baganone.png'

const View = () => {
  return (
    <div className='container'>
      <div className='row'>  
      <div className='col-md-6 pt-5 mt-5'>
      <h1 className='mmtest pt-5 mt-5 pb-3' data-aos="zoom-in" data-aos-delay="700" >ရိုးရာပွဲတော်များ</h1>
     <p className='mmtest' data-aos="zoom-in" data-aos-delay="700">ပြည်ထောင်စုသမ္မတမြန်မာနိုင်ငံသည် အရှေ့တောင်အာရှတွင် ယဉ်ကျေးမှုအထွန်းကားဆုံးသော နိုင်ငံတစ်နိုင်ငံဖြစ်ပါသည်။ ရှေးခေတ်မြန်မာတို့၏ ဘာသာရေး၊ လူမှုရေး၊ နိုင်ငံရေး၊ ပညာရေးစသည်တို့ကို အခြေခံ၍ ပေါ်ပေါက်လာသော "ဆယ့်နှစ်လရာသီ ရိုးရာပွဲတော်များ" ကို မြန်မာပြက္ခဒိန်ဖြင့် သတ်မှတ်လေ့ရှိသည်။</p>
      
      <a href='https://www.gatsbytravel.com/myanmar/festivals/'>
      <button className='btnn' data-aos="zoom-in" data-aos-delay="700">See more ...</button>
      </a>
      </div>
      
      <div className='col-md-6'>
<img src={Baganone} style={{ width: "100%", height: "100%" }} data-aos="zoom-in" data-aos-delay="700"/>
      </div>
      </div>
    </div>
  )
}

export default View
