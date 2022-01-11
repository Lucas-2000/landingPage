import '../styles/landingpage.scss'
import { RiComputerLine } from 'react-icons/ri'
import { IoIosPricetags } from 'react-icons/io'
import { GiShakingHands } from 'react-icons/gi'

export function LandingPage() {
    return (
        <div id="landing-page">
            <header>
                <h1>Shopify</h1>
                <strong>Sell online with Shopify</strong>
                <p>Trusted by over 400.000 businneses worldwide</p>
                <input type="email" placeholder="Enter your email address" />
                <button>Get started</button>
                <p className="trial-text">Try Shopify free for 14 days. No risk, and no credit card required.</p>
            </header>
            <nav>
                <div>
                    <RiComputerLine style={{color: '#6494E3', marginBottom: '1rem'}} size="3rem" />
                    <br />
                    <strong>Beautiful themes that are responsive and customizable</strong>
                    <p>No design skills needed. You have complete control over the look and feel of your website, from its layout, to content and colors.</p>
                </div>
                <div>
                    <IoIosPricetags style={{color: '#6494E3', marginBottom: '1rem'}} size="3rem"  />
                    <br />
                    <strong>Beautiful themes that are responsive and customizable</strong>
                    <p>Whether you sell online, on social media, in store or out of the trunk of your car. Shopify has you covered. Start selling anywhere for just $9/month.</p>
                </div>
                <div>
                    <GiShakingHands style={{color: '#6494E3', marginBottom: '1rem'}} size="3rem"  />
                    <br />
                    <strong>Beautiful themes that are responsive and customizable</strong>
                    <p>Shopify handles everything from marketing and payments, to secure checkout and shipping.</p>
                </div>
            </nav>
        </div>
    )
}