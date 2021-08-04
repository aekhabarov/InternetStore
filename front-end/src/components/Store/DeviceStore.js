import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
      { id: 3, name: "Зарядные устройства" },
      { id: 4, name: "Телевизоры" },
      { id: 5, name: "Мониторы" },
    ];

    this._brands = [
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://cdn1.ozone.ru/s3/multimedia-1/wc1200/6025766317.jpg",
      },
    ];

    this._devices = [
      { id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: "" },
    ];

    this._selectedType = {};

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type = null) {
    this._selectedType = type;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get selectedType() {
    return this._selectedType;
  }
}
