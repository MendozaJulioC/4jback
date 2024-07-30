const {dblocal} = require('../config/dbConfig')

const infoCtrl={};

infoCtrl.getGISMedellin = async(req,res)=>{
    try {
        const response = await dblocal.query(`
        SELECT jsonb_build_object(
                'type', 'FeatureCollection',
                'features', jsonb_agg(features.feature)
            )
            FROM(
                select jsonb_build_object(
                    'type',	'Feature',
                    'id',	codcomuna,
                    'geometry',	ST_AsGeoJSON(geom)::jsonb,
                    'properties',	json_build_object(
                        'CODCOMUNA', codcomuna,
                        'NOMBRE', nombre,
                        'SUBTIPO', subtipo,
                        'AREAKM2', areakm2,
                        'AREAHA', areaha,
                        'LONGITUD', longitud,
                        'LATITUD', latitud
  
                    )
                )AS feature FROM (SELECT * FROM territorio.tbl_comunas )inputs) features;
        `);
        res.status(200).json({data: response.rows})
        
    } catch (error) {
        console.error('Error getGISComuna: ', error);
    }
}

infoCtrl.getGISBarrio = async(req, res)=>{
    try {
        const response = await dblocal.query(`
            SELECT jsonb_build_object(
                'type', 	'Feature',
                'features',	jsonb_agg(features.feature)
                
            )
            FROM (
                SELECT jsonb_build_object(
                    'type',	'Feature',
                    'id',	codbarrio,
                    'geometry', ST_AsGeoJSON(geom)::jsonb,
                    'properties', json_build_object(
                        'CODBARRIO', codbarrio,
                        'NOMBRE', nombre,
                        'CODCOMUNA', codcomuna,
                        'NOM_COMUNA', nombre_com,
                        'SUBTIPO', subtipo,
                        'AREAM2', aream2,
                        'AREAKM2', areakm2,
                        'AREAHA', areaha,
                        'LONGITUD', longitud,
                        'LATITUD', latitud
                    )
                )AS feature
                FROM ( SELECT * FROM territorio.tbl_barrios where  subtipo='Comuna') inputs)
                features;	 
                    
        `)
        res.status(200).json({data: response.rows})

    } catch (error) {
        console.error('Error getGISBarrios', error);
    }
}

infoCtrl.getGISVeredas = async(req, res)=>{
    try {
        const response = await dblocal.query(`
        SELECT jsonb_build_object(
            'type', 	'Feature',
            'features',	jsonb_agg(features.feature)
                )
        FROM (
            SELECT jsonb_build_object(
                'type',	'Feature',
                'id',	codbarrio,
                'geometry', ST_AsGeoJSON(geom)::jsonb,
                'properties', json_build_object(
                    'CODBARRIO', codbarrio,
                    'NOMBRE', nombre,
                
                    'CODCOMUNA', codcomuna,
                    'NOM_COMUNA', nombre_com,
                    'SUBTIPO', subtipo,
                    'AREAM2', aream2,
                    'AREAKM2', areakm2,
                    'AREAHA', areaha,
                    'LONGITUD', longitud,
                    'LATITUD', latitud
                    
                )
            )AS feature
            FROM ( SELECT * FROM territorio.tbl_barrios where subtipo='Corregimiento') inputs)
            features;		  
                
    `)
    res.status(200).json({data: response.rows})
    } catch (error) {
        console.error('Error getGISVeredas: ', error);
    }
}

infoCtrl.getGISCorregimientos = async(req, res)=>{
    try {
        const response = await dblocal.query(`
        SELECT jsonb_build_object(
                'type', 'FeatureCollection',
                'features', jsonb_agg(features.feature)
            )
            FROM(
                select jsonb_build_object(
                    'type',	'Feature',
                    'id',	codcomuna,
                    'geometry',	ST_AsGeoJSON(geom)::jsonb,
                    'properties',	json_build_object(
                        'CODCOMUNA', codcomuna,
                        'NOMBRE', nombre,
                        'SUBTIPO', subtipo,
                        'IDENTIFICA', identifica,
                        'AREAM2', aream2,
                        'AREAKM2', areakm2,
                        'AREAHA', areaha,
                        'LONGITUD', longitud,
                        'LATITUD', latitud
  
                    )
                )AS feature FROM (SELECT * FROM territorio.tbl_comunas where subtipo='Corregimiento' )inputs) features;
        `);
        res.status(200).json({data: response.rows})
    } catch (error) {
        console.error('Error getGISCorregimientos: ', error);
    }
}

infoCtrl.getGISPointColElect = async (req, res)=>{
    try {
        const response = await dblocal.query(`
            SELECT
                json_build_object(
                    'type', 'FeatureCollection',
                    'features', json_agg(ST_AsGeoJSON(t.*)::json)
                )
            FROM
            col_electoral.tbl_col_elect_point AS t 
        `)
        res.status(200).json({data: response.rows})
    } catch (error) {
        console.error('Error getGISPointColElect: ', error);
    }
}

infoCtrl.getGISComuna = async (req, res)=>{
    try {
        const response = await dblocal.query(`
        SELECT jsonb_build_object(
                'type', 'FeatureCollection',
                'features', jsonb_agg(features.feature)
            )
            FROM(
                select jsonb_build_object(
                    'type',	'Feature',
                    'id',	codcomuna,
                    'geometry',	ST_AsGeoJSON(geom)::jsonb,
                    'properties',	json_build_object(
                        'CODCOMUNA', codcomuna,
                        'NOMBRE', nombre,
                        'SUBTIPO', subtipo,
                        'IDENTIFICA', identifica,
                        'AREAM2', aream2,
                        'AREAKM2', areakm2,
                        'AREAHA', areaha,
                        'LONGITUD', longitud,
                        'LATITUD', latitud
  
                    )
                )AS feature FROM (SELECT * FROM territorio.tbl_comunas where subtipo='Comuna' )inputs) features;
        `);
        res.status(200).json({data: response.rows})

    } catch (error) {
        console.error('Error getGISComuna: ', error);
    }
}

