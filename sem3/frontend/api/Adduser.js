import client from './Client'

const Adduser=(userInfo)=> client.post("/register",{userInfo});

export default {Adduser};