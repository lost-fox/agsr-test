export interface Registries {
  id: number;
  title: string;
  code: string;
  class_software: string;
  date: string;
  url: string;
}

export interface RegistriesType {
  registries: Registries[];
}
