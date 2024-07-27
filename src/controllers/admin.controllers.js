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
        // res.status(200).json({message: 'Ok'})


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

adminCtrl.getGeoDistribuida = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/GeoDistribuida.xlsx');
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[2]])
         console.log(datos)
        //    for (let x = 0; x < datos.length; x++) {
        //      await dblocal.query(`
        //         INSERT INTO dateo.tbl_spie_uspdm_inverpublica_geo(
        //            cod_dep_georeporte, tipo_inversion_georeporte, codbpin_georeporte, codcomuna_georeporte, inversion_georeporte, territorio_cod_zona, territorio_cod_subzona, vigencia_georeporte, corte_georeporte, cod_sector, cod_comuna_gis)
        //             VALUES (
        //             '${datos[x].CodDependencia}',
        //             ${datos[x].EsPP},
        //             '${datos[x].CodBPIN}',
        //             ${datos[x].CodComuna},
        //             ${datos[x].InvDistribuida},
        //             '${datos[x].CodZona}',
        //             '${datos[x].CodSubZona}',
        //             '${datos[x].vigencia}',
        //             '${datos[x].Corte}',
        //             '${datos[x].Cod_Sector}',
        //             '${datos[x].cod_gis}'
        //         );
                
        //         `);
        //      console.log(datos[x].CodDependencia, " - ", datos[x].vigencia, " ok");
        //    }
            res.status(200).json({message: 'Ok'})
        
    } catch (error) {
        console.error('Error getGeoDistribuida ', error);
    }
}

adminCtrl.getCuentasInversionPublica = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/DatosFinancieros3.xlsx');
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[1]])
        console.log(datos)

        // for (let x = 0; x < datos.length; x++) {
        //     await dblocal.query(`
        //     INSERT INTO dateo.tbl_cuentas_inverpublica(
        //          codcuenta, cuenta)
        //      VALUES (
        //          '${datos[x].cod_cuenta}',
        //          '${datos[x].cuenta}'
        //      );
            
        //      `)
        //     console.log(datos[x].cod_cuenta," - ",datos[x].cuenta  ," ok")   
        // }

        res.status(200).json({message: 'Ok'})

        
    } catch (error) {
        console.error('Error getCuentasInversionPublica: ',error );
    }
}

adminCtrl.updateCuentasInversionPublica = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/DatosFinancieros3.xlsx');
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[1]])
        console.log(datos)

        //ojo hacer una consulta que permita saber si el codigo existe, si existe actualiza la linea, sino lo inserta

        // for (let x = 0; x < datos.length; x++) {
        //     await dblocal.query(`
        //     UPDATE dateo.tbl_cuentas_inverpublica
        //     SET  cuenta=    '${datos[x].cuenta}', descripcion_cuenta= '${datos[x].descripcion_cuenta}'
        //     WHERE codcuenta='${datos[x].cod_cuenta}';
        // `)

        //     console.log(datos[x].cod_cuenta," - ",datos[x].cuenta  ," ok")   
        // }

        res.status(200).json({message: 'Ok'})

        
    } catch (error) {
        console.error('Error getCuentasInversionPublica: ',error );
    }
}


adminCtrl.getSeguimientoCuentas = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/DatosFinancieros3.xlsx');
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[2]])
        console.log(datos)

        // for (let x = 0; x < datos.length; x++) {
        //     await dblocal.query(`
        //     INSERT INTO dateo.tbl_cuentas_sgtoinversionpublica(
        //        codcuenta, totales, vigencia)
        //      VALUES (
        //          '${datos[x].cod_cuenta}',
        //          ${datos[x].totales},
        //          ${datos[x].vigencia}
        //      );
            
        //      `)
        //     console.log(datos[x].cod_cuenta," - ",datos[x].vigencia  ," ok")   
        // }

        res.status(200).json({message: 'Ok'})

        
    } catch (error) {
        console.error('Error getCuentasInversionPublica: ',error );
    }
}

