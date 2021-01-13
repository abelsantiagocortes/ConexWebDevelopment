const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
//Email Configuration
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(functions.config().sendgrid.key)

const TEMPLATE_IDCONTACT = functions.config().templateid.key;
const TEMPLATE_IDRESPONSECONTACT = functions.config().templateid2.key;
const TEMPLATE_IDSUBS = functions.config().templateidsuscripcion.key;
const TEMPLATE_IDRESSUBS = functions.config().templateidressuscripcion.key;



exports.sendContactEmail = functions.https.onCall((data) => {

    const msg = {
        to: "seposorio17@gmail.com", // Change to your recipient
        from: 'conexionyconscienciadev@gmail.com', // Change to your verified sender
        template_id: TEMPLATE_IDCONTACT,
        subject: 'Mensaje de contacto',
        dynamic_template_data: {
            name: data.name,
            email: data.email,
            msg: data.msg
        }
    }
    sgMail
        .send(msg)
        .then(() => {
            const msg2 = {
                to: data.email, // Change to your recipient
                from: 'conexionyconscienciadev@gmail.com', // Change to your verified sender
                template_id: TEMPLATE_IDRESPONSECONTACT,
            }
            sgMail
                .send(msg2)
                .then(() => {
                    return console.log('Email sent')
                })
                .catch((error) => {
                    console.error(error)
                })
            return console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })

});

exports.sendSubscriptionEmail = functions.https.onCall((data) => {

    const msg = {
        to: "seposorio17@gmail.com", // Change to your recipient
        from: 'conexionyconscienciadev@gmail.com', // Change to your verified sender
        template_id: TEMPLATE_IDSUBS,
        dynamic_template_data: {
            email: data.email,
        }
    }
    sgMail
        .send(msg)
        .then(() => {
            const msg2 = {
                to: data.email, // Change to your recipient
                from: 'conexionyconscienciadev@gmail.com', // Change to your verified sender
                template_id: TEMPLATE_IDRESSUBS,
                dynamic_template_data: {
                    email: data.email,
                }
            }
            sgMail
                .send(msg2)
                .then(() => {
                    return console.log('Email sent')
                })
                .catch((error) => {
                    console.error(error)
                })
            return console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })

});