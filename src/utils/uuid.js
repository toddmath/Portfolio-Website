/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */
/* eslint-disable no-bitwise */

export function* UUIDV4Generator() {
  while (true) {
    yield ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a =>
      (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    )
  }
}

export function* UUIDGenerator() {
  while (true) {
    const data = (a, b) => {
      for (
        b = a = ''; // eslint-disable-line no-multi-assign
        a++ < 36;
        b +=
          (a * 51) & 52
            ? (a ^ 15 ? 8 ^ (Math.random() * (a ^ 20 ? 16 : 4)) : 4).toString(16)
            : '-'
      );
      return b
    }
    yield data()
  }
}

const UUIDv4 = () => UUIDV4Generator().next().value
const UUID = () => UUIDGenerator().next().value

export default { UUIDv4, UUID }

const uuid4 = UUIDV4Generator()
console.log(uuid4.next().value)
console.log(uuid4.next())
console.log(uuid4.next())
console.log(uuid4.next())
console.log(UUIDv4())
console.log(UUIDv4())
console.log(UUIDv4())

const u = UUIDGenerator()
console.log(u.next())

const u2 = UUID()
console.log(u2)
console.log(u2)
console.log(u2)