adminCtrl.getLideresArboletes = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/ConsolidadoArboletes.xlsx');
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]])
       // console.log(datos)

        // for (let x = 0; x < datos.length; x++) {
        //     await dblocal.query(`
        //     INSERT INTO estado.tbl_arboletes(
        //         cedula, nombre, puesto, mesa, celular)
               
        //      VALUES (
        //          ${datos[x].cedula},
        //          '${datos[x].Nombres}',
        //          '${datos[x].puesto}',
        //          ${datos[x].Mesa},
        //          '${datos[x].Celular}'
        //      );
            
        //      `)
        //     console.log(datos[x].cedula," - ",datos[x].vigencia  ," ok")   
        // }

        // res.status(200).json({message: 'Ok'})

        
    } catch (error) {
        console.error('Error getLideresArboletes: ',error );
    }
}

adminCtrl.getEafitAnal = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/eafitanal.xlsx');
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]])
        console.log(datos);
    //    for (let x = 0; x < datos.length; x++) {
    //     await dblocal.query(`
    //     INSERT INTO analitica.tbl_fuente(
    //         ticket, origen_tiquete, cod_tipofalla, tipo_falla, magnitud, cod_estado, estado, nombre, idservicio, servicio, cod_producto, producto, fecha_creado, falla_asignada_a, responsable, indisponibilidad, tiempo_solucion, cod_creador, creado_por, operador_servicio, fecha_solucion, mes_aplication_indisponibilidad, cod_ciudad, ciudad_falla, contacto, tiempo_monitoreo, tiempo_parada_reloj, lugar_falla, causa, accion, escalado_externo, razon_incumplimiento_ans, red_donde_se_realiza_el_evento, falla_solucionado_por, envia_informe, fecha_envio_informe, tiempo_envio_informe, grupo_apoyo, contratista_g_apoyo, tiquete_pe_asociado, disponibilidad_pactada, ciudad_origen_falla, ciudad_del_enlace, segmento_cliente, idserviciofin, noenlace)
    //          VALUES (
    //             ${datos[x].Tiquete},
    //             '${datos[x].Origen_Tiquete}',
    //             '${datos[x].Cod_Falla}', 
    //             '${datos[x].Tipo_Falla}',
    //             '${datos[x].Magnitud}', 
    //             '${datos[x].Cod_Estado}',
    //             '${datos[x].Estado}',
    //             '${datos[x].Nombre}',
    //             ${datos[x].IdServicio},
    //             '${datos[x].Servicio}',
    //             '${datos[x].Cod_Producto}',
    //             '${datos[x].Producto}',
    //             '${datos[x].FECHA_CREADO}',
    //             '${datos[x].Falla_Asignada_A}',
    //             '${datos[x].Responsable}',
    //             ${datos[x].Indisponibilidad},
    //             ${datos[x].Tiempo_De_Solucion},
    //             '${datos[x].Cod_Creador}',
    //             '${datos[x].Creada_Por}',
    //             '${datos[x].Operador_Del_Servicio}',
    //             '${datos[x].fecha_solucionado}',
    //             ${datos[x].Mes_Aplicacion_Indisponibilidad},
    //             '${datos[x].cod_ciudad}',
    //             '${datos[x].Ciudad_De_La_Falla}',
    //             '${datos[x].Contacto}',
    //             ${datos[x].Tiempo_DE_Monitoreo},
    //             ${datos[x].Tiempo_Parada_Reloj},
    //             '${datos[x].Lugar_Del_Falla}',
    //             '${datos[x].Causa}',
    //             '${datos[x].Accion}',
    //             '${datos[x].Escalado_externo}',
    //             '${datos[x].Razon_incumplimineto_ANS}',
    //             '${datos[x].Red_Donde_Se_Realiza_El_Evento}',
    //             '${datos[x].Falla_Solucionada_Por}',
    //             '${datos[x].Envio_Informe}',
    //             '${datos[x].Fecha_Envio_Informe}',
    //             '${datos[x].Tiempo_Envio_Informe}',
    //             '${datos[x].Grupo_De_Apoyo}',
    //             '${datos[x].Contratista_G_Apoyo}',
    //             '${datos[x].Tiquete_PE_Asociado}',
    //             '${datos[x].Disponibilidad_Pactada}',
    //             '${datos[x].Ciudad_Donde_Fue_La_Falla}',
    //             '${datos[x].ciudadenlace}',
    //             '${datos[x].Segmento_Cliente}',
    //             ${datos[x].IdServicio1},
    //             ${datos[x].NoEnlace} );
        
    //      `)
    //     console.log(datos[x].Tiquete," - ",datos[x].Origen_Tiquete  ," ok")   
    // }

    res.status(200).json({message: 'Ok'})

        
    } catch (error) {
        console.error('Error getHitos: ', error);
        res.status(403).json({message: "Error consulta getHitos ",error, success: false})

    }  
}

