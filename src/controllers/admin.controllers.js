const XLSX = require('xlsx');
const { dblocal } = require('../config/dbConfig');

const adminCtrl = {};

adminCtrl.getPoblacionBarrioMed = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/ReporteBarrios.xlsx')
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
        console.log(datos);

        // for (let i = 0; i < datos.length; i++) {
        //   await dblocal.query(` 
        //   INSERT INTO dateo.tbl_poblacion(
        //     codcomuna, codbarrio, totalhombre, totalmujer, total, vigencia)
        //     VALUES (
        //         '${datos[i].CodigoComuna}',
        //         '${datos[i].CodigoBarrio}',
        //          ${datos[i].TotalHombre},
        //          ${datos[i].TotalMujeres},
        //          ${datos[i].Total},
        //          ${datos[i].Vigencia}

                
        //     );
        //   `)
        //   console.log(datos[i].CodigoBarrio, " ok")   
            
        // }

    } catch (error) {
       console.error('Error getPoblacionMed: ', error);
    }
}

adminCtrl.getPoblacionComunasMed = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/ReporteBarrios.xlsx')
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[1]]);
        console.log(datos);

        // for (let i = 0; i < datos.length; i++) {
        //   await dblocal.query(` 
        //   INSERT INTO dateo.tbl_poblacion_comuna(
        //     codcomuna, vigencia, total, tothombres, totmujeres)


        //     VALUES (
        //         '${datos[i].codcomuna}',
        //          ${datos[i].vigencia},
        //          ${datos[i].total},
        //          ${datos[i].hombre},
        //          ${datos[i].mujer}

                
        //     );
        //   `)
        //   console.log(datos[i].codcomuna, " ok")   
            
        // }

    } catch (error) {
        console.error('Error ');
    }
}

adminCtrl.getRangoEdadVigenciaBarrios = async(req, res)=>{
    try {
        
     const excel = XLSX.readFile('src/public/ReporteBarrios.xlsx')
     var nombreHoja = excel.SheetNames;
     var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[2]])
    console.log(datos)

    //  for (let x = 0; x < datos.length; x++) {
       
        
    //     await dblocal.query (`
    //     INSERT INTO dateo.tbl_poblacion_barrios_edad_sexo(
    //        codcomuna, codbarrio, sexo, rango, total, vigencia)
    //         VALUES (
    //             '${datos[x].CodigoComuna}',
    //             '${datos[x].CodigoBarrio}',
    //             '${datos[x].Sexo}',
    //             '${datos[x].Rango}',
    //             ${datos[x].Total},
    //             ${datos[x].Vigencia}
    //         ); `) 
            
    //         console.log(datos[x].CodigoComuna, " ok")   
    //  }

    } catch (error) {
        console.error('Error getRangoEdadVigencia', error);
    }
}

adminCtrl.getRangoEdadSexVigenciaComunas= async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/ReporteBarrios.xlsx')
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[3]])
        console.log(datos)
        // for (let x = 0; x < datos.length; x++) {
        //     await dblocal.query (`
        //     INSERT INTO dateo.tbl_poblacion_comunas_edad_sexo(
        //       codcomuna, orderange ,rango, totalhombres, totalmujeres, total, vigencia)
        //         VALUES (
        //             '${datos[x].Comuna}',
        //              ${datos[x].orderrange},
        //             '${datos[x].rangos}',  
        //             ${datos[x].hombres},
        //             ${datos[x].mujeres},
        //             ${datos[x].total},
        //             ${datos[x].vigencia}
        //         ); `) 
                
        //         console.log(datos[x].Comuna, " ok")   
        //  }
        

    } catch (error) {
        console.error('Error getRangoEdadSexVigenciaComunas ', error);
    }
}

adminCtrl.getIMCVarea = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/ecv.xlsx');
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[1]])
        console.log(datos)
        // for (let x = 0; x < datos.length; x++) {
            
        //     await dblocal.query(`
        //         INSERT INTO dateo.tbl_imcv_sector( nom_area, vigencia, results, codarea)
        //         VALUES (          
        //              '${datos[x].nomarea}',
        //              ${datos[x].vigencia},
        //              ${datos[x].resultado},
        //              '${datos[x].codarea}'
        //         );
            
        //     `)
        //     console.log(datos[x].codarea, " ok")   
            
        // }
    } catch (error) {
        console.error('Error getIMCVarea', error);
    }
}

adminCtrl.getIMCVcomunas = async (req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/ecv.xlsx')
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]])
        console.log(datos)
        //     for (let x = 0; x < datos.length; x++) {
            
        //     await dblocal.query(`
        //     INSERT INTO dateo.tb_imcv_comunas(
        //      codcomuna, vigencia, results)
        //         VALUES (
        //             '${datos[x].codcomuna}',
        //             ${datos[x].vigencia},
        //             ${datos[x].resultado}
        //        );
            
        //     `)
        //     console.log(datos[x].codarea," - ",datos[x].vigencia  ," ok")   
            
        // }
        res.status(200).json({message: 'Ok'})

    } catch (error) {
        console.error('Error getIMCVcomunas', error);
       
    }
}

