import "../styles/Component5.css"
import logo1 from '../assets/logo2.svg'

const Component5 = () => {

    return(
        <>
        <div className="contain201">
            <div className="logo201">
                <img src={logo1} alt="logo" className="img201"/>
            </div>
            <div className="aside201">
                <div className="proces">WHATEVER YOU NEED</div>
                <p className="big201">SERVICES</p>
                <p className="small201">We want to make your company stand out, because first impressions count.</p>
                <div className="child201">
                    <div className="baby201">
                        <p className="big202">WEB DESIGN</p>
                        <p className="small202">Always look fresh with sharp designs and stunning layouts.</p>
                    </div>
                    <div className="baby201">
                        <p className="big202">WEB DEVELOPMENT</p>
                        <p className="small202">Flexible, secure and innovative back end development that makes your site tick.</p>
                    </div>
                    <div className="baby201">
                        <p className="big202">DOMAIN REGISTRATION</p>
                        <p className="small202">Find the right domain to fit your company</p>
                    </div>
                    <div className="baby201">
                        <p className="big202">HOSTING</p>
                        <p className="small202">We’ll set up a hosting solution for you to give you peace of mind.</p>
                    </div>
                </div>

            </div>
        </div>

        </>
    )
}

export default Component5