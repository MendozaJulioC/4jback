const { Router } = require('express');
const inforouter = Router() ;

const { Auth } = require('../helpers/auth');
const infoCtrl = require('../controllers/info.controllers')


inforouter.get('/api/gis/medellin', infoCtrl.getGISMedellin )
    .get('/api/gis/barrios',infoCtrl.getGISBarrio )
    .get('/api/gis/total/divipola', infoCtrl.getGISBarrioTotal)
    .get('/api/gis/point/colelectoral', infoCtrl.getGISPointColElect )
    .get('/api/gis/veredas', infoCtrl.getGISVeredas)
    .get('/api/gis/corregimientos', infoCtrl.getGISCorregimientos)
    .get('/api/gis/comunas', infoCtrl.getGISComuna)
    .get('/api/gis/poblamed/comunas/:vigencia', infoCtrl.getGISPoblacionMedComunas) 
    .get('/api/datos/poblamed/total/:vigencia', infoCtrl.getPoblacionMed)
    .get('/api/gis/poblamed/barrios/:vigencia', infoCtrl.getGISPoblaMedBarrios)
    .get('/api/datos/poblamed/rangos/edad/sexo/:vigencia', infoCtrl.getRangoEdadSex)
    .get('/api/datos/poblamed/grupos/:vigencia', infoCtrl.getPoblaGrupos)
    .get('/api/datos/total/imcv', infoCtrl.getIMCV)
    .get('/api/datos/imcv/:vigencia', infoCtrl.getIMCVArea)
    .get('/api/gis/imcv/territorio/:vigencia', infoCtrl.getIMCVterritoriovigencias)
    .get('/api/datis/generales/ipm',infoCtrl.getIPM)
    .get('/api/datos/generales/ipm/:vigencia', infoCtrl.getIPMArea)
    .get('/api/datos/generales/territorio/ipm/:vigencia', infoCtrl.getIPMComunas)
    .get('/api/datos/generales/ipex', infoCtrl.getIPEXarea )
    .get('/api/gis/ipex/:vigencia', infoCtrl.getIPEXterritoriovigencias)
    .get('/api/datos/generales/gini', infoCtrl.getGiniArea)

inforouter.get('/api/datos/lista/comunas', infoCtrl.getListComunas)
        .get('/api/datos/lista/barrios/:codcomuna', infoCtrl.getListBarriosxComunas)
        .get('/api/datos/listado/barrios',infoCtrl.getListBarrios)

inforouter.get('/api/datos/expansion/geo/comuna/:codcomuna', infoCtrl.getExpansionComuna)
        .get('/api/datos/poblacion/geo/comuna/:codcomuna', infoCtrl.getPoblacionComuna) 
        .get('/api/datos/barrios/geo/:codcomuna', infoCtrl.getBarriosTable) 
        .get('/api/datos/veredas/geo/:codcomuna', infoCtrl.getVeredas)

inforouter.get('/api/datos/inversion/geo/:codcomuna', infoCtrl.getInversionComuna)
        .get('/api/datos/inversion/cuentas', infoCtrl.getCuentasInversion)
        .get('/api/datos/inversion/tipocuenta/:codcuenta', infoCtrl.getTipoCuentaResultado)
        .get('/api/datos/sectoresdnp/list', infoCtrl.getSectorDNP)
        .get('/api/datos/inversion/geo/comuna/sector/:cod_sector/:codcomuna',infoCtrl.getInversionComunaSector )
        .get('/api/datos/inversion/geo/dependencias/:cod_dependencia/:codcomuna', infoCtrl.getInversionDepComuna)
        .get('/api/datos/inversion/acumulada/comunas/:codcomuna', infoCtrl.getAcumuladoInversionComuna)


inforouter.get('/api/dap/hitos',infoCtrl.getHitosMain)
        .get('/api/dap/hitos/mes/:mes', infoCtrl.getHitosMes)
        .get('/api/dap/hitos/dependencias/:cod_dep', infoCtrl.getHitoDep)
        .get('/api/dap/hitos/mes/:mes/dependencias/:cod_dep', infoCtrl.getHitoDepMes)
        .get('/api/dap/hitos/mes/:mes/dependencias/:cod_dep/vigencia/:vigencia', infoCtrl.getHitoDepAnioMes)
        .get('/api/dap/total/hitos', infoCtrl.getTotalHitosVigencia)
        .get('/api/dap/total/hitos/fecha', infoCtrl.getTotalHitosFechas)
        .get('/api/dap/hitos/hitomesanio', infoCtrl.getTotalAnioMes)
        .get('/api/dap/hitos/tipo', infoCtrl.getHitoTipo)
        .get('/api/dap/hitos/totaldep', infoCtrl.getHitosDepTotal)
        .get('/api/dap/hitos/vigencia/:vigencia/mes/:mes', infoCtrl.getHitoVigMes)
        .get('/api/dap/')





  
module.exports = inforouter  