adminCtrl.getIPMtotal = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/ecv.xlsx')
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[5]])
        console.log(datos)
        // for (let x = 0; x < datos.length; x++) {
        //     await dblocal.query(`
        //     INSERT INTO dateo.tbl_ipm_sector(
        //         codarea, nom_area, results, vigencia)
        //         VALUES (
        //             '${datos[x].codarea}',
        //             '${datos[x].nomarea}',
        //             ${datos[x].resultado},
        //             ${datos[x].vigencia}
        //        );
            
        //     `)
        //     console.log(datos[x].codarea," - ",datos[x].vigencia  ," ok")   
           
        // }
        res.status(200).json({message: 'Ok'})

    } catch (error) {
        console.error('Error getIPMtotal ', error);
    }
}
 
adminCtrl.getIPMcomunas = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/ecv.xlsx')
        var nombreHoja =excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[4]])
        console.log(datos)
        // for (let x = 0; x < datos.length; x++) {
        //     await dblocal.query(`
        //     INSERT INTO dateo.tbl_ipm_comunas(
        //         codcomuna, ipm, vigencia)
        //         VALUES (
        //             '${datos[x].codcomuna}',
        //             ${datos[x].ipm},
        //             ${datos[x].vigencia}
        //        );
            
        //     `)
        //     console.log(datos[x].codcomuna," - ",datos[x].vigencia  ," ok")   
           
        // }
        res.status(200).json({message: 'Ok'})


    } catch (error) {
        console.error('Error getIPMComunas', error);
    }
}

adminCtrl.getIPEXarea = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/ecv.xlsx')
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[7]])
        console.log(datos)
        //  for (let x = 0; x < datos.length; x++) {
        //     await dblocal.query(`
        //    INSERT INTO dateo.tbl_ipextreama_sector(
	    //     codarea, area, results, vigencia)
        //         VALUES (
        //             '${datos[x].codarea}',
        //             '${datos[x].area}',
        //             ${datos[x].results},
        //             ${datos[x].vigencia}
        //        );
            
        //     `)
        //     console.log(datos[x].codarea," - ",datos[x].vigencia  ," ok")   
           
        // }
        res.status(200).json({message: 'Ok'})


    } catch (error) {
        console.error('Error getIPEXarea', error);
    }
}

adminCtrl.getIPEXcomunas = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/ecv.xlsx')
        var nombreHoja =excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[6]])
        console.log(datos)
        // for (let x = 0; x < datos.length; x++) {
        //     await dblocal.query(`
        //     INSERT INTO dateo.tbl_ipextrema_comunas(
	    //         codcomuna, results, vigencia)
        //         VALUES (
        //             '${datos[x].codcomuna}',
        //             ${datos[x].results},
        //             ${datos[x].vigencia}
        //        );
            
        //     `)
        //     console.log(datos[x].codcomuna," - ",datos[x].vigencia  ," ok")   
        // }
        res.status(200).json({message: 'Ok'})
    } catch (error) {
        console.error('Error getIPEXcomunas', error);
    }
}

adminCtrl.getGiniArea = async(req,res)=>{
    try {
        const excel = XLSX.readFile('src/public/ecv.xlsx');
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[3]]);
        console.log(datos)
        // for (let x = 0; x < datos.length; x++) {
        //     await dblocal.query(`
        //     INSERT INTO dateo.tbl_gini_area(
        //        codarea, results, vigencia, nomarea)
        //         VALUES (
        //             '${datos[x].codarea}',
        //             ${datos[x].resultado},
        //             ${datos[x].vigencia},
        //             '${datos[x].nomarea}'
        //        );
            
        //     `)
        //     console.log(datos[x].codarea," - ",datos[x].vigencia  ," ok")   
        // }
        res.status(200).json({message: 'Ok'})


    } catch (error) {
        console.error('Error getGiniArea', error);
    }
}

adminCtrl.getGiniComuna = async(req, res)=>{
    const excel = XLSX.readFile('src/public/ecv.xlsx');
    var nombreHoja = excel.SheetNames;
    var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[2]])
    console.log(datos)
    //    for (let x = 0; x < datos.length; x++) {
    //         await dblocal.query(`
    //         INSERT INTO dateo.tbl_gini_comunas(
    //             codcomuna, gini, vigencia)
    //         VALUES (
    //             '${datos[x].codcomuna}',
    //             ${datos[x].gini},
    //             ${datos[x].vigencia}
    //         );
            
    //         `)
    //         console.log(datos[x].codcomuna," - ",datos[x].vigencia  ," ok")   
    //     }
        res.status(200).json({message: 'Ok'})
}


module.exports = adminCtrl;