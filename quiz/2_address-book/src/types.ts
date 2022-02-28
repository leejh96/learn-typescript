interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  home = "home",
  office = "office",
  studio = "studio",
}

export { PhoneType, PhoneNumberDictionary, Contact };