infoCtrl.getGISPoblacionMedComunas = async(req, res)=>{
    try {
        const year = req.params.vigencia
        const response = await dblocal.query(`
        SELECT jsonb_build_object(
            'type', 'FeatureCollection',
            'features', jsonb_agg(features.feature)
        )
        FROM(
            select jsonb_build_object(
                'type',	'Feature',
                'id',	codcomuna,
                'geometry',	ST_AsGeoJSON(geom)::jsonb,
                'properties',	json_build_object(
                    'CODCOMUNA', codcomuna,
                    'NOMBRE', nombre,
                    'TOTAL', total,
                    'MUJERES', mujeres,
                    'HOMBRES', hombres,
                    'VIGENCIA', vigencia
                  )
            )AS feature FROM (
                select
                        geom,
                        territorio.tbl_comunas.codcomuna,
                        nombre,
                        sum(total) as total, 
                        sum(totmujeres) as mujeres ,
                        sum (tothombres) as hombres,
                        vigencia
                    from dateo.tbl_poblacion_comuna  
                    inner join territorio.tbl_comunas on
                        territorio.tbl_comunas.codcomuna = dateo.tbl_poblacion_comuna.codcomuna
                    where dateo.tbl_poblacion_comuna.vigencia = $1
                    group by territorio.tbl_comunas.codcomuna, vigencia
                    order by codcomuna
            
            )inputs) features;
        `, [year]) 
        res.status(200).json({data: response.rows})

    } catch (error) {
        console.error('Error getGISPoblacionMed: ', );
    }
}

infoCtrl.getGISPoblaMedBarrios = async(req, res)=>{
    try {
        const year = req.params.vigencia;
        const response = await dblocal.query(`
        SELECT jsonb_build_object(
            'type', 'FeatureCollection',
            'features', jsonb_agg(features.feature)
     )
     FROM(
         select jsonb_build_object(
             'type',	'Feature',
             'id',	codbarrio,
             'geometry',	ST_AsGeoJSON(geom)::jsonb,
             'properties',	json_build_object(
             'CODCOMUNA', codcomuna,
             'NOMBRECOMUNA', nombre_com,
             'CODBARRIO', codbarrio,
             'NOMBREBARRIO', nombre,
             'TOTALHOMBRE',totalhombre,
             'TOTALMUJER', totalmujer,
             'TOTAL',total
          )
     )AS feature FROM (
         select 
             geom,
             dateo.tbl_poblacion_barrios.codcomuna,
             territorio.tbl_barrios.nombre_com,
             territorio.tbl_barrios.codbarrio,
             territorio.tbl_barrios.nombre,
             totalhombre,
             totalmujer,
             total
         from dateo.tbl_poblacion_barrios 
         inner join territorio.tbl_barrios on 
             territorio.tbl_barrios.codbarrio = dateo.tbl_poblacion_barrios.codbarrio
         where vigencia= $1
     )inputs) features;
     `, [year]) 
     res.status(200).json({data: response.rows})


    } catch (error) {
        console.error('Error getGISPoblaMedBarrios', error);
    }
}

infoCtrl.getPoblacionMed = async(req, res)=>{
    try {
        const year = req.params.vigencia;
        const response = await dblocal.query(`
        select 
            sum(total) as total,
            sum(tothombres) as hombres, 
            sum (totmujeres) as mujeres,
            vigencia
        from dateo.tbl_poblacion_comuna where vigencia =$1 group by vigencia
        `, [year]);
        res.status(200).json({data: response.rows})
    } catch (error) {
        console.error('error getPoblacionMed ', error)
    }
}

infoCtrl.getRangoEdadSex = async(req, res)=>{
    try {
        const year = req.params.vigencia;
        const response = await dblocal.query(` 
            select 
                orderange,
                rango,
                sum(totalhombres * -1)as hombres,
                sum(totalmujeres) as mujeres,
                vigencia 
            from dateo.tbl_poblacion_comunas_edad_sexo
            where vigencia = $1
            group by 
            orderange,
                rango,
                vigencia 
            order by   orderange  desc
        `,[year]);
        res.status(200).json({data: response.rows})
    } catch (error) {
        console.error('Error getRangoEdadSex ', error);
    }
}

infoCtrl.getPoblaGrupos = async(req, res)=>{
    try {
        const year = req.params.vigencia;
        const response = await dblocal.query(`select * from dateo.total_rango_edad_vigencia($1)`,[year])
        res.status(200).json({data: response.rows})
        
    } catch (error) {
        console.error('Error getPoblaGrupos', error);
    }
}

infoCtrl.getIMCVArea = async(req, res)=>{
    try {
        const year = req.params.vigencia;
        const response = await dblocal.query(`select * from dateo.tbl_imcv_sector where vigencia = $1`, [year])
        res.status(200).json({data: response.rows})
    } catch (error) {
        console.error('Error getIMCVArea', error);
    }
}

