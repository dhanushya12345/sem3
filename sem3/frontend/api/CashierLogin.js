import client from './Client'

const CashierLogin=(email,password,usertype)=>client.post("/login",{email,password,usertype});

export default {CashierLogin};