adminCtrl.getHitos = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/Mtz_Hitos_VF.xlsx')
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[2]])
        console.log(datos);
        // for (let x = 0; x < datos.length; x++) {
        //     await dblocal.query(`
        //         INSERT INTO dap.tbl_hitos (hito, desc_hito, cod_dep, codproyecto, nomproyecto, valorproyecto, cod_intervencion, poblacion_objetivo, fecha_proyectada, obsrvaciones)
        //         VALUES (
        //           '${datos[x].Hito}', 
        //           '${datos[x].desc_hito}',
        //            ${datos[x].centrogestor},
        //           '${datos[x].codproyecto}', 
        //           '${datos[x].nomproyecto}', 
        //            ${datos[x].valorproyecto},
        //            ${datos[x].codintervencion},
        //           '${datos[x].poblacion_objetivo}',
        //           '${datos[x].fecha_proyectada}',
        //           '${datos[x].Observaciones}' 
        //     );`)
      
        // }
    res.status(200).json({success: true})
    } catch (error) {
        console.error('Error getHitos: ', error);
        res.status(403).json({message: "Error consulta getHitos ",error, success: false})
    }
}
adminCtrl.getGeoHitos = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/Mtz_Hitos_VF.xlsx')
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[3]])
        // console.log(datos);
        for (let x = 0; x < datos.length; x++) {
            await dblocal.query(`
                INSERT INTO dap."tbl_geoHitos" (id_hito, cod_dep, cod_proyecto, vlr_proyecto, codcomuna, codintervencion, poblacion, fecha_proyectada, observaciones)
                VALUES (
                  ${datos[x].id_hito}, 
                  ${datos[x].centro_gestor},
                  ${datos[x].codigo_proyecto},
                  ${datos[x].valor_proyecto}, 
                  '${datos[x].codcomuna}',
                  ${datos[x].codintervencion},
                  '${datos[x].poblacion_objetivo}',
                  '${datos[x].fecha}',
                  '${datos[x].Observaciones}' 
            );`)
            console.log(datos[x].centro_gestor," - ",datos[x].id_hito  ," ok")   
        }

        res.status(200).json({success: true})

        
    } catch (error) {
        console.error('Error getGeoHitos: ', error);
        res.status(403).json({message: "Error consulta getGeoHitos ",error, success: false})
    }
}

adminCtrl.getMainHitos = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/Mtz_Hitos_PlataformaVF.xlsx')
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]])
        console.log(datos);
        // for (let x = 0; x < datos.length; x++) {
        //     await dblocal.query(`
        //  INSERT INTO dap.tbl_main_hitos(
        //    id_hito, hito, desc_hito, codintervencion,centro_gestor, dependencia, dep_corto, poblacion, observaciones)
        //         VALUES (
        //           ${datos[x].Codhito}, 
        //           '${datos[x].Hito}',
        //            '${datos[x].desc_hito}',
        //           ${datos[x].codintervencion}, 
        //           ${datos[x].Centro_gestor},
                
        //           '${datos[x].Dependencia}',
        //           '${datos[x].Dependencia_Corto}',
        //           '${datos[x].poblacion}' ,
        //     '${datos[x].observaciones}' 
        //     );`)
        //     console.log(datos[x].Codhito);
        // }
    } catch (error) {
        console.error('Error getMainHitos: ', error);
        res.status(403).json({message: "Error consulta getMainHitos ",error, success: false}) 
    }
}

