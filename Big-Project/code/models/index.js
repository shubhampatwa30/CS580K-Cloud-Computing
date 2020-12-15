const mongoose = require('mongoose');
const url = 'mongodb+srv://plonkar1:prathamesh@cluster0.rfest.mongodb.net/cloudproject?retryWrites=true&w=majority';
mongoose.connect(url,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Successful !!');
    }

 
});
const Course = require("./project.model");
