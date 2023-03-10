export interface IService {
  criteria: Array<ICriteria>
  departments: Array<IDepartment>
  description: string
  has_age_requirement: boolean
  has_fee_requirement: boolean
  has_income_requirement: boolean
  id: number
  link: string
  name: string
  programs: Array<IProgram>
  tags: Array<ITag>
}

export interface ICriteria {
  created_at: string
  id: number
  name: string
}

export interface IDepartment {
  id: number
  created_at: string
  name: string
}

export interface IProgram {
  id: number
  created_at: string
  department_id: number
  name: string
}

export interface ITag {
  id: number
  created_at: string
  name: string
  preferred: boolean
  preferred_desktop: boolean
  preferred_mobile: boolean
}

export interface ICheckbox {
  id: number | string
  name: string
}
