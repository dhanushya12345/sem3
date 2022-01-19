import client from './Client'

const AdminLoginapi=(email,password,usertype)=>client.post("/login",{email,password,usertype});

export default {AdminLoginapi};