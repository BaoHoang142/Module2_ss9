import React, { useId, useState } from 'react'
import './Admin.css'
export default function Admin() {
    const [products,setProducts] = useState([
        {
            name:"Coca",
            img:'https://cf.shopee.vn/file/d1ade9834c0b5680ad5c82622fc47824',
            price:10000,
            quantity: 0,
            id:useId()

        },
        {
            name:"VinhHao",
            img:'https://th.bing.com/th/id/R.351161e8510a8e6427dd3cc98d614cb5?rik=n2S7b4vsIs70lA&pid=ImgRaw&r=0',
            price:15000,
            quantity: 0,
            id:useId()

        },
        {
            name:"Sprite",
            img:'https://th.bing.com/th/id/R.a63fd3ce19bfea6b1463a29bf6da488a?rik=46G5i8sLH0tJAw&pid=ImgRaw&r=0',
            price:20000,
            quantity: 0,
            id:useId()

        },
        {
            name:"Pepsi",
            img:'https://th.bing.com/th/id/R.ac2c63dec1f9dfcfe6331209f058fd62?rik=XA7Z4SRDaa9BoQ&pid=ImgRaw&r=0',
            price:30000,
            quantity: 0,
            id:useId()

        },
        {
            name:"Wake-up 247",
            img:'https://th.bing.com/th/id/R.94a509620fa797b8d59b526a3a55d240?rik=O6pNDx0Zwbd3Ew&riu=http%3a%2f%2ftmtdistribution.com%2fvnt_upload%2fproduct%2fmasan%2f247.jpg&ehk=WkpM7N5G2KJ5CVdm2PwSfEyESfUNx5oia97yZ7xW09s%3d&risl=&pid=ImgRaw&r=0',
            price:40000,
            quantity: 0,
            id:useId()

        },
        {
            name:"Ryo",
            img:'https://cdn.frozenfood.com.my/wp20200327/wp-content/uploads/2021/06/16140927/RIO-%E5%BE%AE%E9%86%BA%E6%9E%9C%E8%8C%B6%E4%B9%90%E6%A9%98%E4%B9%8C%E9%BE%99%E5%8F%A3%E5%91%B3-330ML.jpg',
            price:25000,
            quantity: 0,
            id:useId()

        },
        {
            name:"NumberOne",
            img:'https://th.bing.com/th/id/OIP.NaWSJ4JbvcvsTeoZx3_aHwHaHa?pid=ImgDet&rs=1',
            price:21000,
            quantity: 0,
            id:useId()

        },
        {
            name:"Sting",
            img:'https://cf.shopee.vn/file/d1ade9834c0b5680ad5c82622fc47824',
            price:14000,
            quantity: 0,
            id:useId()

        },
        {
            name:"Monster energy",
            img:'https://th.bing.com/th/id/R.bc91dc55e3876dfa9237a0ffea9b4cd7?rik=66zMmvIIUHz86Q&pid=ImgRaw&r=0',
            price:100000,
            quantity: 0,
            id:useId()

        },
        {
            name:"Lavie",
            img:'https://th.bing.com/th/id/R.89510d95af755eccc5e2d513a25b611f?rik=2whYqDYztE6tjA&pid=ImgRaw&r=0&sres=1&sresct=1',
            price:30000,
            quantity: 0,
            id:useId()

        },
        
    ]);
    //cong tru 
    const decre =(id)=>{
        let item = products.findIndex((e)=>{
            return e.id==id
        })
        let arr = [...products]
        arr[item].quantity=arr[item].quantity+1
        setProducts(arr)
        // setProducts(item.quantity)
    }
    const cre =(id)=>{
        let item = products.findIndex((e)=>{
            return e.id==id
        })
        let arr = [...products]
        if (arr[item].quantity!=0) {
            arr[item].quantity=arr[item].quantity-1
        } 
        setProducts(arr)
        // setProducts(item.quantity)
    }
    //them san pham vao gio hang
    let cart = products.filter((e)=>{
        return e.quantity !=0
    })
    // tog tien
    let sumMoney = cart.reduce((a,b)=>{
        return a+b.price*b.quantity
    },0)
    //reset giỏ hàng
    const resetCart = ()=>{
        let arr = [...products]
        for (let i = 0; i < arr.length; i++) {
            arr[i].quantity =0  
        }
        setProducts(arr)
    }
    // số tiền còn lại
    
  return (
    <>
    <div className="section">
            <header>
                <div className="header">
                    <h1>Số tiền còn lại của bạn là: {99999999999- sumMoney} VND</h1>
                </div>
            </header>
            <body>
                <div className="product">
                    {products.map((item)=>{
                        return <div className='productList'>
                            <div className="img">
                                <img src={item.img} />
                            </div>
                            
                            <div className="priceName">
                                <p>{item.name}</p>
                                <p>{item.price} VND</p>
                            </div>
                            <hr />
                            <div className="quantity">
                                <button onClick={()=>cre(item.id)}>Giảm</button>
                                <p>{item.quantity}</p>
                                <button onClick={()=>decre(item.id)}>Tăng</button>
                            </div>
                        </div>
                    })}
                </div>
            </body>
            <div className="cart">
                <h3>Giỏ hàng của bạn</h3>
                <div className='allInfor'>
                    {cart.map((item)=>{
                        return <div className="infor">
                            <p>{item.name}</p>
                            <p>{item.quantity}</p>
                        </div>   
                        })}
                </div>
                
                
                 <div className="sumMoney">
                    <p className='textSumMoney'>Tổng số tiền là: {sumMoney}</p>
                    <button onClick={resetCart}>Làm mới</button>
                </div>  
            </div>
    </div>
       
        
    





    </>
  )
}
