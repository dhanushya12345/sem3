import client from './Client'

const Addcashier=(cashierInfo)=>client.post("/cashierregister",{cashierInfo});

export default {Addcashier};