infoCtrl.getIMCV = async(req, res)=>{
    try {
        let ciudad =[];
        let rural = [];
        let urbano =[];
        const vigencias = await dblocal.query(`select vigencia as label from dateo.tbl_imcv_sector group by vigencia order by vigencia`)
        const response = await dblocal.query(`select * from dateo.tbl_imcv_sector`)
       
        for (let index = 0; index < response.rows.length; index++) {
            if(response.rows[index].codarea=='-3'){ciudad.push({value : parseFloat(response.rows[index].results)})}
            if(response.rows[index].codarea=='-2'){urbano.push({value : parseFloat(response.rows[index].results)})}
            if(response.rows[index].codarea=='-1'){rural.push({value : parseFloat(response.rows[index].results)})}
        }
        res.status(200).json({
            category: vigencias.rows,
            ciudad,
            rural,
            urbano
        })
    } catch (error) {
        console.error('Error getIMCV', error);
    }
}

infoCtrl.getIMCVterritoriovigencias = async(req, res)=>{
    try {
        const year = req.params.vigencia;
        const response = await dblocal.query(` 
            SELECT jsonb_build_object(
            'type', 'FeatureCollection',
            'features', jsonb_agg(features.feature)
            )
            FROM(
            select jsonb_build_object(
                'type',	'Feature',
                'id',	codcomuna,
                'geometry',	ST_AsGeoJSON(geom)::jsonb,
                'properties',	json_build_object(
                    'CODCOMUNA', codcomuna,
                    'NOMBRE', nombre,
                    'VIGENCIA', vigencia,
                    'RESULTADO', results
                )
            )AS feature FROM (	select 
                                    dateo.tb_imcv_comunas.codcomuna,
                                    territorio.tbl_comunas.nombre,
                                    vigencia, 
                                    results,
                                    geom
                                   from dateo.tb_imcv_comunas
                                   inner join territorio.tbl_comunas on 
                                        territorio.tbl_comunas.codcomuna = dateo.tb_imcv_comunas.codcomuna
                                    where vigencia = $1 )
            inputs) features;
           `, [year]) 
           res.status(200).json({data: response.rows})
    } catch (error) {
        console.error('Error getIMCVterritoriovigencias', error);
    }
}

infoCtrl.getIPM = async (req, res)=>{
    try {
        let ciudad =[];
        let rural = [];
        let urbano =[];
        const vigencias = await dblocal.query(`select vigencia as label from dateo.tbl_ipm_sector group by vigencia order by vigencia`)
        const response = await dblocal.query(`select * from dateo.tbl_ipm_sector`)
       
        for (let index = 0; index < response.rows.length; index++) {
            if(response.rows[index].codarea=='-3'){ciudad.push({value : parseFloat(response.rows[index].results)})}
            if(response.rows[index].codarea=='-2'){urbano.push({value : parseFloat(response.rows[index].results)})}
            if(response.rows[index].codarea=='-1'){rural.push({value : parseFloat(response.rows[index].results)})}
        }
        res.status(200).json({
            category: vigencias.rows,
            ciudad,
            rural,
            urbano
        })
        
    } catch (error) {
        console.error('Error getIPM', error);
    }
}

infoCtrl.getIPMArea = async(req, res)=>{
    try {
        const year = req.params.vigencia;
        const response = await dblocal.query(`select * from dateo.tbl_ipm_sector where vigencia = $1`, [year])
        res.status(200).json({data: response.rows})
    } catch (error) {
        console.error('Error getIMCVArea', error);
    }
}

infoCtrl.getIPMComunas = async (req, res)=>{
    try {
        const year = req.params.vigencia
        const response =  await dblocal.query(` 
        SELECT jsonb_build_object(
            'type', 'FeatureCollection',
            'features', jsonb_agg(features.feature)
            )
            FROM(
            select jsonb_build_object(
                'type',	'Feature',
                'id',	codcomuna,
                'geometry',	ST_AsGeoJSON(geom)::jsonb,
                'properties',	json_build_object(
                    'CODCOMUNA', codcomuna,
                    'NOMBRE', nombre,
                    'VIGENCIA', vigencia,
                    'RESULTADO', results
                )
            )AS feature FROM (	
				
					select 
						 dateo.tbl_ipm_comunas.codcomuna,
						 territorio.tbl_comunas.nombre,
						 vigencia, 
						 ipm as results,
						 geom
						 from dateo.tbl_ipm_comunas
						 inner join territorio.tbl_comunas on 
						 territorio.tbl_comunas.codcomuna = dateo.tbl_ipm_comunas.codcomuna
						 where vigencia = $1
			)inputs) features;`,[year]) 
        res.status(200).json({data: response.rows})
    } catch (error) {
        console.error('Error getIPMComunas', error);
    }
}

infoCtrl.getIPEXarea = async(req, res)=>{
    try {
            let ciudad =[];
            let rural = [];
            let urbano =[];
            const vigencias = await dblocal.query(`select vigencia as label from  dateo.tbl_ipextreama_sector group by vigencia order by vigencia`)
            const response = await dblocal.query(`select * from dateo.tbl_ipextreama_sector `)
            for (let index = 0; index < response.rows.length; index++) {
                if(response.rows[index].codarea=='-3'){ciudad.push({value : parseFloat(response.rows[index].results)})}
                if(response.rows[index].codarea=='-2'){urbano.push({value : parseFloat(response.rows[index].results)})}
                if(response.rows[index].codarea=='-1'){rural.push({value : parseFloat(response.rows[index].results)})}
            }
            res.status(200).json({
                category: vigencias.rows,
                ciudad,
                rural,
                urbano
            })
    } catch (error) {
        console.error('Error getIPEXarea', error);
    }
}

