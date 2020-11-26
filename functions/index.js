const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
//Email Configuration
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(functions.config().sendgrid.key)

const TEMPLATE_IDCONTACT = functions.config().templateid.key;

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});

exports.sendContactEmail = functions.https.onCall((data) => {

    const msg = {
        to: data.email, // Change to your recipient
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
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })

});