adminCtrl.getMainHitosProyectos = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/Mtz_Hitos_PlataformaVF.xlsx')
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[1]])
        console.log(datos);
        // for (let x = 0; x < datos.length; x++) {
        //     await dblocal.query(`
        //     INSERT INTO dap.tbl_hitos_proyecto(codhito, codproyecto, proyecto, valorproyecto)
        //         VALUES (
        //           ${datos[x].Codhito}, 
        //           '${datos[x].Codproyecto}',
        //           '${datos[x].Proyecto}',
        //           ${datos[x].Valor_proyecto}
        //     );`)
        //     console.log(datos[x].Codhito);
        // }

    } catch (error) {
        console.error('Error getMainHitos: ', error);
        res.status(403).json({message: "Error consulta getMainHitos ",error, success: false}) 
    }
}
adminCtrl.getHitosComunas = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/Mtz_Hitos_PlataformaVF.xlsx')
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[4]])
        console.log(datos);
        //    for (let x = 0; x < datos.length; x++) {
        //     await dblocal.query(`
        //   INSERT INTO dap.tbl_hitos_comunas(codhito, codcomuna)
        //         VALUES (
        //           ${datos[x].Codhito}, 
        //           '${datos[x].Comuna}'
        
        //     );`)
        //     console.log(datos[x].Codhito);
        // }     
        
    } catch (error) {
        console.error('Error getHitosComunas: ', error);
        res.status(403).json({message: "Error consulta getHitosComunas ",error, success: false}) 
    }
}

adminCtrl.getHitoFecha= async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/Mtz_Hitos_PlataformaVF.xlsx')
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[5]])
        console.log(datos);
           for (let x = 0; x < datos.length; x++) {
            await dblocal.query(`
         INSERT INTO dap.tbl_hitos_fechas(codhito, fecha_proyectada)
                VALUES (
                  ${datos[x].Codhito}, 
                  '${datos[x].Fecha_mes}'
        
            );`)
            console.log(datos[x].Codhito);
        }     
        
    } catch (error) {
        console.error('Error getHitosComunas: ', error);
        res.status(403).json({message: "Error consulta getHitosComunas ",error, success: false}) 
    }
}


adminCtrl.getHitosPupis = async(req, res)=>{
    try {
        const excel = XLSX.readFile('src/public/Mtz_Hitos_PlataformaVF.xlsx')
        var nombreHoja = excel.SheetNames;
        var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[6]])
        console.log(datos);
           for (let x = 0; x < datos.length; x++) {
            await dblocal.query(`
            INSERT INTO dap.tbl_hitos_relevantes(codhito)
                VALUES (
                  ${datos[x].RELVANTES}
               
        
            );`)
            console.log(datos[x].Codhito);
        }     
        
    } catch (error) {
        console.error('Error getHitosComunas: ', error);
        res.status(403).json({message: "Error consulta getHitosComunas ",error, success: false}) 
    }
} 


// adminCtrl.getImageHitos = async(req, res)=>{
//     try {
//         const excel = XLSX.readFile('src/public/Mtz_Hitos_PlataformaVF.xlsx')
//         var nombreHoja = excel.SheetNames;
//         var datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]])
//         console.log(datos);
//            for (let x = 0; x < datos.length; x++) {
//             await dblocal.query(`
//         	UPDATE dap.tbl_main_hitos
// 	        SET  urlimage='${datos[x].imageurl}'
// 	        WHERE id_hito=  ${datos[x].Codhito};`)
//             console.log(datos[x].Codhito);
//         }     
        
//     } catch (error) {
//         console.error('Error getHitosComunas: ', error);
//         res.status(403).json({message: "Error consulta getHitosComunas ",error, success: false}) 
//     }
// }

module.exports = adminCtrl;