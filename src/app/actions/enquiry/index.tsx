'use server'

export async function submitEnquiry(
	formData: { field: string; value: unknown }[],
	formId: string,
	gReCaptchaToken: string
) {
	try {
		const reCaptcha = await fetch(
			'https://www.google.com/recaptcha/api/siteverify',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: `secret=${process.env.GOOGLE_RECAPTCHA_SECRET}&response=${gReCaptchaToken}`,
			}
		)

		const reCaptchaRes = await reCaptcha.json()

		if (reCaptchaRes?.score > 0.5) {
			console.log(
				reCaptchaRes,
				'Response from Google reCaptcha verification API'
			)

			const payloadReq = await fetch(
				`${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/api/form-submissions`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						form: formId,
						submissionData: formData,
					}),
				}
			)

			const payloadRes = await payloadReq.json()
			if (payloadRes.status >= 400) {
				return {
					message: 'Error submitting the enquiry form',
					status: 'failure',
				}
			} else {
				console.log('Response from Payload Submission API', payloadRes)
				return {
					message: 'Enquiry submitted successfully',
					status: 'success',
				}
			}
		} else {
			return {
				message: 'Google ReCaptcha Failure',
				status: 'failure',
			}
		}
	} catch (error) {
		return {
			message: 'Error submitting the submitting form',
			status: 'failure',
		}
	}
}
