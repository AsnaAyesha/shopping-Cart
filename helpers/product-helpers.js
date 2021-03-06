var db=require('../config/connection')
var collection=require('../config/collections');
const collections = require('../config/collections');
const { response } = require('express');
var objectId=require('mongodb').ObjectId
module.exports={
    addProduct:(product,callback)=>{
       // console.log(product);
        db.get().collection('product').insertOne(product).then((data)=>{
           /* console.log(data);*/
            callback(data.insertedId);
        })
    },

    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    },
    deleteProduct:(prodId)=>{
        return new Promise((resolve,reject)=>{
            console.log(prodId);
            console.log(objectId(prodId));
            db.get().collection(collection.PRODUCT_COLLECTION).deleteOne({_id:objectId(prodId)}).then((response)=>{
              //  console.log(response);
                resolve(response)
            })
        })
    }
}
