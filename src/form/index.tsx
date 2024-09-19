import { Form as FormType } from '@types'
import { useRouter } from 'next/navigation'
import Script from 'next/script'
import React, { FC, Fragment, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import Confirmation from '@components/atoms/Confirmation'
import FormSubmit from '@components/atoms/FormSubmit'
import Paragraph from '@components/atoms/Paragraph'

import { fields } from '@form/fields'

import { buildInitialFormState } from '@form/buildInitialFormState'
import { submitEnquiry } from '@app/actions/enquiry'
import clsx from 'clsx'

export type Value = unknown

export interface Property {
	[key: string]: Value
}

export interface Data {
	[key: string]: Value | Property | Property[]
}

export type FormProps = {
	form: FormType
	className?: string
}

const PayloadForm: FC<FormProps> & {
	id?: string
} = (props) => {
	const {
		form: formFromProps,
		form: {
			id: formID,
			submitButtonLabel,
			confirmationType,
			redirect,
			confirmationMessage,
		} = {},
		className,
	} = props

	const formMethods = useForm({
		// @ts-ignore
		defaultValues: buildInitialFormState(formFromProps.fields),
	})
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = formMethods

	const [isLoading, setIsLoading] = useState(false)
	const [hasSubmitted, setHasSubmitted] = useState<boolean>()
	const [success, setSuccess] = useState<
		{ status?: string; message: string } | undefined
	>()
	const [error, setError] = useState<
		{ status?: string; message: string } | undefined
	>()

	const [confirmationMsg, setConfirmationMsg] = useState<
		| {
				confirmationMessage?:{
					root: {
						children: {
							type: string;
							version: number;
							[k: string]: unknown;
						}[];
						direction: ('ltr' | 'rtl') | null;
						format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
						indent: number;
						type: string;
						version: number;
					};
					[k: string]: unknown;
				} | null
				submissionData?: { field: string; value: unknown }[]
		  }
		| undefined
	>(undefined)

	const router = useRouter()

	const classes = clsx(
		'grid grid-cols-4 gap-x-6 gap-y-12 tablet:gap-x-8 tablet:gap-x-6  laptop:gap-x-8'
	)

	const onSubmit = useCallback(
		async (data: Data) => {
			let loadingTimerID: null | ReturnType<typeof setTimeout> = null

			const submitForm = async (gReCaptchaToken: string) => {
				setError(undefined)
				setSuccess(undefined)

				const dataToSend = Object.entries(data).map(([name, value]) => ({
					field: name,
					value,
				}))

				// delay loading indicator by 1s
				loadingTimerID = setTimeout(() => {
					setIsLoading(true)
				}, 1000)

				const req = submitEnquiry(dataToSend, formID!, gReCaptchaToken)
				const res = await req

				clearTimeout(loadingTimerID)

				if (res.message === 'failure') {
					setIsLoading(false)
					setError({
						status: res.status,
						message: res?.message || 'Internal Server Error',
					})

					return
				}

				setIsLoading(false)
				setHasSubmitted(true)

				setSuccess({
					status: res.status,
					message: res.message,
				})

				if (confirmationType === 'redirect' && redirect) {
					const { url } = redirect

					const redirectUrl = url

					if (redirectUrl) await router.push(redirectUrl)
				} else {
					if (
						confirmationMessage &&
						!Array.isArray(confirmationMessage) &&
						typeof confirmationMessage === 'object' &&
						'root' in confirmationMessage
					) {
						setConfirmationMsg({
							confirmationMessage: confirmationMessage,
							submissionData: dataToSend,
						})
					}
				}
			}

			grecaptcha.ready(() => {
				grecaptcha
					.execute(process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY!, {
						action: 'submitForm',
					})
					.then((gReCaptchaToken) => {
						console.log(gReCaptchaToken, 'response Google reCaptcha server')
						submitForm(gReCaptchaToken)
					})
			})
		},
		[router, formID, redirect, confirmationType]
	)

	return (
		<AnimatePresence>
			<div className={className}>
				<Script
					src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}`}
					strategy="afterInteractive"
				/>

				{hasSubmitted &&
					!isLoading &&
					confirmationType === 'message' &&
					success && (
						<Confirmation
							message={confirmationMsg?.confirmationMessage}
							submissionData={confirmationMsg?.submissionData}
						/>
					)}

				{isLoading && !hasSubmitted && (
					<motion.span
						initial={{
							opacity: 0,
							y: 16,
						}}
						animate={{
							y: 0,
							opacity: 1,
							transition: {
								y: { stiffness: 1000, velocity: -100 },
								duration: 0.3,
								delay: 0.2,
							},
						}}
						exit={{
							y: 16,
							opacity: 0,
							transition: {
								y: { stiffness: 1000 },
								delay: 0,
							},
						}}
					>
						<Paragraph paragraph="Loading, please wait.." />
					</motion.span>
				)}
				{error && (
					<motion.div
						initial={{
							opacity: 0,
							y: 16,
						}}
						animate={{
							y: 0,
							opacity: 1,
							transition: {
								y: { stiffness: 1000, velocity: -100 },
								duration: 0.3,
								delay: 0.2,
							},
						}}
						exit={{
							y: 16,
							opacity: 0,
							transition: {
								y: { stiffness: 1000 },
								delay: 0,
							},
						}}
						className="text-error"
					>{`${error.status || '500'}: ${error.message || ''}`}</motion.div>
				)}
				{!hasSubmitted && (
					<motion.form
						initial={{
							opacity: 0,
							y: 16,
						}}
						animate={{
							y: 0,
							opacity: 1,
							transition: {
								y: { stiffness: 1000, velocity: -100 },
								duration: 0.3,
								delay: 0.2,
							},
						}}
						exit={{
							y: 16,
							opacity: 0,
							transition: {
								y: { stiffness: 1000 },
								delay: 0,
							},
						}}
						id={formID}
						onSubmit={handleSubmit(onSubmit)}
						role="form"
					>
						<div className={classes}>
							{formFromProps &&
								formFromProps.fields &&
								formFromProps.fields.map((field, index) => {
									// @ts-ignore
									const Field: FC<any> = fields?.[field.blockType]
									if (Field) {
										return (
											<Fragment key={index}>
												<Field
													form={formFromProps}
													{...field}
													{...formMethods}
													register={register}
													errors={errors}
													control={control}
												/>
											</Fragment>
										)
									}
									return null
								})}
						</div>
						<footer className="mt-8 flex justify-end">
							<FormSubmit
								label={submitButtonLabel}
								isSubmitting={isLoading && !hasSubmitted}
							/>
						</footer>
					</motion.form>
				)}
			</div>
		</AnimatePresence>
	)
}

export default PayloadForm
