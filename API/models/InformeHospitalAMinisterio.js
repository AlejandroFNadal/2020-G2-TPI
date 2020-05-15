const mongoose = require('mongoose');

const InformeHospitalAMinisterio = new mongoose.Schema({
    idCentro:{
        type:Number,
        required:true,
    },
    ReporteHospitalario:{
        cantidadMuertos:{
            type:Number,
            required:true
        },
        pacientesCurados:{
            type:Number,
            required:true
        },
        pacientesEnfermos:{
            type:Number,
            required:true
        },
        testRealizados:{
            positivos:{
                type:Number,
                required:true
            },
            negativos:{
                type:Number,
                required:true,
            }
        }
    },
    Pacientes:{
        dni:{
            type:Number,
            required:true
        },
        apellido:{
            type:String,
            required:true,
        },
        nombre:{
            type:String,
            required:true,
        },
        fechaNac:{
            type:Date,
            required:true
        },
        estado:{
            type:String,
            required:true
        }
    },
    Recursos:{
        camillasDisponibles:{
            type:Number,
            required:true
        },
        camillasOcupadas:{
            type:Number,
            required:true
        },
        jabonLitros:{
            type:Number,
            required:true
        },
        alcoholLitros:{
            type:Number,
            required:true
        },
        barbijos:{
            type:Number,
            required:true
        },
        jeringas:{
            type:Number,
            required:true
        },
        cofias:{
            type:Number,
            required:true
        }

    }
});


module.exports = mongoose.model('InformeHospitalAMinisterio',InformeHospitalAMinisterio );
