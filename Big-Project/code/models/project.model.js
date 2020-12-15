const mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    Username :{
        type : String,
        required : "Required",
        
    },
    Password:{
        type : String,
        required : "Required"
    },
    Groups:[{
        type : String,
    }]
},
{collection: 'projects'}

    
);

mongoose.model("project",projectSchema);


    


var groupSchema = new mongoose.Schema({
    Name :{
        type : String,
        required : "Required"
    },
    Members:[{type:String}]
},
{collection: 'group'}

    
);

mongoose.model("group",groupSchema)