infoCtrl.getIPEXterritoriovigencias = async(req, res)=>{
    try {
        const year = req.params.vigencia;
        const response = await dblocal.query(
            `
            SELECT jsonb_build_object(
                'type', 'FeatureCollection',
                'features', jsonb_agg(features.feature)
                )
                FROM(
                select jsonb_build_object(
                    'type',	'Feature',
                    'id',	codcomuna,
                    'geometry',	ST_AsGeoJSON(geom)::jsonb,
                    'properties',	json_build_object(
                        'CODCOMUNA', codcomuna,
                        'NOMBRE', nombre,
                        'VIGENCIA', vigencia,
                        'RESULTADO', results
                    )
                )AS feature FROM (	select 
                                        dateo.tbl_ipextrema_comunas.codcomuna,
                                        territorio.tbl_comunas.nombre,
                                        vigencia, 
                                        results,
                                        geom
                                       from dateo.tbl_ipextrema_comunas
                                       inner join territorio.tbl_comunas on 
                                            territorio.tbl_comunas.codcomuna = dateo.tbl_ipextrema_comunas.codcomuna
                                        where vigencia = $1 )
                inputs) features;`, [year]) 
                res.status(200).json({data: response.rows})
        
    } catch (error) {
        console.error('Error getIPEXterritoriovigencias ');
    }
}

infoCtrl.getGiniArea = async(req, res)=>{
    try {
        let ciudad =[];
        let rural = [];
        let urbano =[];
        const vigencias = await dblocal.query(`select vigencia as label from  dateo.tbl_gini_area group by vigencia order by vigencia`)
        const response = await dblocal.query(`select * from dateo.tbl_gini_area`)
        for (let index = 0; index < response.rows.length; index++) {
            if(response.rows[index].codarea=='-3'){ciudad.push({value : parseFloat(response.rows[index].results)})}
            if(response.rows[index].codarea=='-2'){urbano.push({value : parseFloat(response.rows[index].results)})}
            if(response.rows[index].codarea=='-1'){rural.push({value : parseFloat(response.rows[index].results)})}
        }
        res.status(200).json({
            category: vigencias.rows,
            ciudad,
            rural,
            urbano
        })
    } catch (error) {
        console.error('Error getIPEXarea', error);
    }
}

infoCtrl.getListComunas = async (req, res)=>{
    try {
        const response = await dblocal.query(`select codcomuna, nombre from territorio.tbl_comunas order by codcomuna`)
        res.status(200).json({
            data: response.rows
        })
    } catch (error) {
        console.error('Error getListComunas', error);
    }
}

infoCtrl.getListBarriosxComunas = async (req, res)=>{
    try {const Comuna = req.params.codcomuna;
        const response = await dblocal.query(` 
        select codcomuna,codbarrio,nombre from territorio.tbl_barrios where codcomuna=$1 order by codcomuna
        `,[Comuna])
        res.status(200).json({
            data: response.rows
        })
    } catch (error) {
        console.error('Error getListBarriosxComunas ', error);   
    }
}

infoCtrl.getListBarrios = async (req, res)=>{
    try {
       
        const response = await dblocal.query(` 
            select codcomuna,codbarrio,nombre from territorio.tbl_barrios  order by codcomuna
        `)
        res.status(200).json({
            data: response.rows
        })
    } catch (error) {
        console.error('Error getListbarrios', error);   
    }
}

infoCtrl.getGISBarrioTotal = async(req, res)=>{
    try {
        const response = await dblocal.query(`
            SELECT jsonb_build_object(
                'type', 	'Feature',
                'features',	jsonb_agg(features.feature)
                
            )
            FROM (
                SELECT jsonb_build_object(
                    'type',	'Feature',
                    'id',	codbarrio,
                    'geometry', ST_AsGeoJSON(geom)::jsonb,
                    'properties', json_build_object(
                        'CODBARRIO', codbarrio,
                        'NOMBRE', nombre,
                        'CODCOMUNA', codcomuna,
                        'NOM_COMUNA', nombre_com,
                        'SUBTIPO', subtipo,
                        'AREAM2', aream2,
                        'AREAKM2', areakm2,
                        'AREAHA', areaha,
                        'LONGITUD', longitud,
                        'LATITUD', latitud
                    )
                )AS feature
                FROM ( SELECT * FROM territorio.tbl_barrios) inputs)
                features;	 
                    
        `)
        res.status(200).json({data: response.rows})

    } catch (error) {
        console.error('Error getGISBarrios', error);
    }
}

infoCtrl.getExpansionComuna = async(req, res)=>{
    try {
        const Comuna =req.params.codcomuna;
        const response = await dblocal.query(`
        select nombre, subtipo,areaha,areakm2, aream2 from territorio.tbl_comunas where codcomuna=$1
        `,[Comuna]);
        res.status(200).json({
            data: response.rows
        })
    } catch (error) {
        console.error('getExpansionComuna: ',error);
    }
}
// 

infoCtrl.getPoblacionComuna= async(req, res)=>{
    try {
        const Comuna =req.params.codcomuna;
        const response = await dblocal.query(`
        select tothombres,totmujeres, total from dateo.tbl_poblacion_comuna where codcomuna=$1 and vigencia=2023
        `,[Comuna]);
        res.status(200).json({
            data: response.rows
        })
    } catch (error) {
        console.error('Error getPoblacionComuna:  ', error);
    }
}

infoCtrl.getBarriosTable= async (req, res)=>{
    try {
        const Comuna =req.params.codcomuna;
        const response = await dblocal.query(`
        select 
        dateo.tbl_poblacion_barrios.codcomuna,
        dateo.tbl_poblacion_barrios.codbarrio,
        territorio.tbl_barrios.nombre,
        totalhombre,totalmujer,total,
        aream2,areakm2,areaha
        from dateo.tbl_poblacion_barrios 
        left join territorio.tbl_barrios on  territorio.tbl_barrios.codbarrio = dateo.tbl_poblacion_barrios.codbarrio
        where dateo.tbl_poblacion_barrios.codcomuna=$1 and vigencia=2023
        `,[Comuna]);
        res.status(200).json({
            data: response.rows
        })
        
    } catch (error) {
        console.error('Error getBarriosTable');
    }
}

