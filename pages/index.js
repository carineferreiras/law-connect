import {Section, ORIENTATION} from "../components/Section";
import {Card} from "../components/Card/Card";
import {Button} from "../components/Button";

import styles from "../styles/Home.module.css";


export default function Home() {
	
	return (
		<>
			<Section orientation={ORIENTATION.HORIZONTAL} hero>
				
				<div className={styles['hero-container']}>
					<div className={styles['hero-description']}>
						<h1>The place to work with your lawyer</h1>
						<p style={{color: '#fff'}}>Your lawyer uses LawConnect to share information with you about your
							legal case in a private, convenient and secure way</p>
						<Button>Create Free Account</Button>
					</div>
				</div>
				<div className={styles['hero-image']}>
					<span className={styles['circle']}></span>
					<img className={styles['hero-img-mobile']} src={'/lc-hero-mobile@2x.png'} />
					<img className={styles['hero-img-desktop']} src={'/lc-hero-desktop@2x.png'} width={'611px'} height={'369px'}/>
				</div>
			
			</Section>
			<Section title={'One Solution Designed to Make Your Film More Money'}>
					<Card imagePath="/lc-safe-docs@2x.jpg"
					      imageAlt="Safe Documents" title="Safe Documents">
						<div>
							<div>LawConnect stores its data on servers provided
								by
								Amazon Web Services and is safer than email.
							</div>
						</div>
					</Card>
					<Card imagePath="/lc-work-remote@2x.jpg"
					      imageAlt="Work remotely" title="Work remotely">
						<div>
							<div>You can sign in to Law Connect and view,
								collaborate and share your documents from anywhere.
							</div>
						</div>
					</Card>
					<Card imagePath="/lc-greater-collab@2x.jpg"
					      imageAlt="Greater Collaboration" title="Greater Collaboration">
						<div>
							<div>Collaborate on documents with clients, lawyers
								and other parties with LawConnect's Comment and Reply.
							</div>
						</div>
					</Card>

			</Section>
			<Section orientation={ORIENTATION.HORIZONTAL} gray>
				
				<div className={styles['section-description']}>
					<h2>Sharing Documents</h2>
					<p>
						Your lawyer will share documents related to your case with you, via LawConnect. Each time a
						document is shared by your lawyer, you will receive an email notification so you can access
						the document.
					
					</p>
					<p>
						If you already have a LawConnect account, you can login and an alert will be
						in your notifications tab that a document has been shared.
					</p>
				</div>
				<img src={'/lc-share-docs@2x.png'} width={'367px'} height={'369px'}/>
			
			</Section>
			
			<Section orientation={ORIENTATION.HORIZONTAL} bgcolor={'#fff'}>
				
					<img className={styles['desktop-img']} src={'/lc-sign-docs-desktop@2x.png'} height={'446px'}/>
					
					<div className={styles['section-description']}>
						<h2>Signning Documents Eletronically</h2>
						<p>
							LawConnect integrates with DocuSign to provide our users with
							a quick, easy and secure way to sign importnt legal documents online.
						</p>
					</div>
					
					<img className={styles['mobile-img']} src={'/lc-sign-docs-mobile@2x.png'} height={'446px'}/>
			</Section>
		</>
	)
	
}
