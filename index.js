const functions = require('@google-cloud/functions-framework');
const admin = require('firebase-admin');

// Configuration
const projectId = process.env.GCP_PROJECT;

const serviceAccount = {
  type: process.env.GCP_TYPE,
  project_id: process.env.GCP_PROJECT,
  private_key_id: process.env.GCP_PRIVATE_KEY_ID,
  private_key: process.env.GCP_PRIVATE_KEY,
  client_email: process.env.GCP_CLIENT_EMAIL,
  client_id: process.env.GCP_CLIENT_ID,
  auth_uri: process.env.GCP_AUTH_URI,
  token_uri: process.env.GCP_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.GCP_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.GCP_CLIENT_X509_CERT_URL,
  universe_domain: process.env.UNIVERSE_DOMAIN
};

// // Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId,
});

functions.http('review-summary', async (req, res) => {
  try {
    const { product_name, reviews } = req.body;
    const ref = await admin.firestore().collection("review-summary").add({
      product_name: product_name || "None",
      reviews: reviews || "None"
    })
    const docRef = await admin.firestore().collection('review-summary').doc(ref.id);
    docRef.onSnapshot(
      (snap) => {
        if (snap.exists) {
          const output = snap.get('output');
          if (output) {
            res.send({
              data: output,
              documentId: ref.id,
              Type: true,
            });
          }
        }
      },
      (error) => {
        console.error('Error listening to document additions: ', error);
        res.status(500).send('Error listening to document changes');
      }
    );
  } catch (error) {
    console.error('Error adding document: ', error);
    res.status(500).send('Error adding document');
  }
});
// Cloud Function for test endpoint
functions.http('test', (req, res) => {
  res.json({
    data: "success",
    Type: true,
  });
});