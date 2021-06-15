export default {
  getFieldName(formValue, formFields) {
    let names = [];
    let clone={};
    let keys = Object.keys(formValue);
    Object.keys(formFields).map((item) => {
      keys.map((i) => {
        let obj = formFields[item].find((o) => o.user_field_id == i);
        if (obj) {
          names.push(obj.name);
          const clonedObj = {};
          clonedObj[obj.name] = formValue[i];
          clone=Object.assign(clone,clonedObj)
        }
      });
    });
    return clone
  },
};
// export default {
//   getFieldName(formValue, formFields) {
//     const clone = (obj) => Object.assign({}, obj);
//     let names = [];
//     let keys = Object.keys(formValue);
//     Object.keys(formFields).map((item) => {
//       keys.map((i) => {
//         let obj = formFields[item].find((o) => o.user_field_id == i);
//         if (obj) {
//           names.push(obj.name);
//           const clonedObj = clone(formValue);
//           const targetKey = clonedObj[i];
//           delete clonedObj[i];
//           clonedObj[obj.name] = targetKey;
//           console.log(clonedObj);
//         }
//       });
//     });
//     return names;
//   },
// };
