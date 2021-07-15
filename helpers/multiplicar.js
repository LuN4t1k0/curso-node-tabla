const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, l  = false, h =12) =>{

    try {
    

        let salida, consola = '';
        for  (var i = 1; i <= h; i++){
            
        salida += `${base} x ${i} = ${base*i}\n`;
        consola += `${base} ${'x'.green} ${i} ${'='.cyan} ${base*i}\n`;
            
        }
        if(l){
            console.log("===============================".green);
            console.log("Tabla del:".blue, colors.yellow(base));
            console.log("===============================".green);
            
            console.log(consola)
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)

        return`tabla-${base}.txt`;
    } catch (error) {
        throw error;
        
    }



}

module.exports = {
    crearArchivo
}