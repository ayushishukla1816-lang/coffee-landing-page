// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }




// import React from 'react'

// export default function App() {
//   return (
//     <div>
      
//     </div>
//   )
// }


// import React from 'react'

// function App() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {



  
  return (
    <div>
      <nav style={{height:100,width:"100%",backgroundColor:'#4B2E1F',display:'flex',}}>
        <img style={{height:100,width:100}} src="https://i.pinimg.com/1200x/18/31/bf/1831bf3c714427f25482b146d441ded1.jpg" alt="" />
        <ul style={{display:'flex',gap:50,padding:0,fontSize:18,justifyContent:'space-evenly',marginLeft:500,color:'white'}}>
          
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          </ul> 
        
        </nav>




       <section style={{height:400,backgroundColor:"#F5E6D3",display:'flex',justifyContent:'space-between',alignItems:'center',padding:20}}>
        <div style={{}}>
        <h1 style={{fontSize:42,color:"#4B2E1F"}}>Start Your Day With Great Coffee </h1>
        <p style={{fontsize:18,color:"#6B5548"}}>Freshly brewed coffe, made with love.</p>
        </div>
        <img  style={{height:300, width:500,borderRadius:20,margin:50}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtw9Ja3wR4rcQSDjDFy8a34gD53pQOewUZ2D4rqm4vPw&s=10" alt="" />
       </section>
       
          


          <div style={{padding:40,backgroundColor:"#FFF9F3"}}>
            <h1 style={{color:"#4B2E1F",fontSize:32,marginBottom:25}}>
              Our popular Coffees
            </h1>
            <div style={{display:'flex',gap:25,justifyContent:'center',flexWrap:'wrap'}}>

              <div style={{width:250,backgroundColor:'white',borderRadius:12,padding:15}}>
                <img style={{ width:"100%",height:180,obejctfit:"cover",borderRadius:10}}src="https://media.istockphoto.com/id/2168005130/photo/heart-shaped-latte-art-in-a-white-cup-with-coffee-beans-isolated-on-wooden-table-side-view-of.jpg?s=612x612&w=0&k=20&c=hQmWzRmUpVsrEVD97Dwy7jxk6FmRJhKbA2VNh_D5V9s=" alt="" />
                <h3>Cappuccino</h3>
                <p>129rs</p>
              </div>

              <div style={{width:250,backgroundColor:'white',borderRadius:12,padding:15}}>
                <img style={{ width:"100%",height:180,obejctfit:"cover",borderRadius:10}}src="https://www.foodandwine.com/thmb/9JyfZPcxlV9ubEeuSznhO-M4q0w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Americano-FT-BLOG0523-b8e18cc340574cc9bed536cceeec7082.jpg" alt="" />
                <h3>Americano</h3>
                <p>99rs</p>
              </div>

              <div style={{width:250,backgroundColor:'white',borderRadius:12,padding:15}}>
                <img style={{ width:"100%",height:180,obejctfit:"cover",borderRadius:10}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9aWCR_fGF0T0DSnI4x89G3_wPKupdo4UqjEru_DnPZg&s=10" alt="" />
                <h3>Cold coffee</h3>
                <p>149rs</p>
              </div>

                  <div style={{width:250,backgroundColor:'white',borderRadius:12,padding:15}}>
                <img style={{ width:"100%",height:180,obejctfit:"cover",borderRadius:10}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFAZyt_sKZl6wVmTHOH4f267eRWXBiNHPDoi29nhfPOw&s=10" alt="" />
                <h3>Iced caramel</h3>
                <p>189rs</p>
              </div>

            </div>
          </div>



          <footer style={{backgroundColor:"#4B2E1F",color:'white',textAlign:'center',
            padding:"25 10",marginTop:20}}>
              <h3>CoffeCo</h3>
              <p>Good Coffee. Better Days.</p>
              <p>Contact | Instagram</p>
              <p style={{fontSize:14}}>2026 CoffeeCo. All rights reserved.</p>
            </footer>
       </div>
  
  )
}

export default App
