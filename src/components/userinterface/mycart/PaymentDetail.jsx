

export default function PaymentDetail()
{
    const steps = ["Cart", "Address", "Payment", "Summary"];  

    return(<div style={{marginTop:20,margin:5}}>
       <div style={{border:'0.5px solid #e2e2e2', width:'80%',borderRadius:20}}>
        <div style={{fontSize:20,fontWeight:800,fontFamily:'newsreader,selief',letterSpacing:0.5,lineHeight:1.2,margin:10,padding:10}}>Payment Details</div>

          <div style={{display:'flex',marginBottom:5,justifyContent:'space-between',marginTop:25}}>
            <div style={{color:'rgba(0, 0, 0, .65)',fontFamily:'JioType, helvetica, arial, sans-serif',fontWeight:550,fontSize:'1rem',letterSpacing:-0.07,lineHeight: 1.4285714286,marginLeft:30}}>
              MRP Total
            </div>
            <div style={{color:'rgba(0, 0, 0, .65)',fontFamily:'JioType, helvetica, arial, sans-serif',fontWeight:550,fontSize:'1rem',letterSpacing:-0.07,lineHeight: 1.4285714286,marginRight:20}}>
            $100.00
            </div>
        </div>
        
         <hr style={{margin:5,padding:0,width:'90%',marginLeft:15,marginTop:10}}/>


         <div style={{display:'flex',marginBottom:5,justifyContent:'space-between',marginTop:25}}>
            <div style={{color:'rgba(0, 0, 0, .65)',fontFamily:'JioType, helvetica, arial, sans-serif',fontWeight:550,fontSize:'1rem',letterSpacing:-0.07,lineHeight: 1.4285714286,marginLeft:30}}>
              Discount
            </div>
            <div style={{color:'#00b259',fontFamily:'JioType, helvetica, arial, sans-serif',fontWeight:550,fontSize:'1rem',letterSpacing:-0.07,lineHeight: 1.4285714286,marginRight:20}}>
            $10.00
            </div>
        </div>
        
         <hr style={{margin:5,padding:0,width:'90%',marginLeft:15,marginTop:10}}/>


         <div style={{display:'flex',marginBottom:5,justifyContent:'space-between',marginTop:25}}>
            <div style={{color:'rgba(0, 0, 0, .65)',fontFamily:'JioType, helvetica, arial, sans-serif',fontWeight:550,fontSize:'1rem',letterSpacing:-0.07,lineHeight: 1.4285714286,marginLeft:30}}>
              Delivery Fee (Scheduled)
            </div>
            <div style={{color:'#00b259',fontFamily:'JioType, helvetica, arial, sans-serif',fontWeight:550,fontSize:'1rem',letterSpacing:-0.07,lineHeight: 1.4285714286,marginRight:20}}>
                Free
            
            </div>
        </div>
        
         <hr style={{margin:5,padding:0,width:'90%',marginLeft:15,marginTop:10}}/>


          <div style={{display:'flex',marginBottom:5,justifyContent:'space-between',marginTop:25}}>
            <div style={{color:'rgba(0, 0, 0, .65)',fontFamily:'JioType, helvetica, arial, sans-serif',fontWeight:550,fontSize:'1rem',letterSpacing:-0.07,lineHeight: 1.4285714286,marginLeft:30}}>
              Total Amount
            </div>
            <div style={{color:'rgba(0, 0, 0, .65)',fontFamily:'JioType, helvetica, arial, sans-serif',fontWeight:550,fontSize:'1rem',letterSpacing:-0.07,lineHeight: 1.4285714286,marginRight:20}}>
            $90.00
            </div>
        </div>
        
         <hr style={{margin:5,padding:0,width:'90%',marginLeft:15,marginTop:10}}/>


      <button type="button" className="btn btn-primary" style={{border:'1px solid #ddd',borderRadius:25,width:'80%',letterSpacing:0.5,lineHeight:1.1,fontSize:18,fontWeight:550,margin:10,marginLeft:35}}>Place Order</button>

       </div>
    </div>)
}