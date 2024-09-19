import Checkbox from '@components/atoms/Checkbox'
import CountryField from '@components/atoms/CountryField'
import EmailField from '@components/atoms/EmailField'
import MessageField from '@components/atoms/MessageField'
import NumberField from '@components/atoms/NumberField'
import SelectField from '@components/atoms/SelectField'
import StateField from '@components/atoms/StateField'
import TextAreaField from '@components/atoms/TextAreaField'
import TextField from '@components/atoms/TextField'

export const fields = {
	checkbox: Checkbox,
	country: CountryField,
	email: EmailField,
	message: MessageField,
	number: NumberField,
	select: SelectField,
	state: StateField,
	text: TextField,
	textarea: TextAreaField,
}