infoCtrl.getVeredas= async(req, res)=>{
    try {
        const Comuna =req.params.codcomuna;
        const response = await dblocal.query(`
        select
        codbarrio,nombre,aream2,areakm2,areaha
        from territorio.tbl_barrios
        where codcomuna=$1
        `,[Comuna]);
        res.status(200).json({
            data: response.rows
        })
        
    } catch (error) {
        console.error('Error getVeredas', error);
    }
}

 infoCtrl.getInversionComuna = async(req, res)=>{
    try {
        const Comuna =req.params.codcomuna;
        const response = await dblocal.query(`
        select codcomuna_georeporte, vigencia_georeporte, sum(inversion_georeporte) as inversion   from dateo.tbl_spie_uspdm_inverpublica_geo 
        where codcomuna_georeporte=$1 and vigencia_georeporte >=2016
        group by codcomuna_georeporte, vigencia_georeporte
        order by vigencia_georeporte
        `,[Comuna]);
        res.status(200).json({
            data: response.rows
        })
        
    } catch (error) {
        console.error('Error getInversionComuna: ',error );
    }
 }

 infoCtrl.getCuentasInversion = async(req, res)=>{
    try {
        const response = await dblocal.query(`select * from dateo.tbl_cuentas_inverpublica`);
        res.status(200).json({data: response.rows})
    } catch (error) {
        console.error('Error getCuentasInversion');
    }
 }

infoCtrl.getTipoCuentaResultado = async(req, res)=>{
    try {
        const codigocuenta = req.params.codcuenta;
        const response = await dblocal.query(`  
        select 
        dateo.tbl_cuentas_sgtoinversionpublica.codcuenta,
        dateo.tbl_cuentas_inverpublica.cuenta,
        totales,
        vigencia
        from dateo.tbl_cuentas_sgtoinversionpublica
        inner join dateo.tbl_cuentas_inverpublica on dateo.tbl_cuentas_inverpublica.codcuenta = dateo.tbl_cuentas_sgtoinversionpublica.codcuenta
        where dateo.tbl_cuentas_sgtoinversionpublica.codcuenta	= $1
        `, [codigocuenta])
        res.status(200).json({data: response.rows})
    } catch (error) {
        console.error('Error getTipoCuentaResultado');
    }
}

infoCtrl.getSectorDNP = async(req, res)=>{
try {
    
    const response = await dblocal.query(` 
    select cod_sector ,
        dateo.tbl_sector_dnp.nom_sector
    from  dateo.tbl_spie_uspdm_inverpublica_geo inner join dateo.tbl_sector_dnp on dateo.tbl_sector_dnp.cod_sector_dnp= dateo.tbl_spie_uspdm_inverpublica_geo.cod_sector
    where vigencia_georeporte >=2016 group by cod_sector, dateo.tbl_sector_dnp.nom_sector
    order by  cod_sector, dateo.tbl_sector_dnp.nom_sector
    `);
    res.status(200).json({data: response.rows})


} catch (error) {
    console.error('error getSectorDNP ', error);
}


}

infoCtrl.getInversionComunaSector = async(req, res)=>{
    try {
        const codsector = req.params.cod_sector;
        const codcomuna = req.params.codcomuna;
        const response = await dblocal.query(`
        select 
        vigencia_georeporte,
        count(cod_sector),
        dateo.tbl_sector_dnp.nom_sector,
        sum(inversion_georeporte)as inversion
        from dateo.tbl_spie_uspdm_inverpublica_geo
        inner join dateo.tbl_sector_dnp on dateo.tbl_sector_dnp.cod_sector_dnp= dateo.tbl_spie_uspdm_inverpublica_geo.cod_sector
        where vigencia_georeporte >=2016 and codcomuna_georeporte=$1 and cod_sector=$2 
        group by vigencia_georeporte,cod_sector, dateo.tbl_sector_dnp.nom_sector, vigencia_georeporte
        order by cod_sector, vigencia_georeporte
        `, [codcomuna, codsector]);
        res.status(200).json({data: response.rows})



    } catch (error) {
        console.error('Error  getInversionComunaSector', error);
    }
}

infoCtrl.getInversionDepComuna = async(req, res)=>{
    try {
        const dependencia = req.params.cod_dependencia;
        const codcomuna = req.params.codcomuna;
        const response = await dblocal.query(
        ` 
            select
                vigencia_georeporte,
                cod_dep_georeporte,
                nombre_dep,
                sum (inversion_georeporte) as inversion
            from dateo.tbl_spie_uspdm_inverpublica_geo
            inner join dateo.tbl_dependencias on dateo.tbl_dependencias.cod_dep = cod_dep_georeporte
            where vigencia_georeporte >=2016 and cod_dep_georeporte= $1 and codcomuna_georeporte= $2
            group by vigencia_georeporte,
                cod_dep_georeporte,
                nombre_dep
            order by vigencia_georeporte
        `, [dependencia,codcomuna]
        );    
         res.status(200).json({data: response.rows})   



    } catch (error) {
        console.error('Error  getInversionDepComuna: ', error);
    }
}

