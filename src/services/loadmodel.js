const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/prediction-cancer-storage1/model.json');
}
module.exports = loadModel;