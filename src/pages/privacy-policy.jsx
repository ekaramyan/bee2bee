import TextBlock from '@/containers/TextBlock'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import useLogin from '@/hooks/useLogin'

export default function AboutPage() {
	const dispatch = useDispatch()
	const { refreshToken } = useLogin()
	useEffect(() => {
		const token = Cookies.get('access_token')
		const refresh_token = Cookies.get('refresh_token')
		if (token && refresh_token) {
			dispatch({ type: 'LOG_IN' })
		} else if (!token && refresh_token) {
			refreshToken()
		}
	}, [])
	return (
		<TextBlock
			header={'Privacy Policy'}
			text={`
This Privacy Policy describes how «BEE2BEE» collects and processes your personal information through «BEE2BEE» websites, applications, bots that link to this Privacy Police. «BEE2BEE» refers to the ecosystem consisting of «BEE2BEE» websites (whose domain names include but are not limited to "https://bee2bee.world, mobile applications, clients, applets and other applications that are developed to provide «BEE2BEE» services, and includes in themselves independent platforms, websites, and customers in the ecosystem (for example, "«BEE2BEE» Administrators" refers to all parties who operate «BEE2BEE», including, but not limited to, legal entities, unincorporated organizations and teams that provide «BEE2BEE» services and are responsible for such services «BEE2BEE» as used in this Policy includes the operators of «BEE2BEE» This Privacy Policy applies to all platforms, websites and operator departments of «BEE2BEE» and «BEE2BEE». By using Ihttps://iamubuntu.love, you consent to the collection, storage, processing and transfer of your personal information as described in this Privacy Policy. «BEE2BEE» provides an opportunity through https://iamubuntu.love to an interested circle of persons - Community Members, to make a donation among themselves, is not responsible for the randomness of the Gifts, their order and quantity, has no influence on the Community Members and does not receive financial rewards for this.

1. What personal information does «BEE2BEE» collect and process? Why does «BEE2BEE» process my personal information? What are the legal bases for our use of personal information?

Personal information collected and processed by «BEE2BEE» «BEE2BEE» processes my personal information. Legal basis for our use of personal information (EU and UK GDPR) - E-mail address; - name; - floor; - Transaction services. We use your personal information to process your Performance of a contract when we provide or communicate with you - Date of Birth; - home address; - phone number; - citizenship; - device identifier; - a video recording of you and a photographic image; - transactional information; orders and to contact you about orders and services; - Chat with you. We use your personal information to contact you regarding «BEE2BEE» Services; - We collect and process identification information and sensitive personal data (as detailed in Section 1) in accordance with our Know Your Customer ("KYC") obligations in accordance with applicable laws and regulations and anti-corruption laws and regulations. money laundering; about products or services. This includes when we use your personal information to receive and process orders and process payments. Legal obligation; Comply with our legal obligations under applicable laws and regulations and anti-money laundering laws and regulations. Your consent when we ask for your consent to process your personal information for a specific purpose that we communicate to you. When you consent to the processing of your personal information for a specific purpose, you may withdraw your consent at any time and we will stop processing your data for that purpose. - The Internet Protocol (IP) IP address used to connect your computer to the Internet; - login, email address, password and location of your device or computer; - metrics of «BEE2BEE» Services (for example, the - Provide, troubleshoot and improve the «BEE2BEE» services. We use your personal information to provide functionality, analyze performance, fix bugs, and improve the usability and Our legitimate interests and those of our users when, for example, we detect and prevent fraud and abuse in order to protect the safety of our users, ourselves or others Performance of a contract when we provide or occurrence of technical errors, your interaction with the functions and content of the service, as well as your settings); - setting the version and time zone; efficiency of the «BEE2BEE» services. communicate with you about products or services. This includes when we use your personal information to receive and process orders and process payments. - transaction history; - Information from other sources: We may receive information about you from other sources, such as credit information from credit bureaus; Fraud prevention and credit risk. We process personal information to prevent and detect fraud and abuse in order to protect the safety of our users, «BEE2BEE» and others. We may also use scoring methods to assess and manage credit risk. Legal obligation; comply with our legal obligations under applicable laws and regulations and anti-money laundering laws and regulations Our legitimate interests and those of our users when, for example, we detect and prevent fraud and abuse in order to protect the safety of our users, ourselves or others - Information about your behavior: We may process information about you about your behavior and your activities for marketing and promotional purposes. - Improve our services. We process personal information to improve our services and to ensure you have the best user experience; - Recommendations and personalization. We use your personal information to recommend features and services that may be of interest to you, determine your preferences, and Our legitimate interest in improving our services; Your consent when we ask for your consent to process your personal information for a specific purpose that we communicate to you. When you consent to the processing of your personal information for a specific purpose, you may withdraw your consent at any time and personalize your experience with «BEE2BEE» Services; we will stop processing your data for that purpose.

2. Children. «BEE2BEE» does not permit anyone under the age of 18 to use «BEE2BEE» services.

3. Cookies and other identifiers. We use cookies and similar tools to improve your user experience, deliver our services and understand how customers use our services so that we can make improvements. Depending on the applicable laws in the region you are in, the cookie banner in your browser will tell you how to accept or reject cookies.

4. Does IamUbuntu Share My Personal Information? Information about our users is an important part of our business and we do not sell our users' personal information to others. «BEE2BEE» shares users' personal information only as described below and with «BEE2BEE» 's subsidiaries or affiliates that are either subject to this Privacy Notice or follow practices at least as protective as described in this Privacy Notice . Third Party Service Providers: We employ other companies and individuals to perform functions on our behalf. Examples include data analysis, marketing assistance, payment processing, content transmission, and credit risk assessment and management. These third party service providers only have access to the personal information necessary to perform their functions, but may not use it for other purposes. In addition, they must process personal information in accordance with our contractual agreements and only in accordance with applicable data protection laws. Business Transfers: As we continue to develop our business, we may sell or buy other businesses or services. In such transactions, user information is typically one of the transferred business assets, but remains subject to the promises made in any pre-existing Privacy Notice (unless, of course, the user agrees otherwise). In addition, in the unlikely event that «BEE2BEE» or substantially all of its assets are acquired, user information will be one of the transferred assets. Protecting «BEE2BEE» and others: We release account and other personal information when we believe disclosure is appropriate to comply with the law or our regulatory obligations; enforce or enforce our Terms of Use and other agreements; or protect the rights, property, or safety of «BEE2BEE», our users, or others. This includes exchanging information with other companies and organizations to protect against fraud and reduce credit risk.

5. International transfer of personal data. «BEE2BEE» may transfer your data outside the European Economic Area ("EEA"). «BEE2BEE» establishes appropriate technical, organizational and contractual safeguards (including Standard Contractual Clauses) to ensure that such transfers are made in accordance with applicable data protection regulations, unless the country to which the data is transferred has already been determined by the European Commission to ensure adequate protection level.

6. Information security. We design our systems with your security and privacy in mind. We work to protect the security of your personal information during transmission using encryption protocols and software. We maintain physical, electronic and procedural safeguards in connection with the collection, storage and disclosure of your personal information. Our security procedures mean that we may ask you to verify your identity to protect you from unauthorized access to your account password. We recommend that you use a unique password for your «BEE2BEE» account that is not used for other online accounts, and log out when you're done using the shared computer.

7. Marketing. To provide you with a better user experience, we may share your personal information with our marketing partners for the purposes of targeting, modeling and/or analytics, as well as marketing and advertising. You may opt-out of sharing personal information with our marketing partners if we have no legitimate interest in doing so.

8. What Information Can I Access? You can access information including name, address, phone, payment methods, member profile information.

9. What are my rights? If you have any questions or concerns about how we collect and process your personal information, please contact support. When you consent to the processing of your personal information for a specific purpose, you may withdraw your consent at any time. In addition, in accordance with applicable law, you have the right to request access to, rectification and deletion of your personal data, and request data portability. You can also object to our processing of your personal data or ask us to restrict the processing of your personal data in certain cases by contacting our support team. Right of access: you have the right to obtain confirmation that your data has been processed and to receive a copy of it, as well as certain information related to its processing; Right to rectification: You can request the rectification of your data that is inaccurate, as well as add to it. You can also change your personal information in your account at any time. Right to deletion: In some cases, you may have your data deleted; Right to object: You may object, for reasons related to your particular situation, to the processing of your data. For example, you have the right to object to a commercial search; Right to restriction of processing: under certain circumstances, you have the right to restrict the processing of your data; Right to Portability: In some cases, you may ask to receive your Data that you have provided to us in a structured, widely used and machine-readable format, or, where possible, that we transfer your Data on your behalf directly to another data controller; The right to determine the instructions regarding the use of your personal data after opening: you have the right to determine the instructions regarding the storage, deletion and transfer of your data after your death; The right to lodge a complaint with the relevant data protection authority.

10. How Long Does «BEE2BEE» Keep My Personal Information? We retain your personal information so that you can continue to use the «BEE2BEE» Services, for as long as it is necessary to fulfill the relevant purposes described in this Privacy Notice and as required by law, such as for tax and accounting purposes, compliance anti-money laundering laws or otherwise communicated to you.

11. Terms of Use, Notices and Changes. If you choose to use the «BEE2BEE» Services, your use and any privacy disputes are governed by this Notice and our Offer Agreement. If you have any concerns about privacy in «BEE2BEE», please contact us with a detailed description and we will try to resolve the issue. Our business is constantly changing and our Privacy Notice will also change. You should check our websites frequently to see the latest changes. If you do not agree with the revised content, you must immediately stop accessing «BEE2BEE». When an updated version of the Privacy Policy is released, your continued access to «BEE2BEE» means that you agree to the updated content and agree to be bound by the updated Privacy Notice. Unless otherwise noted, our current Privacy Notice applies to all information we have about you and your account.
	`}
		/>
	)
}