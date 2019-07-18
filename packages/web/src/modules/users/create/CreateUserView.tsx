import { Field, Form, Formik, FormikActions } from 'formik'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import uuid from 'uuid'
import * as Yup from 'yup'
import { InputField } from '../../shared/InputField'
import { SelectField } from '../../shared/SelectField'
import { useUserDispatch } from '../state'

export interface ICreateUserFormValues {
  firstName: string
  secondName: string
  number: string
  expeditionDate: string
  typeIdentification: string
}

export const defaultListingFormValues: ICreateUserFormValues = {
  firstName: '',
  secondName: '',
  number: '',
  expeditionDate: '',
  typeIdentification: '',
}

const ValidaitonSchema = Yup.object({
  firstName: Yup.string().required(),
  secondName: Yup.string(),
  number: Yup.number().required(),
  expeditionDate: Yup.string().required(),
  typeIdentification: Yup.string()
    .required()
    .oneOf(['TI', 'CC']),
})

export default function CreateUsersView({ history }: RouteComponentProps) {
  const dispatch = useUserDispatch()
  const onSubmit = async (
    values: ICreateUserFormValues,
    { setSubmitting }: FormikActions<ICreateUserFormValues>
  ) => {
    setSubmitting(true)

    try {
      dispatch({
        type: 'ADD_PROSPECT',
        newUser: {
          id: uuid(),
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/rikas/128.jpg',
          first_name: values.firstName,
          last_name: values.secondName,
          is_valid: false,
          email: 'test@hotmail.com',
          number: parseInt(values.number, 10),
          expeditionDate: `${values.expeditionDate}T17:53:40.102Z`,
          typeIdentification: values.typeIdentification,
        },
      })

      history.push('/users/')
    } catch (error) {
      // tslint:disable-next-line
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik<ICreateUserFormValues>
      onSubmit={onSubmit}
      validationSchema={ValidaitonSchema}
      initialValues={defaultListingFormValues}
    >
      {({ isValid, isSubmitting }) => (
        <Form>
          <div className="flex items-center justify-start w-full flex-col py-16">
            <div className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 w-1/2">
              <h1 className="font-sans text-black  text-sm md:text-2xl font-thin mb-4">
                Add prospects
              </h1>

              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <Field
                    component={InputField}
                    label="Primer nombre"
                    placeholder="Johan"
                    name="firstName"
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <Field
                    component={InputField}
                    label="Segundo nombre"
                    placeholder="Villamil"
                    name="secondName"
                  />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                  <Field
                    component={InputField}
                    label="Numero de identificación"
                    placeholder="******************"
                    name="number"
                  />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-2">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <Field
                    component={InputField}
                    label="Fecha de expedicion"
                    placeholder="12/12/1994"
                    name="expeditionDate"
                    type="date"
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <Field
                    component={SelectField}
                    label="Tipo de identificacion"
                    name="typeIdentification"
                    options={[
                      { name: 'Cedula de ciudadania', id: 'CC' },
                      { name: 'Tarjeta de identidad', id: 'TI' },
                    ]}
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  disabled={!isValid || isSubmitting}
                  className={`px-4 py-4 text-white font-light tracking-wider rounded w-2/6 ${
                    !isValid || isSubmitting ? 'bg-gray-500' : 'bg-gray-900'
                  }`}
                  type="submit"
                >
                  Validar
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
