import client from './Client'

const Login=(email,password,usertype)=>client.post("/login",{email,password,usertype});

export default {Login};