infoCtrl.getAcumuladoInversionComuna = async (req, res)=> {
    try {
        const codcomuna = req.params.codcomuna;
        const response = await dblocal.query(` 
        select 
        (select 
             sum(inversion_georeporte)as inverfico 
             from dateo.tbl_spie_uspdm_inverpublica_geo
         where vigencia_georeporte >= 2016 and  vigencia_georeporte <= 2019 and codcomuna_georeporte= $1
        ),
        (select 
             sum(inversion_georeporte)as inverdaniel 
             from dateo.tbl_spie_uspdm_inverpublica_geo
         where vigencia_georeporte>= 2020 and  vigencia_georeporte <= 2023 and codcomuna_georeporte= $1
        )
        from dateo.tbl_spie_uspdm_inverpublica_geo
        group by inverfico, inverdaniel
        `, [codcomuna]);
        res.status(200).json({data: response.rows})   


    } catch (error) {
        console.error('Error getAcumuladoInversionComuna:', error);
    }
}

infoCtrl.getHitosMain = async(req, res)=>{
    try {
        const response = await dblocal.query(`
        select 
        id_hito,
        hito,desc_hito,
        tbl_main_hitos.codintervencion,
        tipo_intervencion,
        dap.tbl_hitos_proyecto.codproyecto,
        dap.tbl_hitos_proyecto.proyecto,
        valorproyecto,
        centro_gestor,
        dep_corto,
        poblacion,
        dap.tbl_hitos_fechas.fecha_proyectada,
         EXTRACT(MONTH FROM fecha_proyectada) AS mes,
        observaciones,
        urlimage
        from dap.tbl_main_hitos
        inner join dap.tbl_tipointervencion on tbl_tipointervencion.codintervencion = tbl_main_hitos.codintervencion
        inner join dap.tbl_hitos_proyecto on dap.tbl_hitos_proyecto.codhito =dap.tbl_main_hitos.id_hito
        inner join dap.tbl_hitos_fechas on dap.tbl_hitos_fechas.codhito = dap.tbl_main_hitos.id_hito
		order by fecha_proyectada
		
        `)
        if(response.rows.length>0){res.status(200).json({data: response.rows, success: true}) }else{res.status(401).json({success: false})  }  
    } catch (error) {
        console.error('Error getHitos: ', error);
        res.status(403).json({message: "Error consulta getHitos ",error, success: false})
    }
} 

infoCtrl.getHitosMes = async(req, res)=>{
    try {
        const mes = req.params.mes
        const response = await dblocal.query(`
        select 
        id_hito,
        hito,desc_hito,
        tbl_main_hitos.codintervencion,
        tipo_intervencion,
        dap.tbl_hitos_proyecto.codproyecto,
        dap.tbl_hitos_proyecto.proyecto,
        valorproyecto,
        centro_gestor,
        dep_corto,
        poblacion,
        dap.tbl_hitos_fechas.fecha_proyectada,
         EXTRACT(MONTH FROM fecha_proyectada) AS mes,
         EXTRACT(YEAR FROM fecha_proyectada) AS anio,
        observaciones,
        urlimage
        from dap.tbl_main_hitos
        inner join dap.tbl_tipointervencion on tbl_tipointervencion.codintervencion = tbl_main_hitos.codintervencion
        inner join dap.tbl_hitos_proyecto on dap.tbl_hitos_proyecto.codhito =dap.tbl_main_hitos.id_hito
        inner join dap.tbl_hitos_fechas on dap.tbl_hitos_fechas.codhito = dap.tbl_main_hitos.id_hito
                WHERE 
                EXTRACT(MONTH FROM fecha_proyectada) = $1
                order by fecha_proyectada;  
        `,[mes])
        if(response.rows.length>0){res.status(200).json({data: response.rows, success: true}) }else{res.status(401).json({success: false})  }  

    } catch (error) {
        console.error('Error getHitosMes: ', error);
        res.status(403).json({message: "Error consulta getHitosMes ",error, success: false})
    }
}

infoCtrl.getHitoDep = async(req,res)=>{
    try {
        const coddependencia = req.params.cod_dep
        const response = await dblocal.query(`
        select 
        id_hito,
        hito,
        desc_hito,
        dependencias.tbl_dependencias.cod_dep,
        nombre_dep,
        cod_intervencion,
        tipo_intervencion,
        codproyecto,nomproyecto,
        valorproyecto,
        poblacion_objetivo,fecha_proyectada,obsrvaciones,
        EXTRACT(MONTH FROM fecha_proyectada) AS mes ,
        EXTRACT(YEAR FROM fecha_proyectada) AS anio 
        from dap.tbl_hitos 
        inner join dependencias.tbl_dependencias on dependencias.tbl_dependencias.cod_dep = dap.tbl_hitos.cod_dep
        inner join dap.tbl_tipointervencion on dap.tbl_tipointervencion.codintervencion = dap.tbl_hitos.cod_intervencion
        where dependencias.tbl_dependencias.cod_dep= $1
        `,[coddependencia])
        if(response.rows.length>0){res.status(200).json({data: response.rows, success: true}) }else{res.status(401).json({success: false})  }  

        
    } catch (error) {
        console.error('Error getHitosMes: ', error);
        res.status(403).json({message: "Error consulta getHitosMes ",error, success: false})
    }
}

