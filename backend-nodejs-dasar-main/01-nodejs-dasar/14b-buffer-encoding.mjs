const buffer = Buffer.from("Rohmat Arief Budiarto", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("Um9obWF0IEFyaWVmIEJ1ZGlhcnRv", "base64");
console.info(bufferBase64.toString("utf8"));
