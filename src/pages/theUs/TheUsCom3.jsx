import "../../styles/TheUsCom3.css"
import passion from '../../assets/passion.svg'
import dialogue from '../../assets/dialogue.svg'
import people from '../../assets/people.svg'
import culture from '../../assets/culture.svg'
import meaning from '../../assets/meaning.svg'

const TheUsCom3 = () => {

    return(
        <>
        <div className="biggestu3">
            <p className="bigu3">OUR AIM</p>
            <p className="smallu3">We’re passionate about giving you the best results to make
                 your vision a reality. By providing great support and applying our focus,
                  we are a company who can and we can for you.  We believe in educating our
                   customers so we write articles to improve their knowledge about the power
                    of the web. You can find our articles here.
            </p>
            <div className="asideu3">
                <div className="babyu3">
                    <img src={passion} alt="" className="imgu3"/>
                    <p className="textu3">PASSION</p>
                    <p className="textu301">It’s what we love, so it’s what we do.</p>
                </div>
                <div className="babyu3">
                    <img src={dialogue} alt="" className="imgu3"/>
                    <p className="textu3">DIALOGUE</p>
                    <p className="textu301">We prefer a jargon-free approach.</p>
                </div>
                <div className="babyu3">
                    <img src={people} alt="" className="imgu3"/>
                    <p className="textu3">PEOPLE</p>
                    <p className="textu301">We have a people-focused attitude.</p>
                </div>
                <div className="babyu3">
                    <img src={culture} alt="" className="imgu3"/>
                    <p className="textu3">CULTURE</p>
                    <p className="textu301">Breakfast meetings are our favourite.</p>
                </div>
                <div className="babyu3">
                    <img src={meaning} alt="" className="imgu3"/>
                    <p className="textu3">ESSENSE</p>
                    <p className="textu301">We love style, but that doesn’t mean we compromise on substance.</p>
                </div>
            </div>


        </div>

        </>
    )
}

export default TheUsCom3