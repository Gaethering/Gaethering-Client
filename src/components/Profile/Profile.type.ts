export interface EditPetForm {
  name: string;
  birth: string;
  gender: string;
  breed: string;
  weight: number;
  isNeutered: boolean;
  description: string;
  imageUrl: string;
}

export interface AddPetForm {
  petName: string;
  petBirth: number;
  weight: number;
  breed: string;
  petGender: 'MALE' | 'FEMALE';
  description: string;
  isNeutered: boolean;
}
