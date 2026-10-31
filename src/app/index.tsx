import { View, Text, TextInput, Pressable, FlatList, Image, TouchableHighlight, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

interface Product {
  id:number,
  title:string,
  description:string,
  image:string,
  price:number,
  category:string
}


interface NewProduct {
  title:string,
  description:string,
  image:string,
  price:number,
  category:string
}

const categories = ["top", "bottom", "accessories", "gadget", "other"]
const Index = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [product, setProduct] = useState<NewProduct>({
    title:"",
    description:"",
    image:"",
    price:0,
    category:""
  })
  const addProduct = async () => {
    try {
      await fetch("https://fakestoreapi.com/products", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:
          JSON.stringify({
            // id:products.length !== 0 ? products[products.length - 1].id + 1 : 1,
          title:product.title,
          description:product.description,
          image:product.image,
          price:product.price,
          category:product.category})
        
      })
      alert("product created successfully")
      setProduct({
        title:"",
        description:"",
        image:"",
        price:0,
        category:""
      })
    } catch(e){
      console.log(e)
    }
  }
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products", {
        method:"GET"
      })
      const data = await res.json()
      console.log(data)
      setProducts(data)
    } catch (e) {
      console.log(e)
    }
    
  }
  useEffect(() => {
    fetchProducts()
    return () => {}
  }, [])
  return (
    <View>
     <Text>Product Store </Text>
     <View>
      <Text>Add Product</Text>
      <TextInput placeholder={"New Product Title"} value={product.title} onChangeText={(text) => (setProduct((p) => ({...p, title:text})))}/>
      <TextInput placeholder={"New Product Description"} value={product.description} onChangeText={(text) => (setProduct((p) => ({...p, description:text})))}/>
      <TextInput placeholder={"New Product Image Url"} value={product.image} onChangeText={(text) => (setProduct((p) => ({...p, image:text})))}/>
      <TextInput placeholder={"0"}  value={product.price.toString()} onChangeText={(num) => (setProduct((p) => ({...p, price:Number(num)})))} keyboardType='number-pad' inputMode='numeric'/>
      <TextInput placeholder={"New Product Category"} value={product.category} />
        {categories.map((item, i) => (<TouchableHighlight key={i} onPress={() => setProduct((p) => ({...p, category:item}))}><Text>{item}</Text></TouchableHighlight>))}
        <Pressable onPress={addProduct} style={{backgroundColor:"blue", minWidth:100 }}>
          <Text style={{color:"white"}}>Submit</Text>
        </Pressable>
     </View>
     <FlatList 
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (<View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        <Image source={{uri:item.image}} width={100} height={100}/>
      </View>)}
     />
    </View>
  )
}

export default Index