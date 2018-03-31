const { promisify } = require('util')

const mongoose = require('mongoose')
const AWS = require('aws-sdk')
const uuid = require('node-uuid')
const authenticate = require('mm-authenticate')(mongoose)
const { Team, Script } = require('mm-schemas')(mongoose)
const { send, buffer } = require('micro')

const COMPILE_DIR = process.env.COMPILE_DIR;

if(!COMPILE_DIR) {
  throw new Error('An empty COMPILER_DIR should be created and path set in environment prior to running this')
}

mongoose.connect(process.env.MONGO_URL)
mongoose.Promise = global.Promise

const s3 = new AWS.S3({
  params: { Bucket: 'mechmania' }
})

const getObject = promisify(s3.getObject.bind(s3))

function fetchScript(scriptID) {
  return getObject({Key: team.latestScript.key})
}

async function main() {
  
}