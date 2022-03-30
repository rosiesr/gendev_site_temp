import Text from './Text';

export default function About() {
    return (
        <div className="footer-newsletter" data-aos="fade-up">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 section-title">
                        <h2>About </h2>
                        <p>This is a site about the Yale Computer Socity</p>
                        <Text text={"text for the about page"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}