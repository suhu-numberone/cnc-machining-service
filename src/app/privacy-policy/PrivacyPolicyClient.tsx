"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";
import { EditableText } from "@/components/cms";

interface PrivacyPolicyClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

const D = {
  title: "PRIVACY POLICY",
  lastUpdated: "Last updated January 23, 2024",
  intro:
    'This privacy notice for Shenzhen Rapid Direct Co., Ltd (doing business as RapidDirect) ("we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:\n\nVisit our website at https://www.rapiddirect.com, or any website of ours that links to this privacy notice\n\nEngage with us in other related ways, including any sales, marketing, or events\n\nQuestions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at support@rapiddirect.com.',
  summaryTitle: "SUMMARY OF KEY POINTS",
  summary:
    'This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.\n\nWhat personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.\n\nDo we process any sensitive personal information? We do not process sensitive personal information.\n\nDo we receive any information from third parties? We do not receive any information from third parties.\n\nHow do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.\n\nIn what situations and with which types of parties do we share personal information? We may share information in specific situations and with specific categories of third parties.\n\nHow do we keep your information safe? We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.\n\nWhat are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.\n\nHow do you exercise your rights? The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.\n\nWant to learn more about what we do with any information we collect? Review the privacy notice in full.',
  tocTitle: "TABLE OF CONTENTS",
  toc: "1. WHAT INFORMATION DO WE COLLECT?\n2. HOW DO WE PROCESS YOUR INFORMATION?\n3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?\n4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?\n5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?\n6. HOW LONG DO WE KEEP YOUR INFORMATION?\n7. HOW DO WE KEEP YOUR INFORMATION SAFE?\n8. DO WE COLLECT INFORMATION FROM MINORS?\n9. WHAT ARE YOUR PRIVACY RIGHTS?\n10. CONTROLS FOR DO-NOT-TRACK FEATURES\n11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?\n12. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?\n13. DO WE MAKE UPDATES TO THIS NOTICE?\n14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?\n15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
  s1Title: "1. WHAT INFORMATION DO WE COLLECT?",
  s1Content:
    'Personal information you disclose to us\n\nIn Short: We collect personal information that you provide to us.\n\nWe collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.\n\nPersonal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:\n• names\n• phone numbers\n• email addresses\n• mailing addresses\n• job titles\n• usernames\n• passwords\n• billing addresses\n\nSensitive Information. We do not process sensitive information.\n\nPayment Data. We may collect data necessary to process your payment if you make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is stored by PayPal. You may find their privacy notice link(s) here: https://www.paypal.com/us/legalhub/privacy-full.\n\nAll personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.\n\nInformation automatically collected\n\nIn Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.\n\nWe automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.\n\nLike many businesses, we also collect information through cookies and similar technologies.\n\nThe information we collect includes:\n• Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).\n• Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.\n• Location Data. We collect location data such as information about your device\'s location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.',
  s2Title: "2. HOW DO WE PROCESS YOUR INFORMATION?",
  s2Content:
    "In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.\n\nWe process your personal information for a variety of reasons, depending on how you interact with our Services, including:\n• To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.\n• To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.\n• To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.\n• To fulfill and manage your orders. We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.\n• To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time.\n• To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.",
  s3Title:
    "3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?",
  s3Content:
    "In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.\n\nIf you are located in the EU or UK, this section applies to you.\n\nThe General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:\n• Consent. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.\n• Performance of a Contract. We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.\n• Legitimate Interests. We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to send users information about special offers and discounts on our products and services.\n• Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.\n• Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.\n\nIf you are located in Canada, this section applies to you.\n\nWe may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.\n\nIn some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:\n• If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way\n• For investigations and fraud detection and prevention\n• For business transactions provided certain conditions are met\n• If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim\n• For identifying injured, ill, or deceased persons and communicating with next of kin\n• If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse\n• If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province\n• If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records\n• If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced\n• If the collection is solely for journalistic, artistic, or literary purposes\n• If the information is publicly available and is specified by the regulations",
  s4Title:
    "4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
  s4Content:
    'In Short: We may share information in specific situations described in this section and/or with the following categories of third parties.\n\nVendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct. The categories of third parties we may share personal information with are as follows:\n• Ad Networks\n• Data Analytics Services\n• Sales & Marketing Tools\n\nWe also may need to share your personal information in the following situations:\n• Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.',
  s5Title: "5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
  s5Content:
    "In Short: We may use cookies and other tracking technologies to collect and store your information.\n\nWe may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.",
  s6Title: "6. HOW LONG DO WE KEEP YOUR INFORMATION?",
  s6Content:
    "In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.\n\nWe will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.\n\nWhen we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.",
  s7Title: "7. HOW DO WE KEEP YOUR INFORMATION SAFE?",
  s7Content:
    "In Short: We aim to protect your personal information through a system of organizational and technical security measures.\n\nWe have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.",
  s8Title: "8. DO WE COLLECT INFORMATION FROM MINORS?",
  s8Content:
    "In Short: We do not knowingly collect data from or market to children under 18 years of age.\n\nWe do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at support@rapiddirect.com.",
  s9Title: "9. WHAT ARE YOUR PRIVACY RIGHTS?",
  s9Content:
    'In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.\n\nIn some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.\n\nWe will consider and act upon any request in accordance with applicable data protection laws.\n\nIf you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.\n\nIf you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.\n\nWithdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below or updating your preferences.\n\nHowever, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.\n\nOpting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we send, or by contacting us using the details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.\n\nAccount Information\n\nIf you would at any time like to review or change the information in your account or terminate your account, you can contact us using the contact information provided.\n\nUpon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.\n\nCookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.\n\nIf you have questions or comments about your privacy rights, you may email us at support@rapiddirect.com.',
  s10Title: "10. CONTROLS FOR DO-NOT-TRACK FEATURES",
  s10Content:
    "Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (\"DNT\") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.",
  s11Title:
    "11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
  s11Content:
    'In Short: If you are a resident of California, you are granted specific rights regarding access to your personal information.\n\nWhat categories of personal information do we collect?\n\nWe have collected the following categories of personal information in the past twelve (12) months:\n\nCategory A. Identifiers — Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name — YES\n\nCategory B. Personal information (California Customer Records) — Name, contact information, education, employment, employment history, and financial information — YES\n\nCategory C. Protected classification characteristics — Gender and date of birth — YES\n\nCategory D. Commercial information — Transaction information, purchase history, financial details, and payment information — YES\n\nCategory E. Biometric information — Fingerprints and voiceprints — YES\n\nCategory F. Internet or similar network activity — Browsing history, search history, online behavior, interest data, and interactions with websites and applications — NO\n\nCategory G. Geolocation data — Device location — NO\n\nCategory H. Audio, electronic, visual, thermal, olfactory, or similar information — Images and audio, video or call recordings created in connection with our business activities — NO\n\nCategory I. Professional or employment-related information — Business contact details, job title, work history, and professional qualifications — YES\n\nCategory J. Education Information — Student records and directory information — NO\n\nCategory K. Inferences drawn from collected personal information — Inferences drawn from any of the collected personal information to create a profile or summary about an individual\'s preferences and characteristics — YES\n\nCategory L. Sensitive personal Information — NO\n\nWe will use and retain the collected personal information as needed to provide the Services or for:\n• Category A - As long as the user has an account with us\n• Category B - As long as the user has an account with us\n• Category C - As long as the user has an account with us\n• Category D - As long as the user has an account with us\n• Category E - As long as the user has an account with us\n• Category I - As long as the user has an account with us\n• Category K - As long as the user has an account with us\n\nWe may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:\n• Receiving help through our customer support channels\n• Participation in customer surveys or contests\n• Facilitation in the delivery of our Services and to respond to your inquiries\n\nHow do we use and share your personal information?\n\nLearn about how we use your personal information in the section, "HOW DO WE PROCESS YOUR INFORMATION?"\n\nWe collect and share your personal information through:\n• Targeting cookies/Marketing cookies\n• Beacons/Pixels/Tags\n\nWill your information be shared with anyone else?\n\nWe may disclose your personal information with our service providers pursuant to a written contract between us and each service provider.\n\nWe may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.\n\nThe categories of third parties to whom we sold personal information are:\n• Ad Networks\n• Data Analytics Services\n\nThe categories of third parties to whom we shared personal information with are:\n• Data Analytics Services\n• Ad Networks\n\nCalifornia Residents\n\nCalifornia Civil Code Section 1798.83, also known as the "Shine The Light" law permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.\n\nIf you are under 18 years of age, reside in California, and have a registered account with the Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).\n\nCCPA Privacy Notice\n\nThis section applies only to California residents. Under the California Consumer Privacy Act (CCPA), you have the rights listed below.\n\nThe California Code of Regulations defines a "resident" as:\n(1) every individual who is in the State of California for other than a temporary or transitory purpose and\n(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose\n\nAll other individuals are defined as "non-residents."\n\nIf this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.\n\nYour rights with respect to your personal data:\n\nRight to request deletion of the data — Request to delete: You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law.\n\nRight to be informed — Request to know: Depending on the circumstances, you have a right to know whether we collect and use your personal information; the categories of personal information that we collect; the purposes for which the collected personal information is used; whether we sell or share personal information to third parties; the categories of personal information that we sold, shared, or disclosed for a business purpose; the categories of third parties to whom the personal information was sold, shared, or disclosed for a business purpose; the business or commercial purpose for collecting, selling, or sharing personal information; and the specific pieces of personal information we collected about you.\n\nRight to Non-Discrimination for the Exercise of a Consumer\'s Privacy Rights: We will not discriminate against you if you exercise your privacy rights.\n\nRight to Limit Use and Disclosure of Sensitive Personal Information: We do not process consumer\'s sensitive personal information.\n\nVerification process: Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. We will only use personal information provided in your request to verify your identity or authority to make the request.\n\nOther privacy rights:\n• You may object to the processing of your personal information.\n• You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.\n• You can designate an authorized agent to make a request under the CCPA on your behalf.\n• You can opt out from the selling or sharing of your personal information by disabling cookies in Cookie Preference Settings and clicking on the Do Not Sell or Share My Personal Information link on our homepage.\n\nTo exercise these rights, you can contact us by submitting a data subject access request, by email at support@rapiddirect.com, or by referring to the contact details at the bottom of this document.',
  s12Title: "12. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?",
  s12Content:
    "In Short: You may have additional rights based on the country you reside in.\n\nAustralia and New Zealand\n\nWe collect and process your personal information under the obligations and conditions set by Australia's Privacy Act 1988 and New Zealand's Privacy Act 2020 (Privacy Act).\n\nThis privacy notice satisfies the notice requirements defined in both Privacy Acts, in particular: what personal information we collect from you, from which sources, for which purposes, and other recipients of your personal information.\n\nIf you do not wish to provide the personal information necessary to fulfill their applicable purpose, it may affect our ability to provide our services, in particular:\n• offer you the products or services that you want\n• respond to or help with your requests\n• manage your account with us\n• confirm your identity and protect your account\n\nAt any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section \"HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?\"\n\nIf you believe we are unlawfully processing your personal information, you have the right to submit a complaint about a breach of the Australian Privacy Principles to the Office of the Australian Information Commissioner and a breach of New Zealand's Privacy Principles to the Office of New Zealand Privacy Commissioner.\n\nRepublic of South Africa\n\nAt any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section \"HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?\"\n\nIf you are unsatisfied with the manner in which we address any complaint with regard to our processing of personal information, you can contact the office of the regulator, the details of which are:\n\nThe Information Regulator (South Africa)\nGeneral enquiries: enquiries@inforegulator.org.za\nComplaints (complete POPIA/PAIA form 5): PAIAComplaints@inforegulator.org.za & POPIAComplaints@inforegulator.org.za",
  s13Title: "13. DO WE MAKE UPDATES TO THIS NOTICE?",
  s13Content:
    'In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.\n\nWe may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.',
  s14Title: "14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
  s14Content:
    "If you have questions or comments about this notice, you may email us at support@rapiddirect.com or contact us by post at:\n\nShenzhen Rapid Direct Co., Ltd\nBuilding A12, Haosi Industrial Park, Nanpu Road, Xinqiao Street, Bao'an District\nNanpu Road, Xinqiao Street, Bao'an District\nShenzhen, Guangdong 518104\nChina",
  s15Title:
    "15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
  s15Content:
    "Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.",
};

