const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
  console.log('Eylülün Kedisi Mars Göreve Hazır!!');
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mars kavga'){
    
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mars'){
    msg.reply('Efendim!');
  }
});

client.on('message', msg => {
if (msg.content.toLowerCase() === 'mars seni öpebilir miyim?'){
msg.reply('Tabiki Öpebilirsinnn MUCK <3');
}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'yağmur kimdir?'){
    msg.reply('aslında tatlı biri ama Fahri Abiyi çok kızdırdı. Kayseri spora çok kötü tezahürat yapıyor. Emirhan kadar kafasına taş düşsün.');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'eylül kimdir?'){
    msg.reply('Dünyanın en tatlı kardeşi, aynı zamanda benim sahibim EYLÜL <3');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'fahri abi kimdir?'){
    msg.reply('Dünyanın en iyi abisi. Kendisi kız kardeşlerini çok kıskanır. Bitanedir. Kız kardeşlerinin sevgili yapmasını, tanımadığı erkeklerle konuşmasını istemez. Onun sözünü dinlerseniz pişman olmazsınız.');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'laykia kimdir?'){
    msg.reply('kürt takıntısı olan ama benden Türkçüsü yoktur diyen bi şahıstır. biraz deli biraz maldır. ama yerini bildiğinde uslu durduğunda iyidir. komiktir. grubun neşesidir. tişikkürler.');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'fahri abinin kuralları nedir mars?'){
    msg.reply('Herkes gibi Fahri abinin de kuralları var takibi!');
    setTimeout(function(){
    msg.reply('Bu kurallar sizin güvenliğiniz ve saçma sapan olaylardan uzak kalmanız için tasarlanmıştır!');
  }, 4000)
    setTimeout(function(){
      msg.reply('Lütfen Dikkatlice Okuyunuz aksi taktirde Fahri Abi Acımaz HAHAHAHA!');
    }, 8000)
    setTimeout(function(){
      msg.reply('BİRİNCİ KURAL SORAYA LAF YAPARSANIZ ANANIZI BİPPPPPPPPPPP!');
    }, 12000)
    setTimeout(function(){
      msg.reply('ŞAKA ŞAKA GÜL DİYE!');
    }, 16000)
    setTimeout(function(){
      msg.reply('NEYSE GEÇELİM KURALLARA!');
    }, 20000)
    setTimeout(function(){
      msg.reply('BİRİNCİ KURAL LÜTFEN YENİ TANIŞTIĞINIZ İNSANLARA AŞIK OLMAYIN FAHRİ ABİ İZİN VERMEZ (YAMUR KIZIM Bİ ANLAMADIN ŞUNU YAAAAAAĞĞ)!');
    }, 30000)
    setTimeout(function(){
      msg.reply('FAHRİ ABİ BİRİYLE GÖRÜŞMENİZDE SAKINCA BULUYORSA BENCE ONU DİNLEMELİSİNİZ ÇÜNKÜ O SİZİN BAŞINIZA BİR ŞEYLER GELMESİNDEN KORKUYOR VE KİMİN NE OLDUĞUNU EN İYİ O ANLAR ABİMMMMM <3 (Dİ Mİ GWEN??)!');
    }, 40000)
    setTimeout(function(){
      msg.reply('BİRİSİ SİZDEN HEMEN İNSTA İSTİYOSA ONA FAHRİ ABİNİN İNSTASINI VERİN VE ÖNCE ONUNLA TANIŞMASI GEREKTİĞİNİ SÖYLEYİN GERİSİNİ FAHRİ ABİM HALLEDER ;)!');
    }, 50000)
    setTimeout(function(){
      msg.reply('FAHRİ ABİ KURALLARDA DEĞİŞİKLİK YAPMA VE KURAL EKLEME HAKKINI HER DAİM ELİNDE TUTAR DİKKATLİ OLUN!');
    }, 60000)
    setTimeout(function(){
      msg.reply('EĞER KURALLAR HOŞUNUZA GİTMEDİYSE LÜTFEN BU SUNUCUDAN ÇIKIN AKSİ TAKTİRDE KURALLARI UMURSAMADAN BURDA DURANLAR FAHRİ ABİNİN HASMIDIR(CİDDİYİM)!');
    }, 70000)
    setTimeout(function(){
      msg.reply('MUTLU VE SAĞLIKLI GÜNLER :)!');
    }, 80000)
    setTimeout(function(){
      msg.reply('HE Bİ DE SAHİBİM OLAN SORAYI ÇOK SEVİYORUMMMMMMMMMMMMM   MUCKKKK <3!');
    }, 100000)
  }
});



client.login('MTIwMTE2MzU2OTg0NTI0Mzk4NA.GALoEx.KnqsR0r_tlQ46X_ckk9yHr-4e3fVYEGE0a4fqg')
