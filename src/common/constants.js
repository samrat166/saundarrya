export const productRegisterFormFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    xs: 12,
  },
  {
    name: "phoneNumber",
    label: "Number",
    type: "text",
    xs: 12,
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    xs: 12,
  },
  {
    name: "payment",
    label: "Payment",
    type: "enum",
    xs: 12,
  },
  {
    name: "isProductReady",
    label: "Is Product Ready?",
    type: "enum",
    xs: 12,
  },
  {
    name: "note",
    label: "Note",
    type: "text",
    xs: 12,
  },
  {
    name: "isCouriered",
    label: "Is Couriered?",
    type: "enum",
    xs: 12,
  },
  {
    name: "isProductReceivedByCustomer",
    label: "Received?",
    type: "enum",
    xs: 12,
  },
];

export const productRegisterFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
  },

  {
    name: "payment",
    label: "Payment?",
    type: "enum",
  },
  {
    name: "isProductReady",
    label: "Ready?",
    type: "enum",
  },

  {
    name: "isCouriered",
    label: "Couriered?",
    type: "enum",
  },
  {
    name: "isProductReceivedByCustomer",
    label: "Received?",
    type: "enum",
  },
];

export const users = [
  {
    _id: 12,
    name: "Samrat Ojha",
    phoneNumber: 9800976626,
    address: "Kathmandu,putalisadak",
    note: "asd",
    payment: "Yes",
    isProductReady: "Yes",
    isCouriered: "Yes",
    isProductReceivedByCustomer: "No",
  },
  {
    _id: 122,
    name: "Neha Koirala",
    phoneNumber: 9832426626,
    address: "Pokhara,lekhnath chowk",
    note: "asd",
    payment: "Half",
    isProductReady: "Yes",
    isCouriered: "Yes",
    isProductReceivedByCustomer: "No",
  },
];

export const addOrUpdateItemInArray = (array, object, pk = "_id") => {
  const indexInArray = array.findIndex((item) => item[pk] === object[pk]);
  if (indexInArray === -1) {
    array.unshift(object);
    return array;
  }
  array[indexInArray] = object;
  return array;
};
