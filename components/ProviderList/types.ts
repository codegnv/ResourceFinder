export interface IProvider {
  _id: string
  additional_information: string
  addresses: [IAddress]
  application: {
    is_required: Boolean
    apply_online: Boolean
    apply_in_person: Boolean
    phone: string
    website: string
    email: string
    other_info: string
  }
  appointment: {
    type: Boolean
    phone: string
    website: string
    email: string
    other_info: string
  }
  bus_routes: BusRouteType
  cost_info: string
  created_at: Date
  demographics_eligible: {
    adults: Boolean
    disabled: Boolean
    elderly: Boolean
    veterans: Boolean
    women: Boolean
    youth: Boolean
  }
  eligibility_criteria: string
  email: [EmailType]
  hours: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
  hotline: Boolean
  name: string
  phone_numbers: [IPhoneNumber]
  safeplace: Boolean
  services_provided: string
  service_area: string
  translation_available: string
  united_way_approval: Boolean
  updated_at: Date
  walk_ins: string
  website: [string]
}

export interface IAddress {
  line_1: string
  line_2: string
  city: string
  state: string
  zipcode: string
}

export interface IPhoneNumber {
  contact: string
  number: string
}

export type EmailType = string
export type BusRouteType = string
