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
			header={'Help'}
			text={`
Under this Agreement, «BEE2BEE» is the one part , and any person who has accepted the terms of this Public Offer Agreement - Community Member, is the other part, hereinafter referred to collectively as the Parties, have entered into this Public Offer Agreement (hereinafter referred to as the Agreement), addressed to an unlimited circle of persons, which is the official a public offer by «BEE2BEE» to conclude an agreement with the Community Member on the use of the donation platform, as well as other services and goods that are posted in the relevant section of the Website https://iamubuntu.love. Community members, at the time of registration on the https://iamubuntu.love resources, accept the terms of this Agreement as follows.

1. GENERAL PROVISIONS

The contractual relationship between «BEE2BEE»

1.1. and Community Members is made in the form of a Public Offer Agreement. Clicking on the page of the Website https://iamubuntu.love in the relevant section of the button "Registration, take part, participate" - means that the Member of the Community, regardless of status (individual, legal entity, individual entrepreneur), in accordance with the current international law, took to fulfill the terms of the Public Offer Agreement, which are listed below.

1.2. The public offer agreement is public, that is, its terms are the same for all Community Members, regardless of status (individual, legal entity, individual entrepreneur). In full agreement with this Agreement, the Community Member accepts the terms and procedure of donation, responsibility for taxation in accordance with the laws of the country of the Community Member and for failure to comply with the terms of this Agreement.

1.3. This Agreement comes into force from the moment you click on the button (“Registration, take part, participate” on the site https://iamubuntu.love), by which the Community Member agrees to make a donation, as well as receive free gifts from other platform participants.

2. TERMS AND DEFINITIONS

Public offer agreement - a public agreement, a sample of which is posted on the Website https://bee2bee.world and the use of which is mandatory for all Donors.

Acceptance - is the consent of the participant with all the terms of the offer, by performing the action of voluntary donation of a monetary gift to another member of the community.

A gift is a gratuitous fact of giving or receiving a donation from other platform participants, which does not entail any financial or debt obligations, comes only from the voluntary gratuitous desires of each Community Member through the https://iamubuntu.love resource.

Community member - by voluntary decision, agrees to give a cash gift to another person, as an act of mutual assistance, any capable individual, legal entity, individual entrepreneur, in accordance with applicable international law, who has visited the Website https://bee2bee.world and has the intention to carry out the fact of giving or receiving donations from other participants of the platform.

«BEE2BEE» is a voluntary community that unites people in a single ideology of giving and mutual assistance.

The website is an online platform that is an accounting system and displays the location of the members of the voluntary community, according to the algorithm for moving from the first level to the next.

3. SUBJECT OF THE CONTRACT

3.1. «BEE2BEE» provides an opportunity through https://bee2bee.world to an interested circle of persons - Community Members, to make a donation among themselves, is not responsible for the randomness of the Gifts, their order and quantity, has no influence on the Community Members and does not receive financial rewards for this.

3.2. «BEE2BEE» and the Community Member confirm that the current Agreement is not a fictitious or sham transaction or a transaction made under the influence or deception.

4. INFORMATION WE COLLECT When you interact with other members through the website, we may collect Personal Data and other information from you as described below:

4.1 Personal Data you provide through the Services: We collect your Personal Data (including, but not limited to, your first and last name, email address, and mobile phone number) when you voluntarily provide such information, such as when you interact with other participants. 4.2 We collect this Personal Data solely for the purpose of providing members with the means to interact with other members within the guidelines of this donation activity. While you are not required to provide any Personal Data, if you choose to withhold such information, we may not be able to provide you with access to become an active participant in this gifting activity.

4.3 By voluntarily providing us with Personal Data, you consent to its use in accordance with this Privacy Policy.

4.4 Non-Personal Data. When you interact with «BEE2BEE» members through the gifting website, we automatically receive and store certain non-identifiable personal information. Such information, collected passively using various technologies, cannot currently be used to specifically identify you. Examples of this non-identifiable personal information include the type of internet browser or mobile device you use, any website from which you accessed the Services, your operating system, location data (which is anonymous and where you log in through the Platform you will be asked whether you consent to the Services accessing your location, which can be updated at any time in your device settings) (“Non-Personal Data”).

4.5 Location Information: When you use a gifting website to interact with, collect, or organize gifts, the Services may ask you for your city, state, or province of residence. Please be aware that other users of the Services may see your city, state or province of residence in connection with donation activities. 4.6 Social Media Integration: One of «BEE2BEE»'s gift giving policies is that no personal or other information will be displayed, shared or disclosed on any social media platform. You may not be able to post details of your participation in the Social Media Services when you access content through the Services (for example, you MAY NOT post to Facebook that you have completed an action on the Platform); you acknowledge that if you choose to do so, you risk losing your profile and continued participation in the «BEE2BEE» Gifting Platform. 4.7 Mobile Services: The Services include certain services accessible through a mobile device, including the ability to upload content to the Services through a mobile device, the ability to view the Platform and Services from a mobile device, and the ability to access certain features through an app downloaded and installed. on a mobile device (collectively, "Mobile Services"). If you are accessing the Services through a mobile device, your wireless carrier's standard charges, data rates, and other charges may apply. In addition, the download, installation, or use of certain mobile services may be prohibited or restricted by your carrier, and not all mobile services may work with all carriers or devices. By using the Mobile Services, you agree that other members may communicate with you regarding «BEE2BEE» via SMS, MMS, text messages, or other electronic means to your mobile device, and that certain information about your use of the Mobile Services may be transmitted . us. If you change or deactivate your mobile phone number, you agree to promptly update your «BEE2BEE» profile account information to ensure that your messages are not forwarded to the person who received your old number. Similarly, in cases where you close the email addresses that were used to register for participation.

5. USE OF PERSONAL DATA AND OTHER INFORMATION

5.1 «BEE2BEE» may also use your Personal Data and other Non-Personal Data collected in the course of website gift-giving activities to assist us in providing hosting, processing interaction information, fulfilling requests for information between Members on a particular board, receiving and sending messages, updating public lists, analyzing data, providing support services, or other tasks from time to time.

5.2 «BEE2BEE» may use your Personal Data to contact you in the future to inform you about services we think you may be interested in, where permitted by applicable law. We may also use your Personal Data and Personal Data of third parties to send communications relating to the Services, in accordance with applicable law. For example, we may periodically send emails to registered participants in a gift giving event regarding their recent interactions with another participant. In addition, if you use any feature of the Services that allows you to communicate with third parties (for example, refer a third party to the Services or communicate with them regarding this donation opportunity), either by providing Personal Data of third parties to the Services or otherwise allowing the Services automatically access the Personal Data of third parties in your possession, you acknowledge and agree that you have the authority of the relevant third party to access and use the relevant Personal Data of third parties, and that you have notified these third parties and informed them that how «BEE2BEE» collects and uses their information to provide access to the donation promotion. We reserve the right to identify you as the person who referred the referral in any messages sent to him. We may use Third Party Personal Data to contact such third party using the Third Party Personal Data provided and/or provide you with an editable message template designed to facilitate communication between you and such third party through the Services. In addition to sending the above communications, we may also send reminders or related communications to you and third parties on your behalf from time to time, as permitted by applicable law.

5.3 Legal Requirements: «BEE2BEE» may disclose your Personal Data if required to do so by law or in the good faith belief that such action is necessary to comply with legal obligations, protect and defend the rights or property of «BEE2BEE» creators, developers, leaders and speakers to act in exigent circumstances to protect personal safety of users of the Services or the public, or protect from legal liability.

6. AGREEMENT TO TERMS

By accessing any or all of the Platform Services, you expressly acknowledge that you have read and understood these Terms; you agree to be bound by these Terms; and you are legally competent to enter into these Terms. If you do not agree to these Terms or any updates or modifications to these Terms, you may not access or use the Platform. WE DO NOT PROVIDE INVESTMENT, FINANCIAL ADVICE OR ADVISORY SERVICES. WE ARE ONLY A GIFT PLATFORM AND DO NOT ADVICE OR RECOMMEND. DECISIONS TO PARTICIPATE MUST BE MADE ON YOUR OWN CONSENT.

7. RIGHT TO PARTICIPATE

To be eligible to use «BEE2BEE»: you must be at least eighteen (18) years of age and legally competent to enter into these Terms; you must not be a resident of authorized jurisdictions under any trade embargoes, United Nations Security Council (“SC”) resolutions or HM Treasury financial sanctions regime; and you must not currently be subject to or subject to economic sanctions such as the United Nations Security Council Sanctions List, the OFAC-maintained Specially Designated Citizens List, the U.S. Denied List of Persons or Entities. Department of Commerce or any similar list maintained by any other relevant sanctions authority. If you are using our Services on behalf of a legal entity, you also represent and warrant that: the legal entity is properly organized and exists in accordance with the applicable laws of its organization's jurisdiction; and you are duly authorized by such entity to act on its behalf. You may only use «BEE2BEE» if permitted by the laws of your jurisdiction. For the avoidance of doubt, you may not use the Platform if you are located in or are a citizen or resident of any state, country, territory or other jurisdiction where your use of our services would be illegal or otherwise violate any applicable law. You agree that you use the platform only with legally achieved funds that are rightfully yours. By using «BEE2BEE», you represent and warrant that you meet all of the requirements we have set out in these terms and conditions. However, we can still deny certain people access to or use of «BEE2BEE», and we reserve the right to change our eligibility criteria at any time.

8. TERMS OR SERVICE UPDATES

We reserve the right to update or change these terms at any time at our sole discretion. If we do so, we will notify you by posting the revised terms on the website or through such other means of communication as we deem reasonable. Such revised terms, as published, will be effective immediately, unless otherwise stated. You should check our website regularly to inform yourself of any such changes. If you continue to use «BEE2BEE» after any update or change to the terms, you are deemed to have accepted the revised terms. If you do not agree to the terms or any update or modification of the terms, you must stop accessing the platform.

9. USE OF THE PLATFORM

You agree that you will not violate any laws when using our services. This includes any local, provincial, state, federal, national or international laws that may apply to you. You agree that you will not use our services to pay for, support, or otherwise engage in any illegal activity, including, but not limited to, illegal or otherwise prohibited trading, illegal gambling, fraud, money laundering, or terrorist activities. For the avoidance of doubt, if we discover that you have violated these terms and/or any applicable laws or regulations, including but not limited to the Bank Secrecy Act, we reserve all of our rights and remedies under these terms and conditions and law and take all necessary action against you. You further agree that: you will not encourage or induce any third party to engage in any activity prohibited by this Agreement; you will not impersonate anyone or use or attempt to use another user's account without permission or use our services in any way that may interfere with, violate this Agreement; you will not reverse engineer or circumvent, circumvent or attempt to circumvent or circumvent any measures we may use to prevent or restrict access to the Services, including, but not limited to, other accounts, computer systems or networks connected to the Platform and you will not violate or misappropriation. We have no obligation to monitor any User Content, and we have the absolute right to take any necessary action at any time and for any reason without notice if you violate these terms. Any use of «BEE2BEE», except as specifically permitted by these terms and conditions, without our prior written permission is strictly prohibited, and we reserve the right to terminate your account immediately without prior notice. You acknowledge and agree that by using the platform, you may be exposed to content that is offensive, indecent or objectionable. We are not responsible and will not be liable for any User Content, including any loss or damage to any of your User Content.

10. LIMITATION OF LIABILITY AND DISCLAIMER OF WARRANTIES

You acknowledge and agree that we have no control over and are under no obligation to take any action with respect to: failures, failures, errors or delays in the processing of digital assets that you may experience while using the services; the risk of failure of hardware, software and Internet connections; risk of introduction or discovery of a vulnerability or unforeseen changes in the relevant networks. You release us from any and all liability related to any loss, damage or claim arising from: user errors such as forgotten passwords, mis-formed transactions, or incorrectly entered digital asset addresses; server failure or data loss; unauthorized access to BEE2BEE. We make no representations regarding any third party content contained in or accessed through our services. Any other terms, warranties or representations associated with such content are solely between you and such organizations and/or individuals.

11. LIMITATION OF LIABILITY

Under no circumstances, we, our affiliated persons or any appropriate shareholders, members, directors, officials, employees, lawyers, agents, representatives, suppliers or contractors are not responsible for any direct damage or random, indirect, including, but not limited: Any unauthorized use of your address of the account of the account and/or closed key due to your inability to your account, any interruption or termination of transfer to the service or from them or any errors, viruses, Trojan horses or the like interruptions in the phone; OMISSIONS, INTERRUPTIONS, DELAY, REMOVAL OR DEFECTS IN ANY DEVICE OR NETWORK, SUPPLIERS OR SOFTWARE (INCLUDING BUT NOT LIMITED TO THOSE THAT DO NOT PERMIT PARTICIPATION IN OUR SERVICES); ANY INJURY OR DAMAGE TO COMPUTER EQUIPMENT; INABILITY OF FULL ACCESS TO OUR WEBSITE OR SERVICES OR ANY OTHER WEBSITE; THEFT, FORGERY, DESTRUCTION OR UNAUTHORIZED ACCESS TO IMAGES OR OTHER CONTENT OF ANY KIND; DATA THAT IS PROCESSED LATE OR INCOMPLETE OR INCOMPLETE OR LOST; TYPOGRAPICAL, PRINTING OR OTHER ERRORS, OR ANY COMBINATIONS THEREOF; OR ANY OTHER QUESTIONS RELATED TO THE WEBSITE OR ANY OTHER ASPECT OF THE SERVICES. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.

12. DISCLAIMER OF WARRANTY

THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE", AND WITHOUT WARRANTY OF ANY KIND. To the maximum extent permitted by law, we refuse all statements and guarantees that are obvious or implied related to services and fundamental software or any aspect of information, content or services provided or belonging to us or of which they directly refuse. FURTHERMORE, WE DO NOT REPRESENT OR GUARANTEE THAT THE CONTENT AVAILABLE THROUGH THE SERVICES IS ACCURATE, COMPLETE, AVAILABLE, CURRENT, FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE RESULTS OF THE USE OF THE SERVICES WILL BE SUFFICIENT. WE DO NOT REPRESENT OR WARRANT THAT ACCESS TO OR USE OF THE SERVICES AND ITS FUNCTIONALITY WILL BE UNINTERRUPTED, UNINTERRUPTED, TIMELY OR ERROR-FREE. SOME STATES DO NOT ALLOW THE DISCLAIMER OF IMPLIED WARRANTIES, SO THE ABOVE DISCLAIMER MAY NOT APPLY TO YOU.

13. REFUND

To the extent permitted by applicable law, you agree to defend, indemnify and hold harmless us, our affiliates and our respective shareholders, members, directors, officers, employees, attorneys, agents, representatives, suppliers and contractors from any and all claims, damages, liabilities, losses, liabilities, tort, costs or or regulation, or rights of any third party. If you violate the requirements of the Agreement, you are obliged to reimburse us for all losses incurred in connection with the satisfaction of the claims of third parties (whose rights you have violated). We reserve the right to make claims for losses and other claims against you by way of recourse.

14. TIME LIMIT ON CLAIMS

You agree that any claim that may arise out of or in connection with your relationship with us must be brought within 14 calendar days after such claim arises or your claim will be permanently barred.

15. NO REFUSAL

Our failure to exercise or delay the exercise of any right, power or privilege under this Agreement will not operate as a waiver; nor shall any one-time or partial exercise of any rights, powers or privileges preclude their further or further exercise. A waiver of any such right or provision will only be effective if it is in writing and signed by a duly authorized representative. Except as expressly provided in this Agreement, either party to any of its remedies under this Agreement shall not prejudice other remedies under this Agreement or otherwise.

16. FORCE MAJOR

We are not responsible for any delay, disruption or interruption of service that results directly or indirectly from any cause or condition beyond our reasonable control, including but not limited to: any delay or failure due to any act of God. disasters, acts of civil or military authorities, acts of terrorism, civil or industrial disturbances, blockages, changes, and for the avoidance of doubt, changes in any protocol related to the blockchain, other disasters or any other events that are beyond our reasonable control, and shall not affect the validity and enforceability of any remaining provisions. If we are unable to perform our services set forth in the Agreement due to factors beyond our control, including, but not limited to, the aforementioned force major events or changes in applicable law and/o sanctions policy, we will not be liable for the services provided in in accordance with this Agreement, for a period of time coinciding with the relevant event.

17. ENTIRE AGREEMENT

This agreement sets forth the entire understanding and agreement with respect to the subject matter of this Agreement and supersedes any prior discussions, agreements or understandings of any kind (including, without limitation, any prior versions of the terms) and of any nature between us. Except as provided above, any changes to this Agreement must be in writing and signed by both parties. You are responsible for: the accuracy and correctness of the registration and payment data specified by you during the registration process on the site or in the chat bot or when making a donation; use by third parties of the credentials used to access the services; use of materials posted on the platform; dissemination of false information about our company that discredits our business reputation (slander); violation of the terms of use of services; violation of payment terms; interfering with the operation of the site and available services or attempting to access them bypassing our instructions.

18. COOKIES

When you interact with or through the gifting website, we strive to make the experience simple and meaningful. When you visit the platform, the web server sends a cookie to your computer or mobile device (as applicable). Cookies are small pieces of information that are transferred to your computer or mobile device (as the case may be) when you visit a website or access or use a mobile application and that store and sometimes track information about your use of the Platform (as case may be). Some of the cookies we use only last for the duration of your web or app session and expire when you close your browser or exit the app. Other cookies are used to remember you when you return to the platform. Some of the cookies used by the platform are set by us and some by third parties who provide services on our behalf. Most web and mobile browsers automatically accept cookies, but if you wish, you can change your browser to prevent this or notify you each time a cookie is set. You can also learn more about cookies by visiting www.allaboutcookies.org which contains additional useful information about cookies and how to block cookies using different types of browsers or mobile devices. Please note, however, that by blocking or deleting the cookies used on the platform, you may not be able to fully enjoy the services. The Platform uses cookies and technologies similar to cookies to collect information about your access to and use of the Platform. You can also update the privacy settings on your device by setting the "Ad Tracking Limit" and "Diagnostics and Usage" property located on the settings screen of your Apple iPhone or iPad, or by resetting your Android ID through the apps available in the Play Store. You may also stop collecting information by uninstalling the application on your device, and for this purpose you can use the standard uninstall process available as part of your device. Some information about the types of cookies we use and how we use them is provided below: Essential: Allows you to navigate and use all the features provided by our platform. Functional cookies: these cookies customize elements of the advertising layout and/or content of the platform pages and remember that you have visited us before; this means that we can determine the number of unique visitors we receive. This allows us to make sure we have enough resources for the number of users we get. Therefore, when you use our platform, we remember you, your preferences, and the information you have provided to us in order to provide you with a personalized experience. Performance cookies allow us to collect information about how you use the platform. They collect anonymous statistical information about how you use the platform (including how much time you spend on the platform) and where you came from to the platform so that we can improve the platform and learn which features of the platform are most popular with users. This information does not include personal data, although we may associate such information with user accounts once we receive it from a third party. Advertising and targeting: These cookies collect information about the pages you visit on the Internet. They collect information about the pages you visit or platform features you use, as well as other information about other websites you visit, in order to place you in a "market segment". This information is only collected with reference to the IP address or unique identifier of the device you are using (applicable cookie ID), and may also include information about the county or province and city where you are located, along with the name of your website. service provider. This information is then used to serve interest-based advertisements on the platform that are believed to be relevant to your market segment. This may cause you to see advertisements for our Platform when you visit other websites.

We use third parties such as Google Analytics to analyze statistical information from platform users and provide you with interest-based advertising. You can better understand Google Analytics at https://www.google.com/intl/en/analytics/learn/privacy.html and learn how to manage Google Analytics settings at https://tools.google.com/dlpage/gaoptout.

19. LINKS TO OTHER WEBSITES

This Privacy Policy applies only to the Services. The Services may contain links to other websites that are not operated or controlled by «BEE2BEE» ("Third Party Sites"). The policies and procedures described here do not apply to Third Party Sites. Links from services do not imply that «BEE2BEE» endorses or reviews Third Party Sites. We suggest that you contact these sites directly for information about their respective privacy policies.

20. OTHER TERMS AND CONDITIONS

Your access to and use of the Gift Giving Website is subject to the Terms of Service and other terms and conditions that may be provided to you in connection with your use of the gift giving activity. By posting your own content, you must comply with the laws of the country of residence. In any case, it is prohibited to publish content of a pornographic, sexual nature, promoting violence, sadism, discrimination, containing threats or slander. In addition, your content must also not infringe the rights of third parties. This applies to property and moral rights of third parties, including intellectual property rights (for example, copyright and trademark and trade name rights). In particular, you also have an obligation not to violate the rights of third parties when posting comments/reviews, profile photos or any pictures you post. We have the right to remove or move any content posted by you at any time if we believe that it violates the rights of third parties or legal requirements. If you violate these principles of content placement, we have the right to send you a written warning and temporarily block your account and suspend the provision of services, or terminate the contract unilaterally. 21. FINAL PROVISIONS

21.1 By making a donation or receiving a gift on the site https://iamubuntu.love, I am a Community Member confirming that I am fully acquainted with and agree to the terms of the Public Offer Agreement as well as the Privacy Policy and have no moral and financial claims against BEE2BEE.

21.2 By making a donation or receiving a gift on the website https://iamubuntu.love, I am a Community Member, I confirm that I am doing this in my right mind and mind, completely on voluntary ambushes, without expecting anything in return, and I take full responsibility for my actions.

21.3 This platform can work in all countries of the world, any jurisdictions where it is technically possible to connect to the Internet, where there are people who want to give and exchange gifts for free.

21.4 For all gifts sent and received, participants are fully responsible in the jurisdiction of the country where the transactions were made and undertake to declare and pay taxes on their own.

The content of the public offer agreement on the site https://bee2bee.world was communicated to me in an accessible and understandable way.

You can contact us as follows: support@bee2bee.world
	`}
		/>
	)
}
