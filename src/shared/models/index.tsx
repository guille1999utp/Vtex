import { Dispatch, SetStateAction } from 'react'
export * from './rutas'

export interface AppContext {
	setFormData: Dispatch<SetStateAction<FormData>>
	formData: FormData
}

export type FormData = { [key: string]: any } 

export type UseContext = () => AppContext | null