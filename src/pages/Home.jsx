import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
  const {currentUser}= useSelector((a)=>a.loginSlice)
 
  return (
    <div>
   <h1>Raporlama Sistemine Hos Geldiniz Sn. <h1 style={{color:'blue'}}>{currentUser ? ` ${currentUser.name}` : null}</h1></h1>
   <h1 style={{marginTop:'50px', color:'green', boxShadow:'1px 1px 5px 5px  green'}} >Sol Ustteki Menuden Rapor Tanimi Yapip Raporlar Kismindan Raporlarinizi kritere gore filtreleme,siralama, inceleme,silme-duzenleme islemleri yapabilirsiniz</h1>
   <h1 style={{marginTop:'50px', color:'green'}} >Sag ustteki butondan cikis yapabilirsiniz.. </h1>
   <h1 style={{marginTop:'50px', color:'red'}} >Unutmayin, her dosya numarasi farkli olmak zorundadir, ayni girdiginiz takdirde islemler tek bir islem olarak dusunulmektedir..  </h1>
   <h1 style={{marginTop:'50px', color:'red'}} >Unutmayin, localde oldugumuz icin  sayfa refresh yapildiginda login sayfasina atmaktadir. Sayfa gecislerinde sikinti yoktur..  </h1>
    </div>
  )
}

export default Home