import { lookupService } from "dns";
import dns from "dns/promises";

const address = await dns.lookup("www.google.com");

console.info(address.address);
console.info(address.family);
