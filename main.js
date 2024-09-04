import HashMap from "./HashMap.js";

const hashMap = new HashMap();
hashMap.set("TEST", "MY VALUE");
hashMap.set("TEST2", "MY VALUE2");
console.log(hashMap);

hashMap.remove("TEST");
console.log(hashMap);

/*
hashMap.set("TEST", "MY VALUE");
hashMap.set("TEST2", "MY VALU2E");

console.log("GET: " + hashMap.get("TEST2"));

console.log("Length: " + hashMap.length());

console.log(hashMap.keys());
console.log(hashMap.values());

console.log(hashMap);
*/