infoCtrl.getHitoDepMes = async(req, res)=>{
    try {
        const dependencia = req.params.cod_dep
        const mes = req.params.mes
        const response = await dblocal.query(`
        select 
        id_hito,
        hito,desc_hito,
        tbl_main_hitos.codintervencion,
        tipo_intervencion,
        dap.tbl_hitos_proyecto.codproyecto,
        dap.tbl_hitos_proyecto.proyecto,
        valorproyecto,
        centro_gestor,
        dep_corto,
        poblacion,
        dap.tbl_hitos_fechas.fecha_proyectada,
         EXTRACT(MONTH FROM fecha_proyectada) AS mes,
                EXTRACT(MONTH FROM fecha_proyectada) AS mes,
                    EXTRACT(YEAR FROM fecha_proyectada) AS anio,
        observaciones,
        urlimage
        from dap.tbl_main_hitos
        inner join dap.tbl_tipointervencion on tbl_tipointervencion.codintervencion = tbl_main_hitos.codintervencion
        inner join dap.tbl_hitos_proyecto on dap.tbl_hitos_proyecto.codhito =dap.tbl_main_hitos.id_hito
        inner join dap.tbl_hitos_fechas on dap.tbl_hitos_fechas.codhito = dap.tbl_main_hitos.id_hito
               
             WHERE 
                EXTRACT(MONTH FROM dap.tbl_hitos_fechas.fecha_proyectada) = $1 and   centro_gestor =$2 ;`, [mes, dependencia])   
        if(response.rows.length>0){res.status(200).json({data: response.rows, success: true}) }else{res.status(401).json({success: false})  }      
    } catch (error) {
        console.error('Error getHitoDepMes: ', error);
        res.status(403).json({message: "Error consulta getHitoDepMes ",error, success: false})
    }
}

infoCtrl.getHitoDepAnioMes = async(req, res)=>{
    try {
        const dependencia = req.params.cod_dep
        const mes = req.params.mes
        const anio = req.params.vigencia
        const response = await dblocal.query(`
        select 
            id_hito,
            hito,desc_hito,
            tbl_main_hitos.codintervencion,
            tipo_intervencion,
            dap.tbl_hitos_proyecto.codproyecto,
            dap.tbl_hitos_proyecto.proyecto,
            valorproyecto,
            centro_gestor,
            dep_corto,
            poblacion,
            dap.tbl_hitos_fechas.fecha_proyectada,

            EXTRACT(MONTH FROM fecha_proyectada) AS mes,
            EXTRACT(YEAR FROM fecha_proyectada) AS anio,
            observaciones,
            urlimage
        from dap.tbl_main_hitos
            inner join dap.tbl_tipointervencion on tbl_tipointervencion.codintervencion = tbl_main_hitos.codintervencion
            inner join dap.tbl_hitos_proyecto on dap.tbl_hitos_proyecto.codhito =dap.tbl_main_hitos.id_hito
            inner join dap.tbl_hitos_fechas on dap.tbl_hitos_fechas.codhito = dap.tbl_main_hitos.id_hito        
        WHERE 
            EXTRACT(MONTH FROM dap.tbl_hitos_fechas.fecha_proyectada) = $1
            and   centro_gestor = $2 
            and  EXTRACT(YEAR FROM fecha_proyectada) = $3
        
        `, [mes,dependencia,anio])
        if(response.rows.length>0){res.status(200).json({data: response.rows, success: true}) }else{res.status(401).json({success: false})  }       
    } catch (error) {
        console.error('Error getHitos: ', error);
        res.status(403).json({message: "Error consulta getHitos ",error, success: false})
    }
}

infoCtrl.getTotalHitosVigencia = async(req, res)=>{
    try {
        const response = await dblocal.query(`
            SELECT 
                EXTRACT(YEAR FROM dap.tbl_hitos_fechas.fecha_proyectada) AS vigencia,
                COUNT(*) AS conteo
            FROM dap.tbl_main_hitos
                INNER JOIN dap.tbl_tipointervencion 
                    ON tbl_tipointervencion.codintervencion = tbl_main_hitos.codintervencion
                INNER JOIN dap.tbl_hitos_proyecto 
                    ON dap.tbl_hitos_proyecto.codhito = dap.tbl_main_hitos.id_hito
                INNER JOIN dap.tbl_hitos_fechas 
                    ON dap.tbl_hitos_fechas.codhito = dap.tbl_main_hitos.id_hito
            GROUP BY EXTRACT(YEAR FROM dap.tbl_hitos_fechas.fecha_proyectada)
            ORDER BY vigencia;
        `)

        if(response.rows.length>0){res.status(200).json({data: response.rows, success: true}) }else{res.status(401).json({success: false})  }   
    } catch (error) {
        onsole.error('Error getTotalHitosVigencia: ', error);
        res.status(403).json({message: "Error consulta getTotalHitosVigencia ",error, success: false})
    }
}

infoCtrl.getTotalHitosFechas = async(req, res)=>{
    try {
        const response = await dblocal.query(
        `
            select 
                dap.tbl_hitos_fechas.fecha_proyectada,
                count( EXTRACT(MONTH FROM fecha_proyectada) )
            from dap.tbl_main_hitos
                inner join dap.tbl_tipointervencion on tbl_tipointervencion.codintervencion = tbl_main_hitos.codintervencion
                inner join dap.tbl_hitos_proyecto on dap.tbl_hitos_proyecto.codhito =dap.tbl_main_hitos.id_hito
                inner join dap.tbl_hitos_fechas on dap.tbl_hitos_fechas.codhito = dap.tbl_main_hitos.id_hito
            group by fecha_proyectada
            order by  dap.tbl_hitos_fechas.fecha_proyectada
        `) 
        if(response.rows.length>0){res.status(200).json({data: response.rows, success: true}) }else{res.status(401).json({success: false})  }   
        
    } catch (error) {
        console.error('Error getTotalHitosFechas: ', error);
        res.status(403).json({message: "Error consulta getTotalHitosFechas ",error, success: false})
    }
}

