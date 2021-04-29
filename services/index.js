

const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const {API_VERSION, IP_SERVER, PORT_DB} = require("./config");



mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/danielamorenol`, 
{useNewUrlParser :true}, (err, res) =>  {
    if(err) {
        throw err;
    } else {
        console.log("la conexion a la base de datos es correcta");
    
        app.listen(port, () => {
            console.log("##############################");
            console.log("##############################");
            console.log("##############################");
            console.log(`http://${IP_SERVER}:${PORT_DB}/api/${API_VERSION}/`);

        });
    }
});