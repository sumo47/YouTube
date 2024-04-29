const object = {
    name: "sumit",
    address: {
        city: "pune",
        state: "Maharashtra"
    }
}
// console.log(object?.address);
// console.log(object?.address?.name?.charAt(0).toUpperCase())
// console.log(!!(undefined))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(0))
// console.log(!!("0"))
console.log(Boolean(""))
console.log(Boolean(NaN))