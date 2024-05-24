import jwt from 'jsonwebtoken';

const token = jwt.sign({ myPayloadData: 9999}, 'mysecretkey');
console.log(token);

const decodedValue = jwt.decode(token);
console.log(decodedValue);

const decodedValueByVerify = jwt.verify(token, 'dqwe');
console.log(decodedValueByVerify);