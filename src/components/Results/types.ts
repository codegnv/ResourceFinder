// TODO: Get this into data request areas
export interface IServices {
  id: number
  departments: Array<IDepartment>
  programs: Array<IProgram>
  tags: Array<ITag>
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
}
