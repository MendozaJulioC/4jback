const { Router } = require('express');
const routerAdmin = Router();

const adminCtrl = require('../controllers/admin.controllers');

routerAdmin.get('/admin/generales/poblacion/barrios',adminCtrl.getPoblacionBarrioMed )
            .get('/admin/generales/poblacion/comunas', adminCtrl.getPoblacionComunasMed)
            .get('/admin/generales/poblacion/rangoedad/barrios', adminCtrl.getRangoEdadVigenciaBarrios)
            .get('/api/gis/poblamed/comunas/sexo/edad',adminCtrl.getRangoEdadSexVigenciaComunas)

routerAdmin.get('/admin/generales/imcv/area', adminCtrl.getIMCVarea)
            .get('/admin/generales/imcv/territorio', adminCtrl.getIMCVcomunas)
            .get('/admin/generales/ipm/area', adminCtrl.getIPMtotal)
            .get('/admin/generales/ipm/territorio', adminCtrl.getIPMcomunas)
            .get('/admin/generales/ipex/area', adminCtrl.getIPEXarea)
            .get('/admin/generales/ipex/comunas', adminCtrl.getIPEXcomunas)
            .get('/admin/generales/gini/area', adminCtrl.getGiniArea)
            .get('/admin/generales/gini/comunas', adminCtrl.getGiniComuna)
           

routerAdmin.get('/admin/generales/inversion/georreferenciada', adminCtrl.getGeoDistribuida)
        .get('/admin/inverpublica/cuentas', adminCtrl.getCuentasInversionPublica)
        .put('/admin/inverpublica/cuentas', adminCtrl.updateCuentasInversionPublica)
        .get('/admin/inverpublica/seguimiento/cuentas', adminCtrl.getSeguimientoCuentas)


        postgresql://jmendoza:ZL7LNOgjqSdQpOgZYAulCaKUq8bXsbey@dpg-cqjtnnhu0jms73dno950-a.oregon-postgres.render.com/dapmdntq

routerAdmin.get('/admin/dap/hitos', adminCtrl.getHitos)
.get('/admin/dap/hitos/geo',adminCtrl.getGeoHitos)
.get('/admin/dap/main/hitos', adminCtrl.getMainHitos)
.get('/admin/dap/main/proyectos', adminCtrl.getMainHitosProyectos)
.get('/admin/dap/main/comunas', adminCtrl.getHitosComunas)
.get('/admin/dap/main/fechas', adminCtrl.getHitoFecha)
.get('/admin/dap/main/relevantes', adminCtrl.getHitosPupis)

// .get('/admin/url', adminCtrl.getImageHitos)










            
module.exports = routerAdmin; 