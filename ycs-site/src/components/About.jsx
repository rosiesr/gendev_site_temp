import Text from './Text';
import pic1 from './pic1.png'

export default function About() {
    return (
        <div className="footer-newsletter" data-aos="fade-up">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 section-title">
                        <h2>About </h2>
                        <Text text={"text for the about page"}/>
                        <Image pic={pic1}/>
                        <Text text={"What we do:"}/>
                        <List items={["thing 1","thing 2","thing 3"]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}