infoCtrl.getTotalAnioMes = async(req, res)=>{
    try {
        const response = await dblocal.query(
            `
            SELECT
            EXTRACT(YEAR FROM fecha_proyectada) AS year,
            EXTRACT(MONTH FROM fecha_proyectada) AS month,
            COUNT(*) AS count
        FROM dap.tbl_main_hitos
        INNER JOIN dap.tbl_tipointervencion ON tbl_tipointervencion.codintervencion = tbl_main_hitos.codintervencion
        INNER JOIN dap.tbl_hitos_proyecto ON dap.tbl_hitos_proyecto.codhito = dap.tbl_main_hitos.id_hito
        INNER JOIN dap.tbl_hitos_fechas ON dap.tbl_hitos_fechas.codhito = dap.tbl_main_hitos.id_hito
        GROUP BY
            EXTRACT(YEAR FROM fecha_proyectada),
            EXTRACT(MONTH FROM fecha_proyectada)
        ORDER BY
            EXTRACT(YEAR FROM fecha_proyectada),
            EXTRACT(MONTH FROM fecha_proyectada);
            `) 
            if(response.rows.length>0){res.status(200).json({data: response.rows, success: true}) }else{res.status(401).json({success: false})  }   
    } catch (error) {
        console.error('Error getTotalHitosFechas: ', error);
        res.status(403).json({message: "Error consulta getTotalHitosFechas ",error, success: false})
    }
}

infoCtrl.getHitoTipo = async(req, res)=>{
    try {
        const response = await dblocal.query(
            `
            select 
            dap.tbl_main_hitos.codintervencion,
            dap.tbl_tipointervencion.tipo_intervencion,
            count (dap.tbl_main_hitos.codintervencion) as total
            from dap.tbl_main_hitos
            inner join dap.tbl_tipointervencion on dap.tbl_tipointervencion.codintervencion =dap.tbl_main_hitos.codintervencion
            group by dap.tbl_main_hitos.codintervencion,
            dap.tbl_tipointervencion.tipo_intervencion
            `) 
        if(response.rows.length>0){res.status(200).json({data: response.rows, success: true}) }else{res.status(401).json({success: false})  }
    } catch (error) {
        console.error('Error getHitoTipo: ', error);
        res.status(403).json({message: "Error consulta getHitoTipo ",error, success: false}) 
    }
}

infoCtrl.getHitoVigMes = async(req, res)=>{
    try {
        const anio = req.params.vigencia;
        const mes = req.params.mes;

        const response = await dblocal.query(`
        select 
        id_hito,
        hito,desc_hito,
        tbl_main_hitos.codintervencion,
        tipo_intervencion,
        dap.tbl_hitos_proyecto.codproyecto,
        dap.tbl_hitos_proyecto.proyecto,
        valorproyecto,
        centro_gestor,
        dep_corto,
        poblacion,
        dap.tbl_hitos_fechas.fecha_proyectada,
        EXTRACT(MONTH FROM fecha_proyectada) AS mes,
        EXTRACT(YEAR FROM fecha_proyectada) AS anio,
        observaciones,
        urlimage
    from dap.tbl_main_hitos
        inner join dap.tbl_tipointervencion on tbl_tipointervencion.codintervencion = tbl_main_hitos.codintervencion
        inner join dap.tbl_hitos_proyecto on dap.tbl_hitos_proyecto.codhito =dap.tbl_main_hitos.id_hito
        inner join dap.tbl_hitos_fechas on dap.tbl_hitos_fechas.codhito = dap.tbl_main_hitos.id_hito        
    WHERE 
        EXTRACT(MONTH FROM dap.tbl_hitos_fechas.fecha_proyectada) = $1
        AND  EXTRACT(YEAR FROM fecha_proyectada) = $2
        `, [mes, anio])
        if(response.rows.length>0){res.status(200).json({data: response.rows, success: true}) }else{res.status(401).json({success: false})  }   
    } catch (error) {
        console.error('Error getHitoVigMes: ', error);
        res.status(403).json({message: "Error consulta getHitoVigMes ",error, success: false})
        
    }
}

infoCtrl.getHitosDepTotal = async (req, res)=>{
    try {
        const response = await dblocal.query(
            `select 
                dap.tbl_main_hitos.centro_gestor,
                dep_corto,
                count (centro_gestor) as total
            from dap.tbl_main_hitos
            group by dap.tbl_main_hitos.centro_gestor, dep_corto
            `) 
        if(response.rows.length>0){res.status(200).json({data: response.rows, success: true}) }else{res.status(401).json({success: false})  }
        
    } catch (error) {
        console.error('Error getHitosDepTotal: ', error);
        res.status(403).json({message: "Error consulta getHitosDepTotal ",error, success: false}) 
    }
}

infoCtrl.getCountAnioMesDep = async (req, res)=>{
    try {
        const anio = req.params.vigencia
        const mes = req.params.mes
        const response = await dblocal.query(` 
            select 
        	    dep_corto,
	 	        COUNT(dep_corto)
	        from dap.tbl_main_hitos
            inner join dap.tbl_tipointervencion on tbl_tipointervencion.codintervencion = tbl_main_hitos.codintervencion
            inner join dap.tbl_hitos_proyecto on dap.tbl_hitos_proyecto.codhito =dap.tbl_main_hitos.id_hito
            inner join dap.tbl_hitos_fechas on dap.tbl_hitos_fechas.codhito = dap.tbl_main_hitos.id_hito
            WHERE
			    EXTRACT(YEAR FROM fecha_proyectada)   = $1 AND  
			    EXTRACT(MONTH FROM fecha_proyectada)  = $2
		    GROUP BY dep_corto
            `, [anio, mes]
        )
        if(response.rows.length>0){res.status(200).json({data: response.rows, success: true}) }else{res.status(401).json({success: false})  }  
    } catch (error) {
        console.error('Error getHitoTipo: ', error);
        res.status(403).json({message: "Error consulta getHitoTipo ",error, success: false}) 
    }
}

infoCtrl.getDependenciasNew = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports = infoCtrl;