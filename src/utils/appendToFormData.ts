export const appendToFormData = (formData: FormData, key: string, value: any, transformFn?: (value: any) => any) => {
  if (value !== undefined && value !== null) {
    if (typeof value === "number" && !isNaN(value)) {
      formData.append(key, transformFn ? transformFn(value) : value);
    } else if (typeof value !== "number") {
      formData.append(key, transformFn ? transformFn(value) : value);
    }
  }
};

export const appendDataToFormData = (formData: FormData, data: any) => {
  for (const key in data) {
    if (Array.isArray(data[key])) {
      // If the property is an array, handle it separately
      data[key].forEach((item: any, index: number) => {
        if (typeof item === "object") {
          for (const subKey in item) {
            if (Array.isArray(item[subKey])) {
              // If the subproperty is an array, handle it separately
              item[subKey].forEach((subItem: any, subIndex: number) => {
                appendToFormData(formData, `${key}[${index}][${subKey}][${subIndex}]`, subItem);
              });
            } else {
              appendToFormData(formData, `${key}[${index}][${subKey}]`, item[subKey]);
            }
          }
        } else {
          appendToFormData(formData, `${key}[${index}]`, item);
        }
      });
    } else if (typeof data[key] === "object") {
      // If the property is an object, handle it separately
      for (const subKey in data[key]) {
        appendToFormData(formData, `${key}[${subKey}]`, data[key][subKey]);
      }
    } else {
      appendToFormData(formData, key, data[key]);
    }
  }
};
