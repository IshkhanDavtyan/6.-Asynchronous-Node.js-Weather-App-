// setTimeout(()=>{
//     console.log('2 Seconds')
// },2000)

// const names = ['Andrew','Ishkhan']

// const shortNames =names.filter((name)=>{
//     return name.length <=4
// })

// const geocode = (adress,callback)=>{
  
//   setTimeout(()=>{
//     const data = {
//         ayo:'yes',
//         voch:'no'
//     }
//     callback(data)

//   },1999)
//     }

// const data = geocode('phul',(data)=>{
//     console.log(data)
// })

const add = (a,b,call)=>{
    setTimeout(()=>{
       const sum = a+b; 
        call(sum)
    },2000)
}



add(1,4,(sum)=>{
    console.log(sum)
  
})