const PP_TOC_ITEMS = [
  { id: "pp-section-1", label: "WHAT INFORMATION DO WE COLLECT?" },
  { id: "pp-section-2", label: "HOW DO WE PROCESS YOUR INFORMATION?" },
  { id: "pp-section-3", label: "WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?" },
  { id: "pp-section-4", label: "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?" },
  { id: "pp-section-5", label: "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?" },
  { id: "pp-section-6", label: "HOW LONG DO WE KEEP YOUR INFORMATION?" },
  { id: "pp-section-7", label: "HOW DO WE KEEP YOUR INFORMATION SAFE?" },
  { id: "pp-section-8", label: "DO WE COLLECT INFORMATION FROM MINORS?" },
  { id: "pp-section-9", label: "WHAT ARE YOUR PRIVACY RIGHTS?" },
  { id: "pp-section-10", label: "CONTROLS FOR DO-NOT-TRACK FEATURES" },
  { id: "pp-section-11", label: "DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?" },
  { id: "pp-section-12", label: "DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?" },
  { id: "pp-section-13", label: "DO WE MAKE UPDATES TO THIS NOTICE?" },
  { id: "pp-section-14", label: "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" },
  { id: "pp-section-15", label: "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?" },
];

export function PrivacyPolicyClient({
  initialContent,
  initialVersion,
}: PrivacyPolicyClientProps) {
  return (
    <CMSProvider
      pageSlug="/privacy-policy"
      initialContent={initialContent}
      initialVersion={initialVersion}
    >
      <Home3Header />
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24 pt-28 lg:pt-32">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            <EditableText path="title" defaultValue={D.title} />
          </h1>
          <p className="text-sm text-white/50 mb-10">
            <EditableText path="lastUpdated" defaultValue={D.lastUpdated} />
          </p>

          <div className="space-y-10">
            <Section path="intro" defaultValue={D.intro} />
            <SectionWithTitle
              titlePath="summaryTitle"
              titleDefault={D.summaryTitle}
              contentPath="summary"
              contentDefault={D.summary}
            />
            <TableOfContents items={PP_TOC_ITEMS} />
            {Array.from({ length: 15 }, (_, i) => {
              const num = i + 1;
              const key = `s${num}` as keyof typeof D;
              return (
                <SectionWithTitle
                  key={num}
                  id={`pp-section-${num}`}
                  titlePath={`${key}Title`}
                  titleDefault={D[`${key}Title` as keyof typeof D] as string}
                  contentPath={`${key}Content`}
                  contentDefault={
                    D[`${key}Content` as keyof typeof D] as string
                  }
                />
              );
            })}
          </div>
        </div>
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}

function Section({
  path,
  defaultValue,
}: {
  path: string;
  defaultValue: string;
}) {
  return (
    <div className="text-white/80 text-sm lg:text-base leading-relaxed whitespace-pre-line">
      <EditableText path={path} defaultValue={defaultValue} multiline />
    </div>
  );
}

function TableOfContents({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="text-xl lg:text-2xl font-bold text-[#D09947] mb-4">
        TABLE OF CONTENTS
      </h2>
      <ol className="space-y-2 text-sm lg:text-base">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-white/80 hover:text-[#D09947] transition-colors"
            >
              {i + 1}. {item.label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

function SectionWithTitle({
  id,
  titlePath,
  titleDefault,
  contentPath,
  contentDefault,
}: {
  id?: string;
  titlePath: string;
  titleDefault: string;
  contentPath: string;
  contentDefault: string;
}) {
  return (
    <div id={id} className={id ? "scroll-mt-24" : undefined}>
      <h2 className="text-xl lg:text-2xl font-bold text-[#D09947] mb-4">
        <EditableText path={titlePath} defaultValue={titleDefault} />
      </h2>
      <div className="text-white/80 text-sm lg:text-base leading-relaxed whitespace-pre-line">
        <EditableText
          path={contentPath}
          defaultValue={contentDefault}
          multiline
        />
      </div>
    </div